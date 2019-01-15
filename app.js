var todoItems = document.querySelectorAll('li');
var addBtn = document.querySelector('.add-btn');
var newTodoInput = document.querySelector('.new-todo-input');
var todoList = document.querySelector('.todo-list');
var form = document.querySelector('form');
var counter = document.querySelector('.counter');
var footer = document.querySelector('footer');
var resetBtn = document.querySelector('.reset-btn');

var checkAllDone = function() {
    if (document.querySelectorAll('.completed').length === document.querySelectorAll('li').length) {
        footer.classList.remove('hidden');
    } else {
        footer.classList.add('hidden');
    }
}

var resetAllItems = function() {
    var allItems = document.querySelectorAll('.completed')
    // for (var i = 0; i < allItems.length; i++) {
    //     allItems[i].classList.remove('completed')
    // }
    allItems.forEach(function(item) {
        item.classList.remove('completed');
    })
    counter.textContent = document.querySelectorAll('.completed').length;
}

var markComplete = function(event) {
    event.target.classList.toggle('completed');
    counter.textContent = document.querySelectorAll('.completed').length;
    checkAllDone();
}

var addToDoItem = function(event) {
    event.preventDefault();
    console.log('adding item');
    
    var newListItem = document.createElement('li');
    newListItem.classList.add('todo-item');
    newListItem.textContent = newTodoInput.value;
    newListItem.addEventListener('click', markComplete);
    
    todoList.appendChild(newListItem);
    footer.classList.add('hidden');
    
    newTodoInput.value = ""; // clear input value
    checkAllDone();
}

// for (var i = 0; i < todoItems.length; i++) {
//     todoItems[i].addEventListener('click', markComplete);
// }

// Same functionality as above code block (Line 48)
todoItems.forEach(function(todoItem) {
    todoItem.addEventListener('click', markComplete);
})

// addBtn.addEventListener('click', addToDoItem);
resetBtn.addEventListener('click', resetAllItems);
form.addEventListener('submit', addToDoItem);