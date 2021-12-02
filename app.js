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

const handleClick = (e) => {
    state[e.target.id]++;
    console.log(state);
    let where = document.getElementById(`${e.target.id}-img`);
    where.style.backgroundImage = `url('./assets/${e.target.value}.jpeg')`;
    displayStats();
  // console.log(e);
};

const displayStats = () => {
    count.textContent = '';
    let p = document.createElement('p');
    p.textContent = createCountString(state.city, state.water, state.house);
    count.append(p);
};

const displaySlogans = () => {
    state.slogans.push(sloganInput.value);
    console.log(state.slogans);
    sloganInput.value = '';
    list.textContent = '';
    for (const slogan of state.slogans) {
        let p = document.createElement('p');
        p.textContent = slogan;
        list.append(p);
    }
    
};


const enter = document.getElementById('slogan-headline');
enter.style.margin = 0;