const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filterWord = document.getElementById('filter');

form.addEventListener('submit', function(e){
    e.preventDefault();
    // li
    let newItem = document.getElementById('newItem').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
    // btn
    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);

    document.getElementById('newItem').value = '';
});

itemList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
});

filterWord.addEventListener('keyup', function(){
    let word = filterWord.value;
    let itemLi = document.getElementsByClassName('list-group-item');
    Array.from(itemLi).forEach(function(w){
        let itemWord = w.firstChild.textContent;
        if (itemWord.toLowerCase().indexOf(word) != -1) {
            w.style.display = 'block';
        } else {
            w.style.display = 'none';
        }
    })
});
