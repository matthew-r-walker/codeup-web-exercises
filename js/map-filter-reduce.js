'use strict';
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
let emails = users.map(user => user.email);
// console.log(emails);

let usersWithThreeOrMoreLangs = users.filter(user => user.languages.length >= 3);

// total's default value will be the first item in the array unless set to a value otherwise specified. It's first value is set to 0 in this example.
// let totalOfAllUsersYearsOfExp = users.reduce((total, user) => {
//     return total + user.yearsOfExperience;
// },0);


let totalOfAllUsersYearsOfExp = users.reduce((total, user) => total + user.yearsOfExperience, 0);
// let totalOfAllUsersYearsOfExp = users.reduce((total, user) => {
//    return total + user.yearsOfExperience;
// },0);
// Average years of experience for users is totalOfAllUsersYearsExp / users.length


// let longestUserEmail = emails.reduce((a, b) => a.length > b.length ? a : b);

let longestUserEmail = users.reduce((a, b) => a.length > b.email.length ? a : b.email);

let usersNames = users.reduce((accumulator, user, index, arr) => {
    index === arr.length -1 ? accumulator += `${user.name}.` : accumulator += `${user.name}, `;
    return accumulator;
},'Users names are: ');



