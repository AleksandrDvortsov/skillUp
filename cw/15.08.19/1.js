const user = [
    {name:'User-1', age: 25, number: ['+3086', '+38066']},
    {name:'User-2', age: 22, number: ['+3086', '+38066']},
    {name:'User-3', age: 44, number: ['+3086', '+38066']},
    {name:'User-1', age: 99, number: ['+3086', '+38066']},
    {name:'User-2', age: 32, number: ['+3086', '+38066']},
    {name:'User-3', age: 12, number: ['+3086', '+38066']}
]

function pu() {
    for(let i = 0; i < 100000; i++){
        let obj = {name:'User-3', age: 12+i, number: ['+3086', '+38066']}
        user.push(obj);
    }
}

function xz () {
    // user.sort((a, b) => a.age > b.age ? 1 : -1);

    for( let i = 0; i < user.length; i++) {

        let ul = document.createElement('ul');
        ul.innerHTML = "name:" + user[i].name + ", age: " + user[i].age
        ul.innerHTML += ", number: "
        for(let j = 0; j < user[i].number.length; j++){
            ul.innerHTML += user[i].number[j] + ", "
        }
        document.getElementById('1').appendChild(ul);
    }
}

pu();
xz();