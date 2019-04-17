
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-250px";
  //document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("pageCover").style.height = "100vh";
  document.getElementById("pageCover").style.width = "100vw";
  document.getElementById("pageCover").style.backgroundColor = "#00000050";

  //document.getElementById("openBtn").style.right = "264px";
  //document.getElementById("closeBtn").style.right = "264px";
  document.getElementById("closeBtn").style.zIndex = "10";
  document.getElementById("openBtn").classList.add("opened");
  document.getElementById("moblieNav").style.left = "-250px"

}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  //document.getElementById("main").style.backgroundColor = "white";
  /*make sure timer is same as animation time of nav opening and closing*/
  setTimeout(removeCover, 500)
  document.getElementById("pageCover").style.backgroundColor = "#00000000";
  //document.getElementById("openBtn").style.right = "14px"
  //document.getElementById("closeBtn").style.right = "14px"
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
    //closes the navbar on window resize so that when the desktop size becomes moblie nav bar is no broken
    closeNav()
    //color of moblie navbar
    document.getElementById("mySidenav").style.backgroundColor = "#111";
    document.getElementById("mySidenav").style.boxShadow = "none";
  }
}