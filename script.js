// Get DOM elements
const form = document.querySelector('.formStyle');
const input = document.querySelector('input[type="text"]');
const itemsList = document.getElementById('items');

// CRUD Operations
const crud = {
    items: [],
    
    // CREATE
    addItem(text) {
        const item = { id: Date.now(), text };
        this.items.push(item);
        this.render();
    },
    
    // READ
    getItems() {
        return this.items;
    },
    
    getItemById(id) {
        return this.items.find(item => item.id === id);
    },
    
    // UPDATE
    updateItem(id, text) {
        const item = this.getItemById(id);
        if (item) {
            item.text = text;
            this.render();
        }
    },
    
    // DELETE
    deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.render();
    },
    
    // RENDER
    render() {
        itemsList.innerHTML = this.items.map(item => `
            <li class="listItem">
                <span>${item.text}</span>
                <button class="editBtn" data-id="${item.id}">Edit</button>
                <button class="deleteBtn" data-id="${item.id}">Delete</button>
            </li>
        `).join('');
        this.attachEventListeners();
    },
    
    attachEventListeners() {
        document.querySelectorAll('.deleteBtn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.deleteItem(parseInt(e.target.dataset.id));
            });
        });
    }
};

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        crud.addItem(input.value);
        input.value = '';
    }
});