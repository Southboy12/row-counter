let countEl = document.getElementById('count-el')
let countStr = document.getElementById('save-el')

let count = 0
console.log(countStr.innerText);
function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let saveEl = count + " - "
    countStr.textContent += saveEl 
    count = 0
    countEl.textContent = 0
}