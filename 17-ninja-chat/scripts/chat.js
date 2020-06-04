// adding new chat documents
// setting up real-time listener to the new chats
// updating the username
// updating the room - when the user clinks on one of the btn rooms

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
    this.unsub;
  }
}

Chatroom.prototype.addChat = async function (message) {
  // when we save a document to the collection, we send it as a javascript object, so we need to construct one
  const now = new Date();
  const chat = {
    message,
    username: this.username,
    room: this.room,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };
  // save the chat object to the collection
  const response = await this.chats.add(chat);
  return response;
};

Chatroom.prototype.getChats = function (callback) {
  // this.unsub = a function that when it gets invoked, it will unsubscribe from the real time listener
  this.unsub = this.chats
    .where('room', '==', this.room)
    .orderBy('created_at')
    .onSnapshot((snapshot) => {
      // snapshot.docChanges(); //-> gives us an array of changes
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          // update the ui
          callback(change.doc.data());
        }
      });
    });
};

Chatroom.prototype.updateName = function (username) {
  this.username = username;
};

// update room
Chatroom.prototype.updateRoom = function (room) {
  this.room = room;
  console.log('room updated');
  // unsubscribe from listening to the initial room
  if (this.unsub) {
    this.unsub();
  }
};

/*
chatroom
  .addChat('hello everyone')
  .then(() => {
    console.log('chat added');
  })
  .catch((err) => console.log(err));
*/

// emulate user changing chat room after 3s
// setTimeout(() => {
//   chatroom.updateRoom('gaming');
//   chatroom.updateName('yoshi');
//   chatroom.getChats((data) => {
//     console.log(data);
//   });
//   chatroom.addChat('hello gaming');
// }, 3000);
