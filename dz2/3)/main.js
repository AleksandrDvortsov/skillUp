var arrColor = ["red", "green", "blue", "grey", "yellow", "orangered", "pink"];
var index = 0;

document.getElementById("block").style.background = arrColor[index];

function prev() {
  index--;
  if (index < 0) index = arrColor.length - 1;

  document.getElementById("block").style.background = arrColor[index];
}

function next() {
  index++;
  if (index === arrColor.length) index = 0;
  document.getElementById("block").style.background = arrColor[index];
}

////////////---OOP---//////////////

function Slider(images, id, defaultIndex = 0) {
  this.index = defaultIndex;
  this.length = images.length;

  this.slideRight = function() {
    this.index++;

    if (this.index > this.length - 1) {
      this.index = 0;
    }

    this.img.style.background = images[this.index];
  }.bind(this);

  this.slideLeft = function() {
    this.index--;

    if (this.index < 0) {
      this.index = this.length - 1;
    }

    this.img.style.background = images[this.index];
  }.bind(this);

  this.init = function() {
    // get element by id slider
    this.container = document.querySelector(id);
    // create html objects
    this.wrap = document.createElement("div");
    this.img = document.createElement("div");
    this.img.style.height = "200px";
    this.img.style.width = "200px";
    this.btnRight = document.createElement("i");
    this.btnLeft = document.createElement("i");
    // set events for buttons
    this.btnRight.onclick = this.slideRight;
    this.btnLeft.onclick = this.slideLeft;

    // set default image
    this.img.style.background = images[this.index];
  };

  this.render = function() {
    this.wrap.className = "slider";
    this.btnLeft.innerHTML = "<";
    this.btnRight.innerHTML = ">";

    this.wrap.appendChild(this.btnLeft);
    this.wrap.appendChild(this.img);
    this.wrap.appendChild(this.btnRight);

    this.container.appendChild(this.wrap);
  };
  this.init();
  this.render();
}

var slider = new Slider(arrColor, "#slider");
var slider = new Slider(arrColor, "#slider2");
//////////// *OOP* //////////////

