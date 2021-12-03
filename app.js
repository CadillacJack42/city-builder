// import functions and grab DOM elements
import { createCountString } from './utils.js';

const city = document.getElementById('city');
const water = document.getElementById('water');
const house = document.getElementById('house');


const sloganInput = document.getElementById('slogan-input');
const btn = document.getElementById('btn');

const list = document.getElementById('list');

const count = document.getElementById('count');

// let state
let state = {
    slogans: [],
    city: 0,
    water: 0,
    house: 0
};

// event.target = dom
// event.target.id = city/water/house
// event.target.value = what city which water which house
city.addEventListener('change', (event) => {
    // console.log('Hello City');
    handleClick(event);
});
water.addEventListener('change', (event) => {
    // console.log('Hello water');
    handleClick(event);
});
house.addEventListener('change', (event) => {
    // console.log('Hello house');
    handleClick(event);
});

btn.addEventListener('click', () => {
    displaySlogans();
});

window.addEventListener('load', () => {
    document.getElementById('city-img').style.backgroundImage = `url('./assets/${city.value}.jpeg')`;
    document.getElementById('water-img').style.backgroundImage = `url('./assets/${water.value}.jpeg')`;
    document.getElementById('house-img').style.backgroundImage = `url('./assets/${house.value}.jpeg')`;
    displayStats();
});

const handleClick = (e) => {
    state[e.target.id]++;
    let where = document.getElementById(`${e.target.id}-img`);
    where.style.backgroundImage = `url('./assets/${e.target.value}.jpeg')`;
    displayStats();
};

const displayStats = () => {
    count.textContent = '';
    let p = document.createElement('p');
    p.textContent = createCountString(state.city, state.water, state.house);
    p.style.color = 'white';
    p.style.margin = '0';
    p.style.marginTop = '10px';
    count.append(p);
};

const displaySlogans = () => {
    state.slogans.push(sloganInput.value);
    sloganInput.value = '';
    list.textContent = '';
    for (const slogan of state.slogans) {
        let p = document.createElement('p');
        p.classList.add('slogan');
        p.textContent = slogan;
        p.style.margin = '0';
        p.style.fontFamily = 'cursive';
        p.style.fontSize = 'larger';
        p.style.color = 'white';
        p.style.textShadow = `text-shadow: 
        -1px 0 black,
        1px 0 black,
        0 1px black,
        0 -1px black,
        -2px 0 black,
        2px 0 black,
        0 2px black,
        0 -2px black;`;
        list.prepend(p);
    }
};

//  Styles
const enter = document.getElementById('slogan-headline');
enter.style.margin = 0;
enter.style.color = 'white';
const dropdowns = document.getElementById('dropdowns');
dropdowns.style.marginTop = '10px';
const sloganDiv = document.getElementById('slogan-div');
sloganDiv.style.marginTop = '0px';
count.style.margin = '0';
