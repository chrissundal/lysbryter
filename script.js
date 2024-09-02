let lightSwitch = false;

        function toggleLights() {
            lightSwitch = !lightSwitch;
            
            if (lightSwitch == false) {
                turnOff();
            } else {
                turnOn();
            }
        }
        function turnOn() {
            document.getElementById('bulb').style.backgroundColor = "yellow";
            document.getElementById('off').innerHTML = "";
            document.getElementById('body').style.backgroundColor = "white";
            document.getElementById('on').innerHTML = "ON";
        }
        function turnOff() {
            document.getElementById('bulb').style.backgroundColor = "gray";
            document.getElementById('off').innerHTML = "OFF";
            document.getElementById('body').style.backgroundColor = "black";
            document.getElementById('on').innerHTML = "";
        }