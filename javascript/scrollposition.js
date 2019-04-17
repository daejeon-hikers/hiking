//changes color of the nav bar based on scroll postion
window.onscroll = function () {
    scrollFunction()
};
// color of nav bar o for orignal and f for final rgba values
var or = 255,
    og = 255,
    ob = 255,
    oa = 0,
    fr = 255,
    fg = 255,
    fb = 255,
    fa = 1;

function scrollFunction() {
    var navBar = document.getElementById("mySidenav");
    //height and width of browser window
    var winheight = window.innerHeight;
    var winWidth = window.innerWidth;
    //media query so that color only changes in desktop mode
    //change number if changing mobile page width in css media query
    if (winWidth > 1024) {
        //color after parllax
        if (document.documentElement.scrollTop > winheight - navBar.offsetHeight) {
            navBar.style.backgroundColor = "rgba(" + fr + "," + fg + "," + fb + "," + fa + ")"
            navBar.style.boxShadow = "0 0 9px -1px #111"
            //color during scrolling of the parllax
        } else {
            //portion scrolled to the end of the inital parllax
            var scrollPer = ((document.documentElement.scrollTop) / (winheight - navBar.offsetHeight));
            navBar.style.backgroundColor = "rgba(" + (or + ((fr - or) * scrollPer)) + "," + (og + ((fg - og) * scrollPer)) + "," + (ob + ((fb - ob) * scrollPer)) + "," + (oa + ((fa - oa) * scrollPer)) + ")";
            navBar.style.boxShadow = "none";
        }
    }
}