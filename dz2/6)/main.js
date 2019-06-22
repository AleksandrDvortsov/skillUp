
document.getElementById('formBlock1').style.display = 'block';
var firstName;
var lastName;
var phone;
var hobby;
var loc;
var passport;
var iNN;

function next1() {
    firstName = document.getElementById('fName').value;
    lastName = document.getElementById('lName').value;

    if(!firstName || !lastName ){
        alert('Заполните все поля');
        return;
    }
    document.getElementById('formBlock1').style.display = 'none';
    document.getElementById('formBlock2').style.display = 'block';
}

function next2() {
    phone = document.getElementById('phone').value;
    hobby = document.getElementById('hobby').value;

    if(!phone || !hobby ){
        alert('Заполните все поля');
        return;
    }
    document.getElementById('formBlock2').style.display = 'none';
    document.getElementById('formBlock3').style.display = 'block';
}

function next3() {
    loc = document.getElementById('location').value;
    passport = document.getElementById('passport').value;
    iNN = document.getElementById('iNN').value;

    if(!loc || !passport || !iNN ){
        alert('Заполните все поля');
        return;
    }
    document.getElementById('formBlock3').style.display = 'none';
    document.getElementById('allInfo').style.display = 'block';
    allInfo();
}

function allInfo() {
    document.getElementById('infoFName').innerText = firstName;
    document.getElementById('infoLName').innerText = lastName;
    document.getElementById('infoPhone').innerText = phone;
    document.getElementById('infoHobby').innerText = hobby;
    document.getElementById('infoLocation').innerText = loc;
    document.getElementById('infoPassport').innerText = passport;
    document.getElementById('infoINN').innerText = iNN;
}
function push() {
    alert('Операция успешна');
}