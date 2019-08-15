import Request from'./Request';
import Img from './Img';

class Gallery{
    constructor({ limit, page, gallery_id, nav_id }) {
        this.photos = [];
        this.page = page;
        this.limit = limit;
        this.container = document.querySelector(gallery_id);
        this.btnLeft = document.querySelector(`${nav_id} #prev`);
        this.btnRight = document.querySelector(`${nav_id} #next`);
        this.input = document.querySelector(`${nav_id} input`);
        this.select = document.querySelector(`${nav_id} select`);
    }

    init() {
        this.input.value = this.page;
        this.select.value = this.limit; 

        this.btnLeft.onclick = this.changePage;
        this.btnRight.onclick = this.changePage;
        this.input.oninput = this.changePage;
        this.select.onchange = this.changePage;
    }

    onLikeHandler = (like, photo) => {
        Request.likePhotos(photo.id)
    }

    changePage = e => {
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

    renderList = () => {

        Request.listPhotos(this.limit, this.page)
            .then(data => {

                this.photos = data.map(photo => {                    
                    return new Img({photo, onLikeHandler: this.onLikeHandler});
                });

                this.container.append(...photos);
            })
    }

}

export default Gallery;




