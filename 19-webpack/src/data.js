const users = [
  { name: 'mario', premium: true },
  { name: 'luigi', premium: false },
  { name: 'yoshi', premium: true },
  { name: 'toad', premium: true },
  { name: 'peach', premium: false }
];

export const getPremUsers = (users) => {
  return users.filter((user) => user.premium === true);
};

// we can have only one default export per file
export default users;

// or to export named exports and default export in one line
// export { getPremUsers, users as default };
