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

File.makeSection = function(str, proto = {}){
  if (typeof str === 'string') {
    return {toString: function(){
      return str;
    }};
  }
  const constructor = function(data){
    this.data = data;
  };

  constructor.prototype.toString = str;
  Object.assign(constructor.prototype, proto);
  return constructor;
};

module.exports = File;
