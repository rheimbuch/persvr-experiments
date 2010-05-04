Class({
  id:"Annotation",
  properties: {
    target: {"type": [Object, "string"]},
    name: {"type": "string"},
    value: {"type": "any"}
  }
});



Object.prototype.annotations = function() {
  var found = load('/Annotation/[?target=$1]', this.id);
  var notations = {};
  for(var n in found) {
    var name = n.name;
    var value = n.value;
    if(name) {
      if(!notations[name]) notations[name] = [];
      notations[name].push(value);
    }
  }
  return notations;
};

Object.prototype.annotate = function(name, value) {
  var annotation = new Annotation({
    target: this.id,
    name: name,
    value: value
  });
};

if(!Object.methods)
  Object.methods = {};
Object.methods.annotations = {safe:true};
