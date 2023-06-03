let prom = document.querySelector('#prompt');
let square = document.querySelector('#square');
let clear = document.querySelector('#clear');
let resize = 0;
let initialSize = 24;
// Initial
for(let i = 0; i < initialSize; i++) {
    let rows = document.createElement('div');
    rows.classList.add('rows');
    for(let j = 0; j < initialSize; j++) {
        let box = document.createElement('div');
        box.classList.add('box');
        rows.appendChild(box);
    }
    square.appendChild(rows);
}
// Resize
prom.addEventListener('click', () => {
    resize = prompt('Type the size you want (1 - 100)');
    if(resize >= 1 && resize <= 100) {
        square.innerHTML = "";
        for(let i = 0; i < resize; i++) {
            let rows = document.createElement('div');
            rows.classList.add('rows');
            for(let j = 0; j < resize; j++) {
                let box = document.createElement('div');
                box.classList.add('box');
                rows.appendChild(box);
            }
            square.appendChild(rows);
        }
        // Resize Event
        let boxs = document.querySelectorAll('.box');
        boxs.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                let first = Math.floor(Math.random() * 256);
                let second = Math.floor(Math.random() * 256);
                let third = Math.floor(Math.random() * 256);
                item.style.backgroundColor = `rgb(${first}, ${second}, ${third})`;
            })
        })
    }
    else {
        alert('Invalid Input (Please choose number from 1 to 100)')
    }
})
// Clear
clear.addEventListener('click', () => {
    let boxs = document.querySelectorAll('.box');
    boxs.forEach((item) => {
        item.style.backgroundColor = null;
    })
})
// Default Event
let boxs = document.querySelectorAll('.box');
boxs.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        let first = Math.floor(Math.random() * 256);
        let second = Math.floor(Math.random() * 256);
        let third = Math.floor(Math.random() * 256);
        item.style.backgroundColor = `rgb(${first}, ${second}, ${third})`;
    })
})
