//changes color of the nav bar based on scroll postion
window.onscroll = function () {
    scrollFunction()
};
// color of nav bar o for orignal and f for final rgba values

function scrollFunction() {
    var navBar = document.getElementById("mySidenav");
    if (document.body.classList.contains("dark")) {
        var or = 32,
            og = 32,
            ob = 32,
            oa = 0,
            fr = 32,
            fg = 32,
            fb = 32,
            fa = 1;
    } else {
        var or = 255,
            og = 255,
            ob = 255,
            oa = 0,
            fr = 255,
            fg = 255,
            fb = 255,
            fa = 1;
    }
    //height and width of browser window
    var winheight = window.innerHeight;
    var winWidth = window.innerWidth;
    //media query so that color only changes in desktop mode
    //change number if changing mobile page width in css media query
    if (winWidth > 1024) {
        //color after parllax
        if (document.documentElement.scrollTop > winheight - navBar.offsetHeight) {
            navBar.style.backgroundColor = "rgba(" + fr + "," + fg + "," + fb + "," + fa + ")"
            navBar.style.boxShadow = "0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
            //color during scrolling of the parllax
        } else {
            //portion scrolled to the end of the inital parllax
            var scrollPer = ((document.documentElement.scrollTop) / (winheight - navBar.offsetHeight));
            navBar.style.backgroundColor = "rgba(" + (or + ((fr - or) * scrollPer)) + "," + (og + ((fg - og) * scrollPer)) + "," + (ob + ((fb - ob) * scrollPer)) + "," + (oa + ((fa - oa) * scrollPer)) + ")";
            navBar.style.boxShadow = "none";
        }
    }
}