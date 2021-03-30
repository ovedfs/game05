function Container(config) {
  this.el = config.el;
  this.el.style.position = 'relative';
}

Container.prototype.append = function(children) {
  if(! Array.isArray(children)) children = [children];
  children.forEach(item => this.el.append(item.el));
}

export default Container;