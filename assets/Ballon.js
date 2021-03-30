import {random} from './helper.js';

function Ballon(config) {
  this.id = config.id + 1;
  this.imgPath = config.imgPath;
  this.size = config.size;
  this.hue = config.hue;
  this.el = this.el();
}

Ballon.create = function(number) {
  return [...Array(number).keys()].map(i => {
    return new Ballon({
      id: i,
      imgPath: `/assets/images/balloon0${random(1, 6)}.png`,
      size: Math.random().toFixed(2) + random(1, 3),
      hue: random(0, 360)
    });
  });
}

Ballon.prototype.el = function() {
  const balloonContainer = document.createElement('div');
  balloonContainer.classList.add('balloon-container');
  balloonContainer.style.position = 'absolute';
  balloonContainer.id = this.id;

  const span = document.createElement('span');
  span.innerText = this.id;
  
  const balloon = document.createElement('img');
  balloon.src = this.imgPath;
  balloon.dataset.id = this.id;
  balloon.classList.add('balloon');
  //balloon.style.transform = `scale(${this.size})`;
  balloon.style.transform = `scale(0.7)`;
  balloon.style.filter = `hue-rotate(${this.hue}deg)`;

  balloonContainer.append(balloon);
  balloonContainer.append(span);

  return balloonContainer;
}

Ballon.prototype.position = function(x, y) {
  this.el.style.left = x;
  this.el.style.top = y;
  //this.el.style.transform = `transform: perspective(1000px) translateZ(${random(-100, 100)}px)`;
}

Ballon.prototype.animate = function(config) {
  this.el.style.animation = `moveUp ${config.duration}s infinite ${config.delay}s`;
}

Ballon.prototype.handle = function(handlers) {
  const img = document.querySelector(`[data-id='${this.id}']`);
  Object.entries(handlers)
    .forEach(([event, handler]) => img.addEventListener(event, handler));
}

export default Ballon;