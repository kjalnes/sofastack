const File = function(sections, {order, parent} = {}){
  this.sections = sections || {};
  this.order = order || Object.keys(sections);
  this.parent = parent || null;
};

File.prototype.toString = function(dilim){
  let order = this.order.length ?  this.order : Object.keys(this.sections);
  dilim = dilim || '\n\n';
  let file = '';
  for (let key in order){
    let name = order[key];
    // console.log(this.sections[name].toString);
    if (this.sections[name]){
      file = file + this.sections[name].toString(this);
      if (key < order.length - 1){
        file = file + dilim;
      }
    }
  }
  return file;
};

File.prototype.addSection = function(key, obj){
  this.sections[key] = obj;
  this.order.push(key);
};

module.exports = File;
