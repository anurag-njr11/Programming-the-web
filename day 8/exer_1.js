var boxes = document.getElementsByClassName("box");
console.log(boxes);
for (var i=0; i<boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        var col = document.getElementById("col");
        col.innerText = getComputedStyle(this).backgroundColor;
        document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
    });
}

