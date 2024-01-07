const button = document.querySelector('button')!;

function clickHandle() {
    console.log(`Clicked
    `);
}

button.addEventListener('click', clickHandle.bind(null))