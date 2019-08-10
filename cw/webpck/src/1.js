console.log('1.js');

class User {
    constructor() {
        this.name = 'Vasa1';
    }
    showName() {
        alert(this.name);
    }
}

function User2 () {
    this.name = 'Vasa2'

    this.showName = () => {
        alert(this.name);
    }
}

let u1 = new User();
u1.showName();
let u2 = new User2();
u2.showName();