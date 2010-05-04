var getVersionMethod = function() {
  return java.lang.Class.forName("org.persvr.data.Persistable").getMethod("getVersion");
}

Object.prototype.isCurrentVersion = function() {
  return getVersionMethod().invoke(this).isCurrent();
};
Object.prototype.getVersionNumber = function() {
  return getVersionMethod().invoke(this).getVersionNumber();
};
Object.prototype.getPreviousVersion = function() {
  return getVersionMethod().invoke(this).getPreviousVersion();
};
Object.prototype.getAllVersions = function() {
  var current = this;
  var prev = current && current.getPreviousVersion();
  
  var versions = [current];
  while(current && prev) {
    versions.push(prev);
    current = prev;
    prev = current.getPreviousVersion();
  }
  return versions;
};