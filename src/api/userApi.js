import 'whatwg-fetch'; // fetch polyfill send to everyone

//export only this public function
export function getUsers() {
    return get('users');
}

function get(url) {
    // attach onSuccess, onError callback function to fetch promise
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); //eslint-disable-line no-console
}
