const itemInput = document.getElementById('addItem');
const send = document.getElementById('send');
const form = document.getElementById('form');
const itemsList = document.getElementById('items');

// Basic structure for in-memory storage

let items = [];
let currentId = 1;

// CREATE
form.addEventListener('submit', function(addItem) {
    addItem.preventDefault();
    const newItemText = itemInput.value.trim();
    if (newItemText !== '') {
        
        const item = {
            id: currentId++,
            element: newItemText
        }

        items.push(item)

        // Clear input field after writing
        itemInput.value = '';

        renderItems();
    }
}); 


// READ 
function renderItems() {
    itemsList.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'listGroupItem';
        li.appendChild(document.createTextNode(item.element));
        itemsList.appendChild(li);  
        
    })
}       
// UPDATE

// DELETE   
