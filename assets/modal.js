function Modal(config = []) {
  this.el = this.create(config);
}

Modal.prototype.create = function(config) {
  const html = document.createElement('section');
  const div = document.createElement('div');
  div.id = 'modal';

  const title = document.createElement('h3');
  title.id = 'modal-title';
  title.innerText = config.title || '';
  div.append(title);
  
  const message = document.createElement('p');
  message.id = 'modal-message';
  message.innerHTML = config.message || '';
  div.append(message);

  const points = document.createElement('span');
  points.id = 'modal-points';
  points.innerText = config.points || '';
  div.append(points);
  
  html.classList.add('modal-container');
  html.addEventListener('click', e => {if(html === e.target) this.hide()});
  html.append(div);

  return html;
}

Modal.prototype.show = function(info) {
  this.setTitle(info.title);
  this.setMessage(info.message);
  this.setPoints(info.points);
  this.el.style.display = 'flex';
  const modal = document.getElementById('modal');
  modal.className = '';
  modal.classList.add(info.title);
}

Modal.prototype.hide = function() {
  this.el.style.display = 'none';
}

Modal.prototype.setMessage = function(message) {
  document.getElementById('modal-message').innerHTML = message;
}

Modal.prototype.setTitle = function(title) {
  document.getElementById('modal-title').innerText = title;
}

Modal.prototype.setPoints = function(points) {
  document.getElementById('modal-points').innerText = points;
}

export default Modal;