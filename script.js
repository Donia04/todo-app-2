const list = document.getElementById('list');
const addBtn = document.getElementById('add-btn');
const checkAllBtn = document.getElementById('check-all');
const deleteAllBtn = document.getElementById('delete-all');

addBtn.addEventListener('click', addListItem);
checkAllBtn.addEventListener('click', checkAll);
deleteAllBtn.addEventListener('click', deleteAll);

function addPlaceholder() {
    const placeHolder = document.createElement('div');
    placeHolder.classList = 'list-item placeholder';
    placeHolder.textContent = 'Add todos here';
    list.append(placeHolder);
}
addPlaceholder();

function checkForPlaceholder() {
    if (list.firstChild.classList.contains('placeholder')) {
        list.removeChild(list.firstChild);
    }
}

function addListItem() {
    const x = document.getElementById('new-item')
    const input = x.value;
    x.value = '';

    checkForPlaceholder();

    let newItem = document.createElement('div');
    newItem.className = 'list-item';

    const text = document.createElement('p');
    text.textContent = input;

    const checkBtn = addCheckBtn();

    const deleteBtn = addDeleteBtn();

    newItem.appendChild(checkBtn);
    newItem.appendChild(text);
    newItem.appendChild(deleteBtn);
    list.appendChild(newItem);
}

function addCheckBtn() {
    const checkBtn = document.createElement('button');
    checkBtn.classList = 'item-btn check-btn';
    checkBtn.textContent = 'check';
    checkBtn.onclick = (e) => {
        e.target.parentNode.classList.toggle('checked');
    }

    return checkBtn;
}

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'item-btn delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = e => {
        const listItem = e.target.parentNode;
        listItem.parentNode.removeChild(listItem);
        if (!list.firstChild) {
            addPlaceholder();
        }
    }

    return deleteBtn;
}

function checkAll() {
    if (list.firstChild.classList.contains('placeholder')) {
        return;
    }

    for (let child of list.children) {
        if (!child.classList.contains('checked')) {
            child.classList.add('checked');
        }
    }
}

function deleteAll() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    addPlaceholder();
}