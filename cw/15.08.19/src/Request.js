import {
    BASE_URL,
    CLIENT_ID
} from './settings'

class Request {

    listPhotos(limit, page) {
        const url = `${BASE_URL}?client_id=${CLIENT_ID}&per_page=${limit}&page=${page}`;

        return fetch(url).then(response => {
            return response.json();
        });
    };

    likePhotos(id) {
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
    };
}

export default new Request();