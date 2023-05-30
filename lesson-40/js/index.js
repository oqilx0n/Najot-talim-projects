let people = [
    {
        firstName:'Elon Musk',
        money:332,
            
    },
    {
        firstName: 'Bill Gates',
        money: 232,

    },
    {
        firstName: 'Jeff Bezos',
        money: 242,

    },
    {
        firstName: 'Mark Zuckerberg',
        money: 292,

    },
     {
        firstName: 'Stiv Jobs',
        money: 282,

    }
];


const selectBox = document.querySelector('.select');
const input = document.querySelector('.input');
const div = document.querySelector('.div');
const btn = document.querySelector('.btn')



function renderData(data) {
   div.innerHTML = null;
   if (data.length > 0) {
    
    data.forEach((element) => {
        // const rows = document.createElement('div');
        // rows.classList.add('row')
        const cols = document.createElement('div');
        cols.classList.add('col-12')
        // rows.appendChild(cols);
        const peopleNewDiv = document.createElement('div');
        peopleNewDiv.classList.add('card')
        const namesNew = document.createElement('h5');
        const moneyNew = document.createElement('p');
        namesNew.textContent = `${element.firstName}`;
        moneyNew.textContent = `wealth:${element.money}B`;
        cols.appendChild(peopleNewDiv);
        peopleNewDiv.append(namesNew, moneyNew);
        div.appendChild(cols)

    });
} else {
    const notFound = document.createElement('h1');
    notFound.textContent = 'No such person found';
    div.appendChild(notFound)
}
}

if (!input.value) {
    people.sort((a, b)=> b.money - a.money);
    renderData(people)
}else {
    renderData(filteredPeople)
}
btn.addEventListener('click', (e) => {
    e.preventDefault();
   
    const inputValue = +input.value;
    const filteredPeople = people.filter((people) => people.money > inputValue);
   

    const selectValue = selectBox.value;

    if(selectValue === 'desc') {
        filteredPeople.sort((a, b)=> b.money - a.money); 
    }else if(selectValue === 'asc') {
        filteredPeople.sort((a, b)=>a.money - b.money)
    }   

    
        renderData(filteredPeople)

    
});


