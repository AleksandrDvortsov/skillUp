function Animation() {
  this.init = () => {
    this.steps = 5;
    this.isAnim = true;
    this.speedAnim = 20;

    this.contParam = document.getElementById("cont").getBoundingClientRect();
    let blockParam = document.getElementById("block").getBoundingClientRect();

    let block = document.getElementById('block');
    this.positionBlock = {
      y: this.contParam.height / 2 - blockParam.height / 2,
      x: this.contParam.width / 2 - blockParam.width / 2,
      width: blockParam.width,
      height: blockParam.height
    }
    block.style.marginTop = `${this.positionBlock.y}px`;
    block.style.marginLeft = `${this.positionBlock.x}px`;
    block.style.marginRight = `${this.contParam.width / 2 - blockParam.width / 2}px`;
    block.style.marginBottom = `${this.contParam.height / 2 - blockParam.height / 2}px`;

    this.countT = this.positionBlock.y;
    this.countB = this.contParam.height / 2 - blockParam.height / 2;
    this.countL = this.positionBlock.x;
    this.countR = this.contParam.width / 2 - blockParam.width / 2;

    this.btnT = document.getElementById("btnT");
    this.btnT.onclick = this.top;
    this.btnB = document.getElementById("btnB");
    this.btnB.onclick = this.bottom;

    this.btnR = document.getElementById("btnR");
    this.btnR.onclick = this.right;
    this.btnL = document.getElementById("btnL");
    this.btnL.onclick = this.left;

    document.onkeyup = (event) => {
      console.log(event.keyCode);
      if(event.keyCode === 38) this.top();
      if(event.keyCode === 40) this.bottom();
      if(event.keyCode === 37) this.left();
      if(event.keyCode === 39) this.right();
    };
   


  };

  this.cheachAnim = () => {
    if(!this.isAnim){
      clearTimeout(draw);
      this.isAnim = true;
    }
  }

  this.redrawImg = (num) => {
    if(num === 0){
      block.style.width = '250px';
      block.style.height = '100px';
    }
    if(num === 1){
      // block.style.height = '250px';
      // block.style.width = '100px';
    }
    // document.getElementById('img').style.transform = "scaleY(0)";
  }


  this.top = () => {
      this.cheachAnim();
      // this.redrawImg(1);
      document.getElementById('img').style.transform = "rotate(-90deg)";
      // document.getElementById('img').style.transform = "scaleY(-0.5)";
      this.redraw("top");
  };
  this.bottom = () => {
    this.cheachAnim();
    // this.redrawImg(1);
    document.getElementById('img').style.transform = "rotate(90deg)";
    this.redraw("bottom");
  };

  this.left = () => {
    this.cheachAnim();
    // this.redrawImg(0);
    document.getElementById('img').style.transform = "scaleX(-1)";
    this.redraw("left");
  };
  this.right = () => {
    this.cheachAnim();
    // this.redrawImg(0);
    document.getElementById('img').style.transform = "scaleX(1)";
    this.redraw("right");
  };
  let draw;
  this.redraw = (type) => {

    if (this.isAnim) {
      this.isAnim = false;

      draw = setInterval(() => {
        switch (type) {
          case "top":
            if (parseFloat(block.style.marginTop) <= this.steps) {
              block.style.marginTop = '2px';
              block.style.marginBottom = this.contParam.height - this.positionBlock.height + 'px';
              clearTimeout(draw);
              this.isAnim = true;
              return;
            }
            this.countT -= this.steps;
            this.countB += this.steps;

            break;
          case "bottom":
            if (parseFloat(block.style.marginBottom) <= this.steps) {
              block.style.marginTop = this.contParam.height - this.positionBlock.height - 2 + 'px';
              block.style.marginBottom = '2px';
              clearTimeout(draw);
              this.isAnim = true;
              return;
            }
            this.countB -= this.steps;
            this.countT += this.steps;
            break;
          case "right":
            if (parseFloat(block.style.marginRight) <= this.steps) {
              block.style.marginRight = '2px';
              block.style.marginLeft = this.contParam.width - this.positionBlock.width + 'px';
              clearTimeout(draw);
              this.isAnim = true;
              return;
            }
            this.countR -= this.steps;
            this.countL += this.steps;
            break;
          case "left":

            if (parseFloat(block.style.marginLeft) <= this.steps) {
              block.style.marginLeft = '2px';
              block.style.marginRight = this.positionBlock.width + 'px';
              clearTimeout(draw);
              this.isAnim = true;
              return;
            }
            this.countR += this.steps;
            this.countL -= this.steps;
            break;
        }
        block.style.marginTop = `${this.countT}px`;
        block.style.marginBottom = `${this.countB}px`;
        block.style.marginLeft = `${this.countL}px`;
        block.style.marginRight = `${this.countR}px`;
      }, this.speedAnim);
    }

  };

  this.init();
}
let animation = new Animation();
