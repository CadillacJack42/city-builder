// import functions and grab DOM elements
import { createCountString } from './utils.js';

const city = document.getElementById('city');
const water = document.getElementById('water');
const house = document.getElementById('house');


const sloganInput = document.getElementById('slogan-input');
const btn = document.getElementById('btn');

// let state
let state = {
    slogans: [],
    city: 0,
    water: 0,
    house: 0
};

// event.target = dom
// event.target.id = city/water/house
// event.target.value = what city
city.addEventListener('change', (event) => {
    // console.log('Hello City');
    handleClick(event.target.id)
});
water.addEventListener('change', () => {
    console.log('Hello water');
});
house.addEventListener('change', () => {
    console.log('Hello house');
});

btn.addEventListener('click', () => {
    console.log(sloganInput.value); 
});

const handleClick = (e) => {
  console.log(e);
};
