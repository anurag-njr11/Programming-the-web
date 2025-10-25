function toggle() {
            var bulb = document.getElementById("bulb");
            var status = document.getElementById("toggle");
            if (bulb.src.match("bulb-off")) {
                bulb.src = "bulb-on.png";
                status.innerHTML = "OFF";
            } 
            else {
                bulb.src = "bulb-off.png";
                status.innerHTML = "ON"
            }
        }
console.log(boxes)