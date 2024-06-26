/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTitle");
    if (x.className === "title") {
        x.className += " responsive";
    } else {
        x.className = "title";
    }
}