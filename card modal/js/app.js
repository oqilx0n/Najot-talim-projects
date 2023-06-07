const row = document.querySelector('.row');
const mBody = document.querySelector('.modal-body')
const url = 'https://jsonplaceholder.typicode.com';
const btn = document.querySelector('.btn-close')



fetch(`${url}/posts`)
.then(res=> res.json())
.then(json=> json.forEach(element => {
     const title = document.createElement('h4');
     const text = document.createElement('p');
    
    title.textContent = element.title;
    text.textContent = element.body;

      
     const card = document.createElement('div');
     card.classList.add('card');
    card.setAttribute('data-bs-toggle', 'modal');
    card.setAttribute('type', 'button');
    card.setAttribute('data-bs-target', '#staticBackdrop');
     
     card.setAttribute('id', element.id);
     card.append(title, text)
     const col = document.createElement('div');
     col.classList.add('col-lg-4');
     col.classList.add('col-12');
     col.appendChild(card);
     row.appendChild(col)
}))
.catch(err => console.error(err));

const myArr = [ ];

    fetch(`${url}/comments`)
        .then(res => res.json())
        .then(json => json.forEach(element => {
               myArr.push(element)
              
            }))

        .catch(err => console.error(err));



row.addEventListener('click', (e) => {

    e.preventDefault();
   if(e.target.parentElement.classList.contains('card')){
    const id = e.target.parentElement.id;
       const pBody = myArr.filter((post) => post.postId == id)
    //    const  {body, name, email} = pBody;
       console.log(pBody);
       pBody.forEach(e => {
        const profile = document.createElement('img');
        
        const comments = document.createElement('div')
        comments.classList.add('card')
        const mText = document.createElement('p')
        mText.textContent = e.body;
        const names = document.createElement('h5')
        names.textContent = `${e.name}: `;
        const emails = document.createElement('span')
        emails.textContent = e.email;

           comments.append(names, emails, mText)
       mBody.append(profile, comments)
       })
    }

   
})
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    mBody.textContent =''
})