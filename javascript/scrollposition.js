//changes color of the nav bar based on scroll postion
window.onscroll = function () {
    scrollFunction()
};
// color of nav bar o for orignal and f for final rgba values

function scrollFunction(dropDownOpened) {
    var navBar = document.getElementById("mySidenav");
    //value of rgba values for darkmode enabled
    if (getCookie("darkmode") === "1") {
        var or = 32,
            og = 32,
            ob = 32,
            oa = 0.5,
            fr = 32,
            fg = 32,
            fb = 32,
            fa = 1;
        //value of rgba values for lightmode enabled
    } else if (getCookie("darkmode") === "0") {
        var or = 255,
            og = 255,
            ob = 255,
            oa = 0,
            fr = 255,
            fg = 255,
            fb = 255,
            fa = 1;
    } else {
        //value of rgba values for lightmode enabled due to time
        if (checkTime() <= 18 && checkTime() >= 6) {
            var or = 255,
                og = 255,
                ob = 255,
                oa = 0,
                fr = 255,
                fg = 255,
                fb = 255,
                fa = 1;
            //value of rgba values for darkmode enabled due to time
        } else {
            var or = 32,
                og = 32,
                ob = 32,
                oa = 0.5,
                fr = 32,
                fg = 32,
                fb = 32,
                fa = 1;
        }
    }
    //height and width of browser window
    var winheight = window.innerHeight;
    var winWidth = window.innerWidth;
    //media query so that color only changes in desktop mode
    //change number if changing mobile page width in css media query
    if (winWidth > 1024) {
        //style after parllax also applys when dropdown menu is open and also applys in edge and internet explorer to provide minimal support for legacy browersers
        if (document.documentElement.scrollTop > winheight - navBar.offsetHeight || dropDownOpened || /Edge/.test(navigator.userAgent) || /MSIE 9/.test(navigator.userAgent) || /MSIE 10/.test(navigator.userAgent) || /rv:11.0/.test(navigator.userAgent)) {
            navBar.style.backgroundColor = "rgba(" + fr + "," + fg + "," + fb + "," + fa + ")"
            navBar.style.boxShadow = "0px 8px 16px 0px rgba(0, 0, 0, 0.2)";
            document.getElementById("section02").style.display = "none";
            //color during scrolling of the parllax
        } else {
            //portion scrolled to the end of the inital parllax
            var scrollPer = ((document.documentElement.scrollTop) / (winheight - navBar.offsetHeight));
            navBar.style.backgroundColor = "rgba(" + (or + ((fr - or) * scrollPer)) + "," + (og + ((fg - og) * scrollPer)) + "," + (ob + ((fb - ob) * scrollPer)) + "," + (oa + ((fa - oa) * scrollPer)) + ")";
            navBar.style.boxShadow = "none";
            //removes scroll button when scrolling down
            if (scrollPer > 0) {
                document.getElementById("section02").style.display = "none";
            } else {
                document.getElementById("section02").style.display = "inline-block";
            }

        }
    }
}
// allows the scroll button to work
function scrollDown() {
    //scrolls so that top of conent is at bottome of nav + 1 px so that the shadow appears
    scrollTo(0, (window.innerHeight + 1 - document.getElementById("mySidenav").offsetHeight));
}