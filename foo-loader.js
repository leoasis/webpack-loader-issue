module.exports = function (content) {
  this.async();
  const dep = content.split('\n')[0].split('\'')[1];
  this._module.someValue = dep.charCodeAt(2); // gets the 'a' from './a'

  if (dep[0] !== '.') {
    this.callback(null, content + 'console.log("the value is", ' + this._module.someValue + ')');
    return;
  }

  this.loadModule(dep, (err, source, sourceMap, module) => {
    if (err) {
      this.callback(err);
      return;
    }

    this._module.someValue += module.someValue;
    console.log(this.resourcePath, this._module.someValue);
    this.callback(null, content + 'console.log("the value is", ' + this._module.someValue + ')');
  });
}
