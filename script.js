const itemInput = document.getElementById('addItem');
const send = document.getElementById('send');
const form = document.getElementById('form');
const itemsList = document.getElementById('items');

// CREATE
form.addEventListener('submit', function(addItem) {
    addItem.preventDefault();
    const newItemText = itemInput.value.trim();
    if (newItemText !== '') {
        const li = document.createElement('li');
        li.className = 'listGroupItem';
        li.appendChild(document.createTextNode(newItemText));
        itemsList.appendChild(li);
        
        // Clear input field after writing
        itemInput.value = '';
    }
});