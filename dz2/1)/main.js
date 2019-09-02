var arr = ['Vasia', 'Petia', 'Alex', 'Ivan'];
var arr2 = ['Vasia2', 'Petia2', 'Alex2', 'Ivan2'];

function CreatePerson(arr, id) {
    this.ar = arr;

    this.init = function () {
        this.list = document.createElement('ul');
        this.create();
        this.render();
    }

    this.create = function () {

        this.ar.map((name) => {
            let li = document.createElement('li');

            li.appendChild(document.createTextNode(name));
            li.onclick = function () {
                alert(this.innerHTML);
            }
            this.list.appendChild(li);
        })

    }

    this.render = function () {
        document.querySelector(id).appendChild(this.list);
    }

    this.init();
}

let newCreate = new CreatePerson(arr, "#person");
let newCreate2 = new CreatePerson(arr2, "#person2");

