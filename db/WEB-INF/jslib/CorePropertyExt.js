Object.prototype.renameProperty = function(oldName, newName) {
  if(this.hasOwnProperty(oldName)) {
    var val = this[oldName];
    delete this[oldName];
    this[newName] = val;
    return this;
  }
  else {
    return false;
  }
};

Class.prototype.renameProperty = function(oldName, newName) {
  if(this.properties[oldName]) {
    var props = this.properties;
    var propDef = props[oldName];
    delete props[oldName];
    props[newName] = propDef;
    this.properties = props;
  }
  for(var i in this.instances) {
    i.renameProperty && i.renameProperty(oldName, newName);
  }
}
