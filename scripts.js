
function showAlert(dogName) {
    alert("You clicked on the " + dogName + " image!");
}


function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}


function changeBackgroundColor() {
    var colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lightgray"];
    var currentColor = document.body.style.backgroundColor;
    var newColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    document.body.style.backgroundColor = newColor;
}


function displayDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    document.getElementById("dateTime").innerText = dateTimeString;
}

setInterval(displayDateTime, 1000);

displayDateTime();
