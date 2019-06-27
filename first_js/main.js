var names = ['vasi1', 'vasi2', 'vasi3', 'vasi4'];

var cities = ['Dnepr1', 'Dnepr2', 'Dnepr3', 'Dnepr4'];

var blockName = document.getElementById('name');
var blockCity = document.getElementById('city');

// var ul1 = document.createElement('ul');
// var ul2 = document.createElement('ul');

// for (var name of names) {
    
//     var li = document.createElement('li');
    
//     var text1 = document.createTextNode(name);
//     li.appendChild(text1);
//     ul1.appendChild(li);
// }

// for (var city of cities) {
    
//     var li = document.createElement('li');
    
//     var text1 = document.createTextNode(city);
//     li.appendChild(text1);
//     ul2.appendChild(li);
// }

// blockName.appendChild(ul1);
// blockCity.appendChild(ul2);

function creater(arr, block) {
    var html = '';
        
    for (var ob of arr) {
        html += `<li">${ob}</li>`
    }
    block.innerHTML = html;
}

creater(names, blockName);
creater(cities, blockCity);


