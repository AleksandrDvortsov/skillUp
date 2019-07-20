
function CreatePerson(blockNav, id) {
  this.init = function() {
    this.arrPerson = [];
    this.count = 0;
    this.id = document.querySelector(id);

    this.nav = document.querySelector(blockNav);
    this.inputText = document.createElement("input");
    this.inputText.type = "text";
    this.inputText.id = "textInput";

    this.btnInput = document.createElement("button");
    this.btnInput.type = "button";
    this.btnInput.innerHTML = "Input";
    this.btnInput.onclick = this.inputFun;

    this.btnDel = document.createElement("button");
    this.btnDel.type = "button";
    this.btnDel.innerHTML = "Delete";
    this.btnDel.onclick = this.deleteFun;

    this.nav.appendChild(this.inputText);
    this.nav.appendChild(this.btnInput);
    this.nav.appendChild(this.btnDel);
  };

  this.inputFun = function() {
    this.name = this.inputText.value;

    if (this.name) {
      this.arrPerson.push(this.name);
      this.create();
      this.count++;
    } else {
        alert('print name!')
    }
  }.bind(this);

  this.deleteFun = function() {
    while (this.id.firstChild) {
        this.id.removeChild(this.id.firstChild);
    }

    this.arrPerson.length = 0;
    this.count = 0;
  }.bind(this);

  this.create = function() {
    this.list = document.createElement("ul");
    this.li = document.createElement("li");
    this.li.appendChild(document.createTextNode(this.arrPerson[this.count]));
    this.li.onclick = function(e) {
      alert(e.target.innerHTML);
    };

    this.list.appendChild(this.li);
    this.id.appendChild(this.list);
  }.bind(this);

  this.init();
}

let block = new CreatePerson("#nav", "#person");

let block2 = new CreatePerson("#nav2", "#person2");
