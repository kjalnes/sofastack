const File = function({headers, body, footer}){
  this.headers = headers || [];
  this.body = body || null;
  this.footer = footer || null;
};

File.prototype.getHeader = function(){
  const header = [];
  let headers = this.headers;
  for (let key in headers){
    if (!Array.isArray(headers[key])){
      header.push(`const ${key} = require('${headers[key]}');`);
    } else {
      header.push(`require('${headers[key]}');`);
    }
  }
  return header.join('\n');
};

File.prototype.toString = function(){
  let file = this.getHeader();
  if (this.body && this.headers.length > 0){
    file = file + '\n\n';
  }
  file = this.body ? file + this.body : file;

  if (this.body && this.footer){
    file = file + '\n\n';
  }

  file = this.footer ? file + this.footer : file;
  return file;
};

module.exports = File;
