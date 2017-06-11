const stringifyObject = require('stringify-object');

const File = function({headers, body, footer}){
  this.headers = headers || {};
  this.body = body || {};
  this.footer = footer || {};
};

//requires and imports
File.prototype.getHeader = function(){
  const header = [];
  let headers = this.headers;
  for (let key in headers){
    if (!Array.isArray(headers[key])){
      header.push(`const ${key} = require('${headers[key]}');`);
    } else {
      headers[key].forEach(item =>
        header.push(`require('${item}');`)
      );
    }
  }
  return header.join('\n');
};

//actual code
File.prototype.getBody = function(){
  const body = [];
  let bodyStrs = this.body;
  for (let key in bodyStrs){
    if (typeof bodyStrs[key] === 'string'){
      body.push(bodyStrs[key]);
    } else {
      body.push(bodyStrs[key](this));
    }
  }
  return body.join('\n');
};

//export
File.prototype.getFooter = function(){
  if (Object.keys(this.footer).length){
    let exportsStr = [];
    let footer = this.footer;
    for (let key in footer){
      exportsStr.push(`exportObj.${key} = ${footer[key]};`);
    }
    return `const exportObj = {};

${exportsStr.join('\n')}

module.exports = exportObj;`;
  }


  return '';
};

File.prototype.toString = function(){
  let file = this.getHeader();
  if (Object.keys(this.body).length && Object.keys(this.headers).length){
    file = file + '\n\n';
  }
  file = this.body ? file + this.getBody() : file;

  if (Object.keys(this.body).length && Object.keys(this.footer).length){
    file = file + '\n\n';
  }

  file = this.footer ? file + this.getFooter() : file;
  return file;
};

module.exports = File;
