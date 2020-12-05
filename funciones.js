var b = 1
window.onload = function () {
    var s = document.getElementsByTagName("section");
    for (var i = 0; i < s.length; i++) {
        s[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "#ffffff50";
           /* document.getElementById("myImg").src = "assets/pepe.gif";
            document.getElementById("myImg2").src = "assets/pepe.gif";*/

        }, false);



        s[i].addEventListener("mouseout", function () {
            this.style.backgroundColor = "#ffffff00";
           /* document.getElementById("myImg").src = "assets/Conqueror's Crown_ New Horizon.png";
            document.getElementById("myImg2").src = "assets/Forest-Dash.png";*/
            

        }, false);
    }
   /* var s = document.getElementsByTagName("section");
    for (var i = 0; i < s.length; i++) {
        s[i].addEventListener("mouseover", function () {
            document.getElementById("myImg").src = "assets/pepe.gif";
        }, false);



        s[i].addEventListener("mouseout", function () {
            this.style.backgroundColor = "#ffffff00";
        }, false);
    }
*/
}
