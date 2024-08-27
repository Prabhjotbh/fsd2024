document.addEventListener("DOMContentLoaded", function() {
    // Set the current date and time
    document.getElementById("dateTime").innerHTML = new Date().toLocaleString();

    // Toggle dog description visibility
    window.toggleDescription = function(id) {
        var desc = document.getElementById(id);
        if (desc.style.display === "none" || desc.style.display === "") {
            desc.style.display = "block";
        } else {
            desc.style.display = "none";
        }
    };

    // Show alert with dog breed name
    window.showAlert = function(dogName) {
        alert("You clicked on " + dogName);
    };

    // Change background color to a random color
    window.changeBackgroundColor = function() {
        var colors = ["#ffccbc", "#c8e6c9", "#fff9c4", "#d1c4e9", "#b3e5fc"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    };

    // Toggle dark mode
    window.toggleDarkMode = function() {
        var body = document.body;
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.style.backgroundColor = "#e3f2fd";
            body.style.color = "#000";
            document.querySelectorAll('.dog-section').forEach(function(section) {
                section.style.backgroundColor = "#ffffff";
            });
        } else {
            body.classList.add("dark-mode");
            body.style.backgroundColor = "#121212";
            body.style.color = "#fff";
            document.querySelectorAll('.dog-section').forEach(function(section) {
                section.style.backgroundColor = "#333";
            });
        }
    };
});
