// ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c
// api.unsplash.com
//  https://api.unsplash.com/photos/?client_id=ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c


const BASE_URL = 'https://api.unsplash.com/photos/';
const CLIENT_ID = 'ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';

const COUNT_ING = 25;

const url = BASE_URL + '?client_id=' + CLIENT_ID + '&per_page=' + COUNT_ING;
fetch(url)
    .then(response => {
        return response.json();
    })
    .then((photos)=>{
        render(photos)
        console.log(photos);
    })

function render(photos) {
    let gall = document.getElementById('gallery');
    for (const photo of photos) {
        let img = document.createElement("img");
       
        img.src = photo.urls.full;
        // gall.appendChild(img)
    }
}

function xz (a,b){
    return (a*a) + (b*b);
}

function xz1 () {
    let count = 0;
    for (const iterator of arguments) {
        count += iterator*iterator;
    }
    console.log(count);
}

xz1(3,3,3);


var arr1 = [1,2,5];
var arr2 = [7,8,5];

var arr3 = []

function plusArr () {
    for (const iterator of arr1) {
        arr3.push(iterator);
    }
    for (const iterator of arr2) {
        arr3.push(iterator);
    }
    console.log(arr3)
}
plusArr();