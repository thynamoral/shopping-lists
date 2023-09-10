// Get elements IDs
const form = document.querySelector("form");
const itemInput = document.getElementById("item");
const addButton = document.getElementById("add");
const filterInput = document.getElementById("filter");
const clearButton = document.getElementById("clear");
const lists = document.getElementById("lists");

const itemData = JSON.parse(localStorage.getItem("itemData")) || [];
 
// Function to add new item to the list
function addItem() {
    let newItem = itemInput.value;
    itemData.push({
        item:newItem
    });

    // Update newItem to localStorage
    storeItem();
    // Create items
    createItem(newItem);

    // Clear itemInput to ""
    itemInput.value = ""
}

// Function to store data in localStorage WebAPI
function storeItem() {
    localStorage.setItem("itemData",JSON.stringify(itemData));
}

// Function to create new data to the #lists div
function createItem(data) {
    const newElement = document.createElement("p");
    const newDeleteButton = document.createElement("span");

    newElement.textContent = data;
    newDeleteButton.textContent = "x";

    newElement.classList.add("list-item");
    newDeleteButton.classList.add("delete-style");

    newElement.appendChild(newDeleteButton);
    lists.appendChild(newElement);

    // Handle delete the data when clicking on "x"
    newDeleteButton.addEventListener("click",function() {
        newElement.remove();
        itemData.forEach(function(value,index) {
            if(value.item === data) {
                itemData.splice(index,1);
                storeItem(); // Update localStorage after remove an item
            }
        });
    });

    // Detect filter input
    filterInput.addEventListener("input",function(event) {
        event.preventDefault();
        let query = filterInput.value;
        let filterText = newElement.textContent;
        const filteredItem = filterText.substring(0,filterText.length-1);
        if(filteredItem.includes(query)) {
            newElement.style.display = "block";
        }
        else {
            newElement.style.display = "none";
        }
    })
}

// Function to clear all data in the list
function clearAll() {
    // Empty #lists div
    lists.innerHTML = "";
    // Remove all elements from itemData to []
    itemData.length = 0;
    storeItem(); // Update localStorage after clearing all items
}

// Detect clicking add button
addButton.addEventListener("click",function(event) {
    event.preventDefault();
    addItem();
})

// Detect clicking clear button
clearButton.addEventListener("click",function(event) {
    event.preventDefault();
    clearAll();
})



// Initialize create elements for old items
function initalizeOldItems() {
    if(itemData.length > 0) {
        itemData.forEach(function(item) {
            createItem(item.item);
        });
    }
}
// Call function to initialize old items
initalizeOldItems();