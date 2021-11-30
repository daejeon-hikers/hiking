//function that opens the nav bar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-250px";
  //creates a pagecover inorder to get a darkening effect on the conent of the page when the navbar is open
  document.getElementById("pageCover").style.height = "100vh";
  document.getElementById("pageCover").style.width = "100vw";
  document.getElementById("pageCover").style.backgroundColor = "#00000050";
  //in order to animate the button and bring the close button infront of the open button so that when the user clicks on the button it clicks on the open button
  document.getElementById("closeBtn").style.zIndex = "10";
  document.getElementById("openBtn").classList.add("opened");
  //as the navbar position is fixed it must be moved separately
  document.getElementById("moblieNav").style.left = "-250px"

}
//function that cloes the navbar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  /*make sure timer is same as animation time of nav opening and closing*/
  //delay the resizing of the cover so that the user only sees the animation of its opacity change and the change of size animation
  setTimeout(removeCover, 500)

  function removeCover() {
    document.getElementById("pageCover").style.height = "0";
    document.getElementById("pageCover").style.width = "0";
  }
  document.getElementById("pageCover").style.backgroundColor = "#00000000";
  document.getElementById("closeBtn").style.zIndex = "-1";
  document.getElementById("openBtn").classList.remove("opened");
  document.getElementById("moblieNav").style.left = "0"
}

/*in order to close nav so that no code is broken when changing between moblie and desktop sites if browser changes size*/
function widthCheck() {
  var winWidth = window.innerWidth;
  if (winWidth > 1024) {
    closeNav()
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
    //in order to change to the right color according to scroll position
    scrollFunction()
  } else {
    //closes the navbar on window resize so that when the desktop site becomes moblie nav bar is properly hidden
    closeNav()
    //color of moblie navbar
    document.getElementById("mySidenav").style.backgroundColor = "#111";
    document.getElementById("mySidenav").style.boxShadow = "none";
  }
}
//function commented off as opening and closing dropdown menu on the click of the arrow is not required
/*
function openCheck(type) {
  if (document.getElementById("dropDown" + type + "").classList.contains("opened")) {
    dropDownClose(type)
  } else {
    dropDownOpen(type)
  }
}
*/
//function runs on hover of the the links with the hover enabled links
function dropDownOpen(type) {
  document.getElementById("dropDown" + type + "").classList.add("opened");
  //add transtion effect
  //not added with CSS as ruins the tranistion effect of the scrollposition function
  document.getElementById("mySidenav").style.transition = "0.3s";
  //disable scroll while dropdown menu is open in order to not cause issues
  disableScroll()
  //uses scroll function to apply the color that would be applied when it is scrolled passed the parrallax
  scrollFunction(true)
}
//function runs on mouse off of the the links with the hover enabled links
function dropDownClose(type) {
  document.getElementById("dropDown" + type + "").classList.remove("opened");
  scrollFunction()
  //re-enable scroll
  enableScroll()
  //removes animation after the animation time in order to disaper smoothly while also not affecting the scrollpostion function
  setTimeout(disableAni, 300);

  function disableAni() {
    document.getElementById("mySidenav").style.transition = "0s";
  }

}
//disables scroll
function disableScroll() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}
//re-enables scroll
function enableScroll() {
  window.onscroll = function () {
    scrollFunction()
  };
}