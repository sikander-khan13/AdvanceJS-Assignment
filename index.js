function addToDo(){
    const todoInput = document.querySelector("#todoInput");
    const todoValue = todoInput.value.trim();

    if(todoValue === ""){
        alert("Please enter a value");
        return;
    }

    const todoList = document.querySelector("#todoList");

    //create the list item
    const listItem = document.createElement("li");
    listItem.className = "bg-white flex items-center justify-between p-2 rounded-md shadow-md";

    
    // Create a span to hold the task text
    const taskText = document.createElement("span");
    taskText.className = "text-black";
    taskText.textContent = todoValue;

    // Create buttons for Add, Edit, and Delete
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "flex space-x-2";


     // Add button
    const addButton = document.createElement("button");
    addButton.className = "bg-green-500 p-2 rounded-md";
    addButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>`;
    addButton.onclick = function () {
        taskText.classList.toggle("line-through");
    }; 
    // Edit button
    const editButton = document.createElement("button");
    editButton.className = "bg-yellow-500 p-2 rounded-md";
    editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h9m-9-4h9m-9-4h9M5 9h9M5 5h9m-4 14v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2" /></svg>`;
    editButton.onclick = function () {
        const newValue = prompt("Edit your task:", taskText.textContent);
         if (newValue !== null) {
                taskText.textContent = newValue.trim();
         }
    };

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "bg-red-500 p-2 rounded-md";
    deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`;
    deleteButton.onclick = function () {
        todoList.removeChild(listItem);
    };

    //Append buttons to the buttons div
    buttonsDiv.appendChild(addButton);
    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);

    //Append task text and buttons to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(buttonsDiv);

    //append the list item to the yask list

    todoList.appendChild(listItem);
}