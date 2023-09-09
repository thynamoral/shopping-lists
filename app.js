// Get elements's id from html
const item = document.getElementById("item");
const add = document.getElementById("add");
const filter = document.getElementById("filter");
const clear = document.getElementById("clear");
const lists = document.getElementById("lists");

// Add button
add.addEventListener("click",(event) => {
    event.preventDefault();

    if(!item.value) {
        alert("Invalid item!");
    }
    else {
        // item values in the lists
        let list = document.createElement("p");
        list.innerHTML = item.value;
        list.classList.add("list-item");

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
        })

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


