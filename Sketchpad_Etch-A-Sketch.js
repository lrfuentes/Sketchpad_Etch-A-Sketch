const container = document.getElementById('container');
const button = document.querySelector('button');
createGrid();

function createGrid(squaresBySide = 16){
    let removeDivs = document.querySelectorAll('.innerDiv');
    removeDivs.forEach(item => {
        item.remove();
    });
    for (let i = 0; i < squaresBySide; i++) {
        for (let j = 0; j < squaresBySide; j++) {
            let div = document.createElement('div');
            div.classList.add('innerDiv');
            div.addEventListener('mouseover', event => {
                event.target.classList.add('trail');
            });
            container.appendChild(div);
        }
    }
}

button.addEventListener('click', event => {
    let result = prompt('ENTER NUMBER OF SQUARES BY SIDE');
    createGrid(parseInt(result));
});
