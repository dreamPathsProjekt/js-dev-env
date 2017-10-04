//reference getUsers function
import {getUsers, deleteUser} from './api/userApi';

import './index.css';
// import numeral from 'numeral';

// const value = numeral(1000).format('$0,0.00');
// use es6 backticks ` to parse variable placeholders inside script
// debugger;
// console.log(`A handy library to display prices like ${value} `); //eslint-disable-line no-console

// Populate table of users via Api call.
getUsers().then(result => {
    let usersBody = "";

    // Remember to use ` ES6 template for string literals
    result.forEach(user => {
        usersBody+=`<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById('users').innerHTML = usersBody;

    // get all references of deleteUser DOM classes
    const deleteLinks = global.document.getElementsByClassName('deleteUser');

    // use Array.from to create a real array from DOM Collection
    // getElementsByClassName only returns an "array-like" object
    // and on 2nd arg attach click handler that binds those links to deleteUser function.
    Array.from(deleteLinks, (link) => {
        link.onclick = function (event) {
            // get each element's target '#' and preventDefault from changing the url
            const element = event.target;
            event.preventDefault();

            // call deleteUser on user-id attribute of each <a> element
            //element.attributes is an an assoc. array.We retrieve key "data-id"
            deleteUser(element.attributes["data-id"].value);

            //also remove  whole <tr></tr> DOM node that contains specific data-id
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
    });
});
