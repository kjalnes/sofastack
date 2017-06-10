const Folder = function(){
};

Folder.prototype.pathCheck = function(path){
  if (!Array.isArray(path)){
    path = path.split('/');

    if (path[0] === '.' || path[0] === ''){
      path.shift();
    }
  }
  return path;
};

Folder.prototype.get = function(path, content){
  path = this.pathCheck(path);
  let current = this;
  while (path.length){
    let key = path.shift();
    if (!current[key] && !content){
      return current;
    } else if (!current[key] && path.length === 0){
      current[key] = content;
    } else if (!current[key]){
      current[key] = new Folder();
    }
    current = current[key];
  }
  if (content){
    current = content;
  }
  return current;
};

Folder.prototype.add = function (path, content = new Folder()){
  return this.get(path, content);
};


Folder.prototype.delete = function(path){
  path = this.pathCheck(path);
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
