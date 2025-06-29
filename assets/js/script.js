var newTaskInput = document.getElementById("newTask");
var addButton = document.getElementById("addButton");
var errorMsg = document.getElementById("errorMsg");
var deleteMsg = document.getElementById("deleteMsg");

// Use `addEventListener()` to attach the click event handler to the button.

function onClickAddButton (){
    var taskInputValue = newTaskInput.value.trim();

    // check if input is empty
    if (taskInputValue === ""){
        errorMsg.textContent = "Oopps, empty input. Please type in a task.";
        errorMsg.style.display = "block";
        return;
    }

    // check if input is duplicate
    var isDuplicate = false;
    var existingInput = document.getElementsByTagName("li");

    for (var i = 0; i < existingInput.length; i++) {
        if (existingInput[i].textContent === taskInputValue) {
            isDuplicate = true;
            break;
        }
    }
    if (isDuplicate) {
        errorMsg.textContent = "This task already exists. Please review your input and check task list.";
        errorMsg.style.display = "block";
        return;
    }

// Add new task with checkbox
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = taskInputValue;

    var label = document.createElement("label");
    label.textContent = taskInputValue;
    label.style.marginLeft = "8px";

    li.appendChild(checkbox);
    li.appendChild(label);
    taskList.appendChild(li);

    newTaskInput.value = "";
    errorMsg.style.display = "none";

    deleteMsg.textContent = "Tick checkbox to delete a task.";
    deleteMsg.style.display = "block";
    deleteButton.style.display = "block";
}

var taskList = document.getElementById("taskList");
var deleteButton = document.getElementById("deleteButton");

// Delete function
function onClickDeleteButton() {
    var tasks = taskList.getElementsByTagName("li");
    // We go backwards so we can safely remove elements while iterating
    for (var i = tasks.length - 1; i >= 0; i--) {
        var checkbox = tasks[i].querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
            taskList.removeChild(tasks[i]);
        }
    }
    // Hide delete message and delete button if list is empty
    if (taskList.children.length === 0) {
        deleteMsg.style.display = "none";
        deleteButton.style.display = "none";
    }
}

addButton.addEventListener("click", onClickAddButton);
deleteButton.addEventListener("click", onClickDeleteButton);

//Edit and Save function

var editButton  = document.getElementById('editButton');

    
function onClickEditButton(){
    var lis  = taskList.querySelectorAll('li');
    lis.forEach(function(li){
        li.toggleAttribute('contenteditable');
    });

    if( lis[0].hasAttribute('contenteditable') ){
        // Currently editing, change the button
        editButton.innerText = 'Click here to Save';
    } else {
        // We just "saved". run "save functions" here
        editButton.innerText = 'Click here to Edit';
    }
}

editButton.addEventListener('click', onClickEditButton);