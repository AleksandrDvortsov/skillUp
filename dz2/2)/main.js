var arrPerson = [];
var count = 0;

function input() {
    var name = document.getElementById('namePerson').value;
    
    if(name){
        arrPerson.push(name);
        createPerson(count);
        count++;
    }
}

function del() {

    var divPerson = document.getElementById("person");
    while (divPerson.firstChild) {
        divPerson.removeChild(divPerson.firstChild);
    }

    arrPerson.length = 0;
    count = 0;
}

function createPerson(count) {

    var list = document.createElement('ul');

    var li = document.createElement('li');

    li.appendChild(document.createTextNode(arrPerson[count]));
    li.onclick = function (e) {
        alert(e.target.innerHTML)
    }
    // li.addEventListener('click',function(e){
    //     alert(e.target.innerHTML)
    // });

    list.appendChild(li);
    document.getElementById("person").appendChild(list);
}


