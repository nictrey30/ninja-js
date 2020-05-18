const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// deleting todos
list.addEventListener('click', (e) => {
  // if (e.target.tagName === 'I') {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// function for comparing searchTerm with the current todos
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((item) => item.classList.add('filtered'));
  Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((item) => item.classList.remove('filtered'));
};

// filter todos
const search = document.querySelector('.search input');
search.addEventListener('keyup', (e) => {
  const searchTerm = search.value.trim().toLowerCase();
  filterTodos(searchTerm);
});
