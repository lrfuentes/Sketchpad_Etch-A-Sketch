const container = document.getElementById('container');
const button = document.querySelector('button');
createGrid();

function createGrid(squaresBySide = 16){
    const removeDivs = document.querySelectorAll('.innerDiv');
    removeDivs.forEach(item => {
        item.remove();
    });
    for (let i = 0; i < squaresBySide; i++) {
        for (let j = 0; j < squaresBySide; j++) {
            let div = document.createElement('div');
            div.classList.add('innerDiv');
            div.addEventListener('mouseover', event => {
                div.style.backgroundColor = randomColor();
            });
            container.appendChild(div);
        }
    }
}

button.addEventListener('click', event => {
    let result = prompt('ENTER NUMBER OF SQUARES BY SIDE');
    createGrid(parseInt(result));
});

function randomColor(){
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

function randomValue(){
    return Math.random()*1000 > 250 ? (Math.random()*1000)/10 : Math.random()*1000;
}