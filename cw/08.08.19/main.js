const BASE_URL = "https://api.unsplash.com/photos/";
const CLIENT_ID = "bf4b6c6a5f92f05afe4facb48f1b477fc7977d5386e471cedcb1c271b133f994";

// 93bf8f557e81b61dfed34d57bfed57d5e73cf329da926653475c5a29d065ed96


const Request = {

    // baseUrl: `${BASE_URL}?client_id=${CLIENT_ID}`,

    listPhotos: function (limit, page) {
        const url = `${BASE_URL}?client_id=${CLIENT_ID}&per_page=${limit}&page=${page}`;

        return fetch(url).then(response => {
            return response.json();
        });
    },

    likePhotos: function (id) {
        const url = `${BASE_URL}?client_id=${CLIENT_ID}`;

        return fetch('https://unsplash.com/oauth/token', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                client_id: 'bf4b6c6a5f92f05afe4facb48f1b477fc7977d5386e471cedcb1c271b133f994',
                client_secret: '93bf8f557e81b61dfed34d57bfed57d5e73cf329da926653475c5a29d065ed96',
                redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
                code: '',
                grant_type: ''
                
            })
        
        }).then(response => {
            return response.json();
        });
    }
}


function Img({
    photo, 
    onLikeHandler}) {

    const { likes, updated_at, urls: { thumb } } = photo;
    const data = new Date(updated_at);
    console.log(data);
    

    const wrap = document.createElement('div');
    wrap.className = 'photo';

    const img = document.createElement('img');
    img.src = thumb;

    const like = document.createElement('span');
    like.innerHTML = likes;
    like.onclick = () => {
        onLikeHandler(like, photo);
    };

    const date_at = document.createElement('i');
    date_at.innerHTML = data.toLocaleDateString();
    
    wrap.append(like);
    wrap.append(date_at);
    wrap.append(img);

    return wrap;
}


function Gallery({
    limit,
    page,
    gallery_id,
    nav_id,
}) {

    this.photos = [];
    this.page = page;
    this.limit = limit;

    this.container = document.querySelector(gallery_id);

    this.btnLeft = document.querySelector(`${nav_id} #prev`);
    this.btnRight = document.querySelector(`${nav_id} #next`);
    this.input = document.querySelector(`${nav_id} input`);
    this.select = document.querySelector(`${nav_id} select`);

    this.input.value = this.page;
    this.select.value = this.limit;

    this.onLikeHandler = (like, photo) => {
        Request.likePhotos(photo.id)
        console.log(like);
        console.log(photo.id);
    }

    this.changePage = e => {
        const IS_LEFT = e.target === this.btnLeft;
        const IS_RIGNT = e.target === this.btnRight;
        const IS_SELECT = e.target === this.select;
        const IS_INPUT = e.target === this.input;

        if (IS_LEFT && this.page > 1) {
            this.page--;
        }

        if (IS_RIGNT) {
            this.page++;
        }

        if (IS_SELECT) {
            this.limit = this.select.value;
        }

        if (IS_INPUT) {
            this.page = this.input.value;
        }

        !IS_INPUT && (this.input.value = this.page);

        this.renderList()
    }

    this.btnLeft.onclick = this.changePage;
    this.btnRight.onclick = this.changePage;
    this.input.oninput = this.changePage;
    this.select.onchange = this.changePage;


    this.renderList = () => {

        Request.listPhotos(this.limit, this.page)
            .then(data => {

                const photos = data.map(photo => {                    
                    return new Img({photo, onLikeHandler: this.onLikeHandler});
                });

                this.container.append(...photos);
            })
    }
}

const gallery = new Gallery({
    limit: 10,
    page: 1,
    gallery_id: '#gallery',
    nav_id: '#navigation',
});

gallery.renderList();