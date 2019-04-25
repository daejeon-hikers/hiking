 //darkTrue cookie is empty for auto (based on the time of day) 1 for darkmode and 0 for lightmode
 function checkDarkmode() {
     var darkTrue = getCookie("darkmode");
     if (darkTrue === "1") {
         enableDarkmode()
     } else if(darkTrue === "0") {
         disableDarkmode()
     } else {
         if (checkTime() <= 18 && checkTime() >= 6) {
            disableDarkmode()
         } else {
            enableDarkmode()
         }
     }
     scrollFunction()
 }

 function checkTime() {
     var d = new Date();
     var n = d.getHours();
     return n
 }

 function applyDarkmode() {
     var darkTrue = getCookie("darkmode");
     if (darkTrue === "1") {
         var cvalue = "0";
     } else if(darkTrue === "0") {
         var cvalue = "1";
     } else {
         if (checkTime() <= 18 && checkTime() >= 6) {
             darkTrue = "1"
         } else {
             darkTrue = "0"
         }
     }
     document.cookie = "darkmode=" + cvalue + ";path=/";
     //https://stackoverflow.com/questions/15385641/javascript-code-for-cookie-not-working-in-chrome
     checkDarkmode()
 }

 function enableDarkmode() {
     document.body.classList.add("dark");
 }

 function disableDarkmode() {
     document.body.classList.remove("dark");
 }

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