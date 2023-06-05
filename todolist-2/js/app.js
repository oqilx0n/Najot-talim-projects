const body = document.querySelector('.body')


const select = document.querySelector('#select')

let themeStatus = localStorage.getItem('theme');

select.addEventListener('change', (e) => {
    e.preventDefault();
    if (select.value === 'dark') {
        body.classList.toggle('dark-1')
        localStorage.setItem('theme', 'dark')

    } else {

        body.classList.remove('dark-1')
        localStorage.setItem('theme', 'light')
    }

})

if (themeStatus === 'dark') {
    body.classList.toggle('dark-1')
    select.value = 'dark'
} else {
    body.classList.remove('dark-1')
};





const input = document.querySelector('#input-task');
const addItem = document.querySelector('#AddButttOn');
const clearAll = document.querySelector('#ReMoveAll');
const list = document.querySelector('#List');

let elementArr = [ ];
let count = 0;

elementArr.push(count)


function addItemFun(item, id) {
    const task = document.createElement('span');
    task.classList.add('span');
    task.textContent = item;
    // task.textContent = `${input.value}`;
    const btns = document.createElement('div')
    const edit = document.createElement('button');
    edit.setAttribute('id', 'AddButtton')
    edit.textContent = 'Edit';
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove'
    removeBtn.classList.add('remove')
    removeBtn.setAttribute('id', id)



    const taskList = document.createElement('li');
    taskList.classList.add('li')
    btns.append(edit, removeBtn);
    taskList.append(task, btns);
    list.appendChild(taskList);

}


addItem.addEventListener('click', (e)=>{
    e.preventDefault();
    const task = document.createElement('span');
    task.classList.add('span');
    task.textContent = `${input.value}`;
    const btns = document.createElement('div')
    const edit = document.createElement('button');
    edit.setAttribute('id', 'AddButtton')
    edit.textContent = 'Edit';
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove'
    removeBtn.classList.add('remove')

    const taskList = document.createElement('li');
    taskList.classList.add('li')
    btns.append(edit, removeBtn);
    taskList.append(task, btns);
    list.appendChild(taskList);
    
    count++;
    elementArr.push(count);
    const name = elementArr.length - 1;
    console.log(name);
    localStorage.setItem(name, input.value)
    removeBtn.setAttribute('id', name)

    console.log(elementArr);

    input.value = '';

})

      

 const arr = [];
 
 for(let i = 1;i < 100; i++)arr.push(i)


arr.forEach(element => {
   const item = localStorage.getItem(element);
   if (item) {
    
   addItemFun(item, element);
    }

 });

clearAll.addEventListener('click', (e) => {
    e.preventDefault();
    list.innerHTML = '';
    localStorage.clear();
});

const removeBtn = document.querySelectorAll('.remove');
const span = document.querySelectorAll('.span');


list.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('remove')) {
        const removeBtns = e.target;
        const targetId = e.target.id; 
        localStorage.removeItem(targetId)
        const children = removeBtns.parentNode;
        const parents = children.parentNode;
        parents.remove();
        localStorage.removeItem(1)
    }

})
