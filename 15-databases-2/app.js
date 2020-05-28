const list = document.querySelector('ul');

// create html template for each recipe
const addRecipe = (recipe) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li>
      <div>${recipe.title}</div> 
      <div>${time}</div> 
    </li>
  `;
  list.innerHTML += html;
};

db.collection('recipes')
  .get()
  .then((snapshot) => {
    // when we have the data
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
      addRecipe(doc.data());
    });
  })
  .catch((err) => console.log(err));
