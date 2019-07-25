// ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c


// Стрелочные функции

// old function
function sum (a,b) {
    return a+b
}
function mes (mes) {
    return 'hi ' + mes;
}

// стрелочная фун. для сохранения контекста родителя
const User = {
    name: "Vasa",
    show: () => {
        // console.log(this);
    }
};

const User2 = {name: 'Ivan'};
User2.show2 = User.show;

User2.show2();

// -- //

// ( => ) function

const sum2 = (a,b) => a+b;
const mes2 = mes => 'hi ' + mes;

// -- //

///////////////////////////////////////////////////////////////////////////////////////////

// function map //
const names = ['vasa', 'alex', 'anya'];

const namesHtml = names.map(name => `<li>${name}<li>`)
console.log(namesHtml.join(' '));
// -- //

// function includes //
const isNames = names.includes('anya');
console.log(isNames);
// -- //

// function find //
const names2 = [
    {id: "0", name: "vase", age: 30}, 
    {id: "1",name: "vase2", age: 25},
    {id: "2",name: "vase3", age: 42}
];
const user = names2.find(e => e.id === '1');
console.log(user);
// -- //

// function filter //
const namesSort = [
    {id: "0", name: "vase", age: 30}, 
    {id: "1",name: "vase2", age: 25},
    {id: "2",name: "vase3", age: 42}
];
const userSort = namesSort.filter(e => e.age <= 32);
console.log(userSort);
// -- //

// function reduce //
const namesReduce = [
    {id: "0", name: "vase", age: 30}, 
    {id: "1",name: "vase2", age: 25},
    {id: "2",name: "vase3", age: 42}
];

const userReduce = namesReduce.reduce((acc, el) => {
    acc += el.age;
    return acc;
}, 0);
console.log(userReduce);
// -- //







