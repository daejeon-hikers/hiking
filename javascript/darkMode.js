 function checkDarkmode() {
     var darkTrue = getCookie("darkmode")
     if (darkTrue === "1") {
        enableDarkmode()
     } else {
        disableDarkmode()
     }

 }

 function applyDarkmode() {
     var darkTrue = getCookie("darkmode");
     if (darkTrue === "1") {
         var cvalue = "0";
     } else {
         var cvalue = "1";
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