//Model

let lightSwitch = false;
let lysMessage = '<br/><br/><br/><br/>OFF';
const app = document.getElementById('app');

//View

updateView();
function updateView() {
    let html = /*HTML*/`
        <div class="lys">
            <div class="sokkel"></div>
            ${velgBulb()}
    </div>
    <div class="bryter">
        <div class="knapp" onclick="toggleLights()">
            <div class="on">${lysMessage}</div>
        </div>
    </div>
    `;
    app.innerHTML = html;
}
function velgBulb() {
    if (lightSwitch == false) return `<div class="bulb"></div>`
    return `<div style="background-color: yellow; "class="bulb"></div>`
}

//controller

function toggleLights() {
    lightSwitch = !lightSwitch;

    if (lightSwitch == false) {
        turnOff();
    } else {
        turnOn();
    }
    updateView();
}
function turnOn() {
    document.body.style.backgroundColor = "white";
    lysMessage = `ON`;
    updateView();
}
function turnOff() {
    document.body.style.backgroundColor = "black";
    lysMessage = `<br/><br/><br/><br/>OFF`;
    updateView();
}