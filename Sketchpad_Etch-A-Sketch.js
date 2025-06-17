let container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', event => {
            event.target.classList.add('trail');
        });
        container.appendChild(div);
    }
}
