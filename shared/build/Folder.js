const Folder = function(parent){
  Object.defineProperty(this, 'parent', {enumerable: false,
    value: parent || null,
    configurable: true });
};

Folder.isFolder = function(obj){
  return obj instanceof Folder;
};

Folder.pathCheck = function(path){
  if (!Array.isArray(path)){
    path = path.split('/');

    if (path[0] === '.' || path[0] === ''){
      path.shift();
    }
  }
  return path;
};


Folder.prototype.get = function(path, content){
  path = Folder.pathCheck(path);
  let key =  path.shift();

  if (!this[key] && path.length){
    this[key] = new Folder(this);
  }
  if (Folder.isFolder(this[key]) && path.length){
    return this[key].get(path, content);
  }

  if (!this[key] && path.length === 0 && content){
    content.parent = this;
    this[key] = content;
  }
  return this[key];
};

Folder.prototype.add = function (path, content = new Folder()){
  return this.get(path, content);
};


Folder.prototype.delete = function(path){
  path = Folder.pathCheck(path);
  let current = this;
  while (path.length){
    let key = path.shift();
    if (!current[key]){
      return this;
    }
    if (path.length === 0){
      delete current[key];
      return this;
    }
    current = current[key];
  }
};

module.exports = Folder;
