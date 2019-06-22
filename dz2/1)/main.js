var arr = ['Vasia', 'Petia', 'Alex', 'Ivan'];

function createPerson() {

    var list = document.createElement('ul');

    for(var i = 0; i < arr.length; i++) {

        var li = document.createElement('li');

        li.appendChild(document.createTextNode(arr[i]));
        li.addEventListener('click',function(e){
            alert(e.target.innerHTML)
         });

        list.appendChild(li);
    }
    document.getElementById("person").appendChild(list);
}

createPerson();
