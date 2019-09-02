var arrColor = ["red", "green", "blue", "grey", "yellow", "orangered", "pink"];
var arrImg = [
"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
"https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg",
"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-260nw-668593321.jpg",
"https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
"https://media.gettyimages.com/photos/arch-bridge-in-kromlau-picture-id539121576?s=612x612",
"https://www.bigstockphoto.com/images/homepage/module-6.jpg"
]
var index = 0;

////////////---OOP---//////////////

function Slider(images, id, isImg, defaultIndex = 0,) {

  this.index = defaultIndex;
  this.length = images.length;

  this.slideRight = () => {
    this.index++;

    if (this.index > this.length - 1) {
      this.index = 0;
    }
    if(isImg) this.img.style.backgroundImage = `url('${images[this.index]}')`;
    if(!isImg) this.img.style.background = images[this.index];
  };

  this.slideLeft = () => {
    this.index--;

    if (this.index < 0) {
      this.index = this.length - 1;
    }
    if(isImg) this.img.style.backgroundImage = `url('${images[this.index]}')`;
    if(!isImg) this.img.style.background = images[this.index];
  }

  this.init = function() {
    // get element by id slider
    this.container = document.querySelector(id);
    // create html objects
    this.wrap = document.createElement("div");
    this.img = document.createElement("div");
    this.img.className = 'img';
    this.btnRight = document.createElement("i");
    this.btnLeft = document.createElement("i");
    // set events for buttons
    this.btnRight.onclick = this.slideRight;
    this.btnLeft.onclick = this.slideLeft;

    // set default image
    if(isImg) this.img.style.backgroundImage = `url('${images[this.index]}')`;
    if(!isImg) this.img.style.background = images[this.index];
  };

  this.render = function() {
    this.wrap.className = "slider";
    this.btnLeft.innerHTML = "<";
    this.btnRight.innerHTML = ">";

    this.img.appendChild(this.btnLeft);
    this.img.appendChild(this.btnRight);
    this.wrap.appendChild(this.img);
    
    this.container.appendChild(this.wrap);
  };
  this.init();
  this.render();
}

var slider = new Slider(arrColor, "#firstSlider", false);
var slider = new Slider(arrImg, "#secondSlider", true);
//////////// *OOP* //////////////

