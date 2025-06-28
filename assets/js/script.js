var newTaskInput = document.getElementById("newTask");
var addButton = document.getElementById("addButton");

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

    // if all valid:
    var newTaskE1 = document.createElement("li"); // display the task in the task list.
    newTaskE1.textContent = taskInputValue.trim(); // Sets the content of the new list item to whatever the user typed
    taskList.appendChild(newTaskE1); // Adds the new <li> to the task list (<ul> element 
    newTaskInput.value = ""; // clear input after adding
    errorMsg.style.display = "none";
}

addButton.addEventListener("click", onClickAddButton);
