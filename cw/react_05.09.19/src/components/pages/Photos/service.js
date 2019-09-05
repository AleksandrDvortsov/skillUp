import {
    BASE_URL,
} from '../../../system/settings';

export const listPhotos = () => {

    const url = `${BASE_URL}`;

    return fetch(url).then(response => {
        return response.json();
    });
}

export const likePhoto = (photo, like) => {

    const url = `${BASE_URL}`;

    return fetch(url, {
        method: 'POST',
    }).then(response => {
        return response.json();
    });
}

