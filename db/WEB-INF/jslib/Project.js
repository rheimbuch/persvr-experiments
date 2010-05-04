Class({
  id:"Project",
  properties: {
    name: {
      type: "string"
    },
    models: {
      type: "object"
    }
  },
  prototype: {
    initialize: function(projectName) {
      this.name = projectName;
      this.models = {};
    },
    createModel: function(name, schema) {
      schema = schema || {};
      if(this.models[name]) return false;
      this.models[name] = Class({
        id: this.name + "$" + name,
        project: this,
        properties: schema.properties || {},
        prototype: schema.prototype || {}
      });
    }
  }
})