const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create element and render cafe
function renderCafe(doc) {
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');
  let cross = document.createElement('div');

  li.setAttribute('data-id', doc.id);

  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = 'x';

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);
  cafeList.appendChild(li);
}

// saving data
form.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('cafes').add({
    name: form.name.value,
    city: form.city.value
  });
  form.reset();
});

// deleting data
cafeList.addEventListener('click', e => {
  if (e.target.tagName === 'DIV') {
    let id = e.target.parentElement.getAttribute('data-id');
    // find one documnet inside the collection with .doc(id)
    db.collection('cafes')
      .doc(id)
      .delete();
  }
});

// real-time listener
db.collection('cafes')
  .orderBy('city')
  .onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      // console.log(change.doc.data());
      if (change.type === 'added') {
        renderCafe(change.doc);
      } else if (change.type === 'removed') {
        let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
        cafeList.removeChild(li);
      }
    });
  });
