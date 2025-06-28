var newTaskInput = document.getElementById("newTask");
var addButton = document.getElementById("addButton");

// Use `addEventListener()` to attach the click event handler to the button.

function onClickAddButton (){
    var taskInputValue = newTaskInput.value.trim();
    if (taskInputValue !== ""){ // !== "" ensure the input is not an empty string.
        var newTaskE1 = document.createElement("li"); // display the task in the task list.
        newTaskE1.textContent = taskInputValue; // Sets the content of the new list item to whatever the user typed
        taskList.appendChild(newTaskE1); // Adds the new <li> to the task list (<ul> element 
        newTaskInput.value = ""; // clear input after adding
    }
}

addButton.addEventListener("click", onClickAddButton);
