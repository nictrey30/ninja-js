// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

// add a new chat
newChatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => {
      newChatForm.reset();
    })
    .catch((err) => console.log(err));
});

// update username
newNameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // update name via chatroom class
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  newNameForm.reset();
  // show then hide the update message
  updateMsg.innerText = `Your name was updated to ${newName}`;
  setTimeout(() => (updateMsg.innerText = ''), 3000);
});

// update the chat room
rooms.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    // clear the current chats
    chatUI.clear();
    // update the room after clicking on a new room
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats((chat) => chatUI.render(chat));
  }
});

// check local storage for a name
const username = localStorage.username ? localStorage.username : 'anon';

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// get the chats and render
chatroom.getChats((data) => {
  // console.log(data);
  chatUI.render(data);
});
