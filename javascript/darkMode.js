 //darkTrue cookie is empty for auto (based on the time of day) 1 for darkmode and 0 for lightmode
 function checkDarkmode() {
     var darkTrue = getCookie("darkmode");
     if (darkTrue === "1") {
         enableDarkmode()
     } else if (darkTrue === "0") {
         disableDarkmode()
     } else {
         //if there is no value for darktrue cookie enables based on time of day
         if (checkTime() <= 18 && checkTime() >= 6) {
             disableDarkmode()
         } else {
             enableDarkmode()
         }
     }
     scrollFunction()
 }
 //returns hour of the day
 function checkTime() {
     var d = new Date();
     var n = d.getHours();
     return n
 }
 //function runs when the darkmode switch is clicked and changes value of the cookie to the desired value
 function applyDarkmode() {
     var darkTrue = getCookie("darkmode");
     //if is already darkmode changes to light mode
     if (darkTrue === "1") {
         var cvalue = "0";
         //if is already lightmode changes to dark mode
     } else if (darkTrue === "0") {
         var cvalue = "1";
         //if no cookie exists changes it to the one it is currently not 
     } else {
         if (checkTime() <= 18 && checkTime() >= 6) {
             cvalue = "1"
         } else {
             cvalue = "0"
         }
     }
     document.cookie = "darkmode=" + cvalue + ";path=/";
     //https://stackoverflow.com/questions/15385641/javascript-code-for-cookie-not-working-in-chrome
     checkDarkmode()
 }
 //function run in order to apply darkmode
 function enableDarkmode() {
     document.body.classList.add("dark");
     document.documentElement.backgroundColor = "#111";
 }
 //function fun in order to disable darkmode
 function disableDarkmode() {
     document.body.classList.remove("dark");
     document.documentElement.backgroundColor = '#f5f5f5';
 }
 //function in order to read the value of a cookie
 function getCookie(cname) {
     var name = cname + "=";
     var decodedCookie = decodeURIComponent(document.cookie);
     var ca = decodedCookie.split(';');
     for (var i = 0; i < ca.length; i++) {
         var c = ca[i];
         while (c.charAt(0) == ' ') {
             c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
             return c.substring(name.length, c.length);
         }
     }
     return "";
 }



















 function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }