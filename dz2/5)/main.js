var arrCitys = ["Kiev", "Lviv", "Odessa", "Kharkiv", "Dnepr"];

function Citys(arr) {
  this.init = () => {
    this.arr1 = arr;
    this.arr2 = [];

    this.createLiCity(this.arr1, 1);
    this.createLiCity(this.arr2, 2);
  };
  this.createLiCity = (arr, count) => {
    var list = document.createElement("ul");

    arr.map((name) => {

      var li = document.createElement("li");
      li.style.alignItems = "center";

      var p = document.createElement("h5");
      li.appendChild(p);

      p.appendChild(document.createTextNode(name));

      let divExit = document.createElement("a");
      let divConteinerBtn = document.createElement("div");
      divConteinerBtn.className = "close-container";

      let divLeftRight = document.createElement("div");
      divLeftRight.className = "leftright";
      let divRightleft = document.createElement("div");
      divRightleft.className = "rightleft";
      divConteinerBtn.appendChild(divLeftRight)
      divConteinerBtn.appendChild(divRightleft)
      divExit.appendChild(divConteinerBtn);

      li.appendChild(divExit);
      divExit.addEventListener("click", (e) => {
        if (count === 1) {
          var index = this.arr1.indexOf(e.target.parentElement.firstChild.innerHTML);
          if (index >= 0) {
            this.arr1.splice(index, 1);
          }

          this.arr2.push(e.target.parentElement.firstChild.innerHTML);
          this.update();
        }
        if (count === 2) {
          var index = this.arr2.indexOf(e.target.parentElement.firstChild.innerHTML);
          if (index >= 0) {
            this.arr2.splice(index, 1);
          }

          this.arr1.push(e.target.parentElement.firstChild.innerHTML);
          this.update();
        }
      });
      list.appendChild(li);
    })
    if (count === 1) {
      document.getElementById("city1").appendChild(list);
    }
    if (count === 2) {
      document.getElementById("city2").appendChild(list);
    }
  };

  this.update = () => {
    var divCity1 = document.getElementById("city1");
    while (divCity1.firstChild) {
      divCity1.removeChild(divCity1.firstChild);
    }
    var divCity2 = document.getElementById("city2");
    while (divCity2.firstChild) {
      divCity2.removeChild(divCity2.firstChild);
    }
    this.createLiCity(this.arr1, 1);
    this.createLiCity(this.arr2, 2);
  };
  this.init();
}

let citys = new Citys(arrCitys);
