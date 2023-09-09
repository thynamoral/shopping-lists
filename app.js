// Get elements's id from html
const item = document.getElementById("item");
const add = document.getElementById("add");
const filter = document.getElementById("filter");
const clear = document.getElementById("clear");
const lists = document.getElementById("lists");

const item_data = []

// Add button
add.addEventListener("click",(event) => {
    event.preventDefault();

    if(!item.value) {
        alert("Invalid item!");
    }
    else {
        item_data.push(item.value);
        // item values in the lists
        let list = document.createElement("p");
        for(i of item_data) {
            list.innerHTML = i;
            list.classList.add("list-item");
        }

        // add delete button
        let delete_list = document.createElement("span");
        delete_list.innerHTML = "x";
        delete_list.classList.add("delete-style");
        list.appendChild(delete_list);
        // append item values and delete button into lists
        lists.appendChild(list);

        // delete the item
        delete_list.addEventListener("click",() => {
            list.remove();
        });

        item.value = "";
    }
})

// Clear function
function clearLists(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
// Clear button
clear.addEventListener("click",(event) => {
    event.preventDefault();
    clearLists(lists);
})

// Filter button
// Filter input
filter.addEventListener("input", () => {
    const filterValue = filter.value.toLowerCase();
    const listItems = lists.querySelectorAll(".list-item");

    listItems.forEach((listItem) => {
        const itemText = listItem.textContent.toLowerCase();
        if (itemText.includes(filterValue)) {
            listItem.style.display = "block"; // Show matching items
        } else {
            listItem.style.display = "none"; // Hide non-matching items
        }
    });
});



