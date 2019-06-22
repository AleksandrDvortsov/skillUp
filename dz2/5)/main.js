var arrCitys = ['Kiev', 'Lviv', 'Odessa', 'Kharkiv', 'Dnepr'];

var arr1 = arrCitys;
var arr2 = [];

function createLiCity1(arr) {

    var list = document.createElement('ul');

    for(var i = 0; i < arr.length; i++) {

        var li = document.createElement('li');
        li.style.alignItems = 'center';

        var p = document.createElement('h5');
        li.appendChild(p);

        p.appendChild(document.createTextNode(arr[i]));
        
        var btn = document.createElement('button');
        btn.innerText = 'x';
        btn.style.height = '20px';
        
        li.appendChild(btn);
        btn.addEventListener('click',function(e){

            var index = arr1.indexOf(e.target.parentElement.firstChild.innerHTML);
            if (index >= 0) {
                arr1.splice( index, 1 );
            }

            arr2.push(e.target.parentElement.firstChild.innerHTML);
            update();
         });
        list.appendChild(li);
    }
    document.getElementById("city1").appendChild(list);
}


function createLiCity2(arr) {

    var list = document.createElement('ul');

    for(var i = 0; i < arr.length; i++) {

        var li = document.createElement('li');
        li.style.alignItems = 'center';

        var p = document.createElement('h5');
        li.appendChild(p);

        p.appendChild(document.createTextNode(arr[i]));
        
        var btn = document.createElement('button');
        btn.innerText = 'x';
        btn.style.height = '20px';
        
        li.appendChild(btn);
        btn.addEventListener('click',function(e){

            var index = arr2.indexOf(e.target.parentElement.firstChild.innerHTML);
            if (index >= 0) {
                arr2.splice( index, 1 );
            }

            arr1.push(e.target.parentElement.firstChild.innerHTML);
            update();
         });
        list.appendChild(li);
    }
    document.getElementById("city2").appendChild(list);
}

function update() {
    
    var divCity1 = document.getElementById("city1");
    while (divCity1.firstChild) {
        divCity1.removeChild(divCity1.firstChild);
    }
    var divCity2 = document.getElementById("city2");
    while (divCity2.firstChild) {
        divCity2.removeChild(divCity2.firstChild);
    }
    createLiCity1(arr1);
    createLiCity2(arr2);
}
createLiCity1(arr1);
createLiCity2(arr2);
