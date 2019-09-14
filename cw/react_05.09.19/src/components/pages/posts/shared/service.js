import {
    BASE_URL,
} from '../../../../system/settings';

export const listPosts = () => {

    return fetch(BASE_URL).then(response => {
        return response.json();
    });
}

export const updatePost = data => {
    return fetch(`${BASE_URL}/update/${data.id}`, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    });
}

export const getPost = id => {

    return fetch(BASE_URL + "/" + id).then(response => {
        return response.json();
    });
}
