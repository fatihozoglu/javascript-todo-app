// Getting the item with id="task" => input element
let inputElement = document.querySelector("#task");
// Getting the item with id="liveToastBtn" => add item button
let addButton = document.querySelector("#liveToastBtn");
//Getting the item with id="list" => unordered list for keeping the tasks
let elementList = document.querySelector("#list");

// Function for adding new list items to the unordered list
function newElement() {
    // Checking if there is a value in input area
    if (inputElement.value !== "") {
        //Adding toast notification for successful item adding
        $(".success").toast("show");
        //Creating a new "list" element
        let newListItem = document.createElement("li");
        //Setting the value of the new list element to the input value
        newListItem.textContent = inputElement.value;
        //Setting the onclick event for the new list element
        newListItem.onclick = markDone;
        // Creating close button for new list item
        let closeButton = document.createElement("span");
        //Entering the text content for the span
        closeButton.textContent = "x";
        //Adding close class to the close button
        closeButton.classList.add("close");
        closeButton.onclick = deleteItem;
        //Appending the span to the newly created list item
        newListItem.append(closeButton);
        //Appending our new list element to the unordered list
        elementList.append(newListItem);
        //Clearing the input value
        inputElement.value = "";
    } else {
        //If the input area is empty, we show a toast notification
        $(".error").toast("show");
    }
}

// Function for marking the item as 'done'
function markDone() {
    //If it is not marked we mark the list item as "done", else marking it "undone"
    this.classList.toggle("checked");
}

// Function for deleting item from the list
function deleteItem() {
    //When the span is clicked, it gets the parent item "list" and remove it from the to do list
    this.parentElement.remove();
}