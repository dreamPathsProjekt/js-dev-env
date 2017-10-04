import 'whatwg-fetch'; // fetch polyfill send to everyone
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

//export only public functions
export function getUsers() {
    return get('users');
}

// expose delete on id path variable
export function deleteUser(id) {
    return del(`users/${id}`);
}

function get(url) {
    // attach onSuccess, onError callback function to fetch promise
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {

    // point fetch to DELETE request at /users Url
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });

    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); //eslint-disable-line no-console
}
