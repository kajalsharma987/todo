
let todolist = [];
let editIndex = null;

displayItems();

function addToDo() {
  let inputelement = document.querySelector('#input')
  let todoelement = document.querySelector('#todo-date')
  let todoitem = inputelement.value
  let todoDate = todoelement.value
  if (todoitem !== '' && todoDate !== '') {
    if (editIndex === null) {
      todolist.push({ item: todoitem, duedate: todoDate })
    } else {
      todolist[editIndex].item = todoitem
      todolist[editIndex].duedate = todoDate
      editIndex = null;
      document.querySelector('.btn-todo').innerHTML = 'Add'
    }
    inputelement.value = ''
    todoelement.value = ''
    displayItems()
  } else {
    alert('Please fill both fields')
  }
}

function displayItems() {
  let display_Items = document.querySelector('.todo-container')
  let newhtml = ''
  display_Items.innerHTML = ''
  for (let i = 0; i < todolist.length; i++) {
    let { item, duedate } = todolist[i]
    newhtml += `
      <span class="spanId">${item}</span>
      <span class="spanId">${duedate}</span>
      <button class="Updatebtn" onclick="editItem(${i})">Update</button>
      <button class="Deletebtn" onclick="deleteItem(${i})">Delete</button>
    `
  }
  display_Items.innerHTML = newhtml
}

function deleteItem(index) {
  todolist.splice(index, 1)
  displayItems()
}

function editItem(index) {
  let inputelement = document.querySelector('#input')
  let todoelement = document.querySelector('#todo-date')
  inputelement.value = todolist[index].item
  todoelement.value = todolist[index].duedate
  editIndex = index;
  document.querySelector('.btn-todo').innerHTML = 'Save'
}


