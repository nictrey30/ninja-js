// render chat templates to the DOM
// clear the list of chats (when we switch rooms)

class ChatUI {
  constructor(list) {
    this.list = list;
  }
}
ChatUI.prototype.render = function (data) {
  const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
    addSuffix: true
  });
  const html = `
  <li class="list-group-item">
    <span class="username">${data.username}:</span>
    <span class="message">${data.message}</span>
    <div class="time">
      ${when}
    </div>
  </li>
  `;
  this.list.innerHTML += html;
};
// clear the html inside the chat list when we are changing rooms
ChatUI.prototype.clear = function () {
  this.list.innerHTML = '';
};
