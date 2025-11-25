import { users } from './data.js'

let container = document.querySelector('.card-container')

function addCard(arr) {
    const retrievedObject = JSON.parse(localStorage.getItem('object'))
    let object = {
            url: `${localStorage.getItem('img')}`,
            name: `${retrievedObject.name}`,
            surname: `${retrievedObject.surname}`,
            activity: `${retrievedObject.activity}`,
            "birth-year": `${retrievedObject['birth-year']}`,
        }
        arr.push(object);
}

function render(arr) {
for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.classList.add('card');
    li.innerHTML = `
    <div class="close-btn"><i class="fa-solid fa-xmark"></i></div>   
    <ul>
        <li class="image-container card-info-container">
        <img src="${arr[i].url}" alt="" class="image">
        </li>
        <li class="card-info-container">
        <p>Name:</p>
        <p  class="name">${arr[i].name}</p>
        </li>
        <li class="card-info-container">
        <p>Surname:</p>
        <p  class="surname">${arr[i].surname}</p>
        </li>
        <li class="card-info-container">
        <p>Activity:</p>
        <p class="activity">${arr[i].activity}</p>
        </li>
        <li class="card-info-container">
        <p>Birth Year:</p>
        <p class="birth-year">${arr[i]['birth-year']}</p>
        </li>
    </ul>`
    container.appendChild(li);
    document.addEventListener('click', e => {
    if(e.target === document.getElementsByTagName('i')[i]) {
        document.getElementsByClassName('card')[i].remove()
    }})}}
addCard(users)
render(users)
