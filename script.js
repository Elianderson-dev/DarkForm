// DOM references
const itemInput = document.getElementById('addItem');
const send = document.getElementById('send');
const form = document.getElementById('form');
const itemsList = document.getElementById('items');

// In-memory storage for items

let items = [];
let currentId = 1;

// CREATE
form.addEventListener('submit', function(addItem) {
    addItem.preventDefault();
    const newItemText = itemInput.value.trim();
    if (!newItemText) return;
        
        const item = {
            id: currentId++,
            element: newItemText
        }

        items.push(item)

        // Clear input field after writing
        itemInput.value = '';

        renderItems();
}); 

// READ
// In this case, READ is handled by the renderItems function, which displays the current list of items on the page. Whenever an item is added, edited, or deleted, this function is called to update the displayed list accordingly.
function renderItems() {
    itemsList.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'listGroupItem';

        // Text
        const span = document.createElement('span');
        span.textContent = item.element;

        // Edit Button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => startEdit(item.id, span));

        // Delete Button 
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteItem(item.id));

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        
        itemsList.appendChild(li);  
        
    })
}       
// UPDATE
function startEdit(id, span) {
    const item = items.find(i => i.id === id);

    const input = document.createElement("input");
    input.type = "text";
    input.value = item.element;

    span.replaceWith(input);
    input.focus(); 

    function finishEdit() {
        const newText = input.value.trim();
        if (!newText) return;

        item.element = newText;
        renderItems();
    }

    input.addEventListener("blur", finishEdit);
    input.addEventListener("keydown", e => {
        if (e.key === "Enter") finishEdit();
    });
}
// DELETE   
function deleteItem(id) {
    items = items.filter(i => i.id !== id);
    renderItems()
}