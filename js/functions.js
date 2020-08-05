function logoGone(){
    setTimeout(function(){
        document.getElementById("logo").style.visibility = "hidden";
    }, 2000);

    setTimeout(function(){
        document.getElementById("hideBody").style.visibility = "visible";
    }, 2500);
}

function backToTop(){
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

/*

window.onscroll = function() {
  var y = window.scrollY;
  if (y > 200) {
    document.getElementById("projSection").className = 'profileChange show';
  } else {
    document.getElementById("projSection").className = 'profileChange hide';
  }
}

*/

