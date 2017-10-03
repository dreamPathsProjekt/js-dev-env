//reference getUsers function
import {getUsers} from './api/userApi';
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
});
