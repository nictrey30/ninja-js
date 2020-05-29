const list = document.querySelector('ul');
const form = document.querySelector('form');
const unsubButton = document.querySelector('button');

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
  <li data-id="${id}">
  <div>${recipe.title}</div> 
  <div>${time}</div> 
  <button class="btn btn-danger btn-sm my-2">delete</button>
  </li>
  `;
  list.innerHTML += html;
};

// delete recipe from the dom
const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll('li');
  recipes.forEach((recipe) => {
    if (recipe.getAttribute('data-id') === id) {
      recipe.remove();
    }
  });
};

// realtime listener - get documents
// the real time listener returns a function
const unsub = db.collection('recipes').onSnapshot((snapshot) => {
  // console.log(snapshot.docChanges());
  // snapshot.docChanges() -> is an array of the changes
  snapshot.docChanges().forEach((change) => {
    // console.log(change);
    const doc = change.doc;
    console.log(doc);
    if (change.type === 'added') {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === 'removed') {
      deleteRecipe(doc.id);
    }
  });
});

// add documents
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };
  db.collection('recipes')
    .add(recipe)
    .then(() => {
      console.log('recipe added ');
    })
    .catch((err) => console.log(err));
  form.reset();
});

// deleting data
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.parentElement.getAttribute('data-id');
    // console.log(id);
    // get the reference of a single document by usinc the doc() function and passing to id an id
    db.collection('recipes')
      .doc(id)
      .delete()
      .then(() => {
        console.log('recipe deleted');
      });
  }
});

// unsub from dataase changes
unsubButton.addEventListener('click', () => {
  unsub();
  console.log('unsubscribed from collection changes');
});
