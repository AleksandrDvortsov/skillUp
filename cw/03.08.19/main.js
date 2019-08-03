// ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c
// api.unsplash.com
//  https://api.unsplash.com/photos/?client_id=ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c


const BASE_URL = 'https://api.unsplash.com/photos/';
const CLIENT_ID = 'ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';

// const COUNT_ING = 2500;
// 
// const url = BASE_URL + '?client_id=' + CLIENT_ID + '&per_page=' + COUNT_ING;
// fetch(url)
//     .then(response => {
//         return response.json();
//     })
//     .then((photos)=>{
//         // render(photos);
//         console.log(photos);
//     })
// 
// function render(photos) {
//     let gall = document.getElementById('gallery');
//     for (const photo of photos) {
//         let img = document.createElement("img");
//
//         img.src = photo.urls.thumb;
//         img.height = img.width = 50;
//         gall.appendChild(img);
//     }
// }


function Gallery (paramsObj) {

    const {
        limit,
        page,
        idGal,
        nav_id
    } = paramsObj;

    const url = BASE_URL + '?client_id=' + CLIENT_ID + '&per_page=' + limit + '&page=' + page;
    
    this.gallery = document.getElementById(idGal);
    this.photosArr = [];

    this.init = () => {
        this.btnL = document.querySelector(`${nav_id} #prev`);
        this.btnR = document.querySelector(`${nav_id} #next`);
        this.btnL.onclick = this.changePage;
        this.btnR.onclick = this.changePage;
        this.input = document.querySelector(`${nav_id} input` );
        this.select = document.querySelector(`${nav_id}  select`);
        this.input.oninput = this.changePage;
        this.select.onchange = this.changePage;
    }

    this.changePage = (e) => {
        console.log('click',e);
        
    }

    this.fetchPhotos = () => {
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then((photos)=>{
            this.photosArr = photos;
            this.render();
        })
    }

    this.render = () => {
        for (const photo of this.photosArr) {
            let img = document.createElement("img");

            img.src = photo.urls.thumb;
            img.height = img.width = 240;
            this.gallery.appendChild(img);
        }
    }
    this.init();
    this.fetchPhotos();
}

let gallery = new Gallery({
    limit: 25,
    page: 1,
    idGal: 'gallery',
    nav_id: '#nav'
});





// var items = [
//     { name: 'item-1', children: [{ name: 'child-1' }, { name: 'child-6' }] },
//     { name: 'item-2', children: [{ name: 'child-3' }, { name: 'child-7' }] },
//     { name: 'item-3', children: [] },
//     { name: 'item-4', children: [{ name: 'child-5' }, { name: 'child-9' }] }
// ]

// function xz () {
//     let ul = document.getElementById('ul')
//     for(let i = 0; i < items.length; i++) {
//         if(items[i].children.length !== 0 ) {
//             let li = document.createElement("li");
//             let ul2 = document.createElement('ul');
//             createUl(items[i].name, li, ul2, ul);

//             for(let t = 0; t < items[i].children.length; t++){
//                 createLi(ul2, items[i].children[t].name);
//             }
//         } else {
//             createLi(ul, items[i].name)
//         }
//     }
// }

// function createLi (ul, item) {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(item));
//     ul.appendChild(li);
// }
// function createUl (item, li, ul2) {
//     li.appendChild(document.createTextNode(item));
//     li.appendChild(ul2);
//     ul.appendChild(li);
// }
// xz()