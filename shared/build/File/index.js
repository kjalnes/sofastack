const File = function({headers, body, footer}){
  this.headers = headers || {};
  this.body = body || {};
  this.footer = footer || {};
};

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

File.prototype.getBody = function(){
  const body = [];
  let bodyStrs = this.body;
  for (let key in bodyStrs){
    if (typeof bodyStrs[key] === 'string'){
      body.push(bodyStrs[key]);
    } else {
      body.push(bodyStrs[key]());
    }
  }
  return body.join('\n');
};

File.prototype.toString = function(){
  let file = this.getHeader();
  if (Object.keys(this.body).length && Object.keys(this.headers).length){
    file = file + '\n\n';
  }
  file = this.body ? file + this.getBody() : file;

  // if (Object.keys(this.body).length && Object.keys(this.footer).length){
  //   file = file + '\n\n';
  // }

  // file = this.footer ? file + this.footer : file;
  return file;
};

module.exports = File;
