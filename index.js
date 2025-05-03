let saveEl = document.getElementById("save");
let countEl = document.getElementById("count");

let count = 0;
function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let conuntStr = count + " - ";
    saveEl.textContent += conuntStr;
    count = 0;
    countEl.textContent = count; 
}

countEl.addEventListener("click", increment);
saveEl.addEventListener("click", save);