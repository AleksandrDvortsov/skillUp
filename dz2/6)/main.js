
document.getElementById('formBlock1').style.display = 'block';

function Form() {
    this.init = function() {
        this.firstName;
        this.lastName;
        this.phone;
        this.hobby;
        this.loc;
        this.passport;
        this.iNN;

        this.btnN1 = document.getElementById('btnN1');
        this.btnN2 = document.getElementById('btnN2');
        this.btnN3 = document.getElementById('btnN3');
        this.btnPush = document.getElementById('btnPush');
        this.btnN1.onclick = this.block1;
        this.btnN2.onclick = this.block2;
        this.btnN3.onclick = this.block3;
        this.btnPush.onclick = this.push;
    }
    this.block1 = ()=> {
        this.firstName = document.getElementById('fName').value;
        this.lastName = document.getElementById('lName').value;

        if(!this.firstName || !this.lastName ){
            alert('Заполните все поля');
            return;
        }
        document.getElementById('formBlock1').style.display = 'none';
        document.getElementById('formBlock2').style.display = 'block';
    }
    this.block2 = ()=> {
        this.phone = document.getElementById('phone').value;
        this.hobby = document.getElementById('hobby').value;

        if(!this.phone || !this.hobby ){
            alert('Заполните все поля');
            return;
        }
        document.getElementById('formBlock2').style.display = 'none';
        document.getElementById('formBlock3').style.display = 'block';
    }
    this.block3 = ()=> {
        this.loc = document.getElementById('location').value;
        this. passport = document.getElementById('passport').value;
        this.iNN = document.getElementById('iNN').value;

        if(!this.loc || !this.passport || !this.iNN ){
            alert('Заполните все поля');
            return;
        }
        document.getElementById('formBlock3').style.display = 'none';
        document.getElementById('allInfo').style.display = 'block';
        this.allInfo();
    }
    this.allInfo = () => {
        document.getElementById('infoFName').innerText = this.firstName;
        document.getElementById('infoLName').innerText = this.lastName;
        document.getElementById('infoPhone').innerText = this.phone;
        document.getElementById('infoHobby').innerText = this.hobby;
        document.getElementById('infoLocation').innerText = this.loc;
        document.getElementById('infoPassport').innerText = this.passport;
        document.getElementById('infoINN').innerText = this.iNN;
    }
    this.push = () => {
        alert('Операция успешна');
    }
    this.init();
}

let form = new Form();
