/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-250px";
  document.getElementById("pageCover").style.height = "100vh";
  document.getElementById("pageCover").style.width = "100vw";
  document.getElementById("pageCover").style.backgroundColor = "#00000050";
  document.getElementById("closeBtn").style.zIndex = "10";
  document.getElementById("openBtn").classList.add("opened");
  document.getElementById("moblieNav").style.left = "-250px"

}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  /*make sure timer is same as animation time of nav opening and closing*/
  setTimeout(removeCover, 500)
  document.getElementById("pageCover").style.backgroundColor = "#00000000";
  document.getElementById("closeBtn").style.zIndex = "-1";
  document.getElementById("openBtn").classList.remove("opened");
  document.getElementById("moblieNav").style.left = "0"
}

function removeCover() {
  document.getElementById("pageCover").style.height = "0";
  document.getElementById("pageCover").style.width = "0";
}
/*in order to close nav so that no code is broken when changing between moblie and desktop sites if browser changes size*/
function widthCheck() {
  var winWidth = window.innerWidth;
  if (winWidth > 1024) {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
    //in order to change to the right color according to scroll position
    scrollFunction()
  } else {
    //closes the navbar on window resize so that when the desktop size becomes moblie nav bar is not broken
    closeNav()
    //color of moblie navbar
    document.getElementById("mySidenav").style.backgroundColor = "#111";
    document.getElementById("mySidenav").style.boxShadow = "none";
  }
}

function openCheck(type) {
  if (document.getElementById("dropDown" + type + "").classList.contains("opened")) {
    dropDownClose(type)
  } else {
    dropDownOpen(type)
  }
}

function dropDownOpen(type) {
  document.getElementById("dropDown" + type + "").classList.add("opened");
  document.getElementById("mySidenav").style.backgroundColor = "rgba(" + fr + "," + fg + "," + fb + "," + fa + ")";
  document.getElementById("mySidenav").style.transition = "0.3s"
  disableScroll()
}

function dropDownClose(type) {
  document.getElementById("dropDown" + type + "").classList.remove("opened");
  scrollFunction()
  enableScroll()
  setTimeout(disableAni, 300);
  function disableAni() {
    document.getElementById("mySidenav").style.transition = "0s";
  }
  
}

function disableScroll() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScroll() {
  window.onscroll = function () {
    scrollFunction()
  };
}