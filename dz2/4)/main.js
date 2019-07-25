function Animation() {
  this.init = () => {
    this.countT = 155;
    this.countB = 155;
    this.countL = 575;
    this.countR = 575;

    this.btnT = document.getElementById("btnT");
    this.btnT.onclick = this.top;
    this.btnB = document.getElementById("btnB");
    this.btnB.onclick = this.bottom;

    this.btnR = document.getElementById("btnR");
    this.btnR.onclick = this.right;
    this.btnL = document.getElementById("btnL");
    this.btnL.onclick = this.left;
  };

  this.top = () => {
    this.redraw("top");
  };
  this.bottom = () => {
    this.redraw("bottom");
  };

  this.left = () => {
    this.redraw("left");
  };
  this.right = () => {
    this.redraw("right");
  };

  this.redraw = function(type) {
    let draw = setInterval(() => {
      switch (type) {
        case "top":
          if (document.getElementById("cont").style.paddingTop === "0px") {
            clearTimeout(draw);
            return;
          }
          this.countT -= 5;
          this.countB += 5;
          break;
        case "bottom":
          if (document.getElementById("cont").style.paddingBottom === "0px") {
            clearTimeout(draw);
            return;
          }
          this.countB -= 5;
          this.countT += 5;
          break;
        case "right":
          let num = parseInt(document.getElementById("cont").style.paddingLeft);
          if (num >= window.innerWidth - 220 && num != NaN) {
            clearTimeout(draw);
            return;
          }
          this.countR -= 5;
          this.countL += 5;
          break;
        case "left":
          if (document.getElementById("cont").style.paddingLeft === "0px") {
            clearTimeout(draw);
            return;
          }
          this.countR += 5;
          this.countL -= 5;
          break;
      }

      document.getElementById("cont").style.paddingTop = this.countT + "px";
      document.getElementById("cont").style.paddingBottom = this.countB + "px";

      document.getElementById("cont").style.paddingLeft = this.countL + "px";
      document.getElementById("cont").style.paddingRight = this.countR + "px";
    }, 10);
  };

  this.init();
}
let animation = new Animation();
