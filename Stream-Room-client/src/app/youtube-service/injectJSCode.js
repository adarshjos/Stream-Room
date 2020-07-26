console.log('Logging from preload');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log('Preload Happening>>>>>>>');
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.2.1.min.js";
    script.onload = script.onreadystatechange = function() {
        alert("dbfhsbfdsf");
    };
    document.body.appendChild(script);
});
