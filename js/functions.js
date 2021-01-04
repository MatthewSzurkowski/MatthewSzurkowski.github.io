
/*
// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
  var aboutMeOffsets = document.getElementById('about-me-wrapper').getBoundingClientRect();
  var aboutMeBot = aboutMeOffsets.bottom;
  console.log("Here is scroll pos:" + scroll_pos.toString());
  console.log("Here is the bottom:" + aboutMeBot.toString());
  if (scroll_pos > aboutMeBot - 300) {
      document.getElementById('about-me-wrapper').style.visibility = "visible";
      document.getElementById('about-me-wrapper').classList.add("animate__fadeInUp");
  }
}

//document.getElementsByTagName('html')[0].style.overflow = "visible";


document.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
*/