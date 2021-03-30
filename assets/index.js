import Container from './Container.js';
import Ballon from './Ballon.js';
import Modal from './Modal.js';
import {random} from './helper.js';

let data;
const totalBalloons = 100;

const container = new Container({
  el: document.querySelector('.container')
});

const balloonSound = document.getElementById('sound-balloon');
const modal = new Modal();

document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  const response = await fetch('./assets/data.json');
  data = await response.json();
  init();
}

function init() {
  const balloons = Ballon.create(totalBalloons);
  container.append(balloons);
  container.append(modal);
  balloons.map(handleBalloons);
}

function handleBalloons(item) {
  item.position(`${random(-5, 85)}%`, `${random(80, 120)}%`);
  item.animate({
    duration: random(15, 25),
    delay: random(0, 5)
  });
  item.handle({
    'mouseover': handleMouseOver,
    'mouseout': handleMouseOut,
    'click': handleClick
  });
}

function handleClick() {
  balloonSound.play();

  const item = data[random(0, data.length - 1)];
  modal.show({
    title: item.title,
    message: item.message,
    points: `${item.points} punto(s)`,
  });
  this.parentNode.remove();
}

function handleMouseOver() {
  this.parentNode.style.animationPlayState = 'paused';
}

function handleMouseOut() {
  this.parentNode.style.animationPlayState = 'running';
}