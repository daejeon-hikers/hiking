var slideIndex = 1;
showDivs(slideIndex);

function nextdiv(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slidercontents");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "inline-block";
  var sliderHeight = x[slideIndex - 1].offsetHeight
  document.getElementById("leftbtn").style.height = "" + sliderHeight + "px"
  document.getElementById("rightbtn").style.height = "" + sliderHeight + "px"
}