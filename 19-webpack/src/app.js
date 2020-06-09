import { styleBody, addTitle, contact } from './dom';
// when we import a default value we don't use {}, and the name can be whatever you want
import users, { getPremUsers } from './data'; // test aka users

console.log('index file');
addTitle('test');
styleBody();

console.log(contact);

const premUsers = getPremUsers(users);
console.log(users);
console.log(premUsers);
console.log('test 3');
