$( document ).ready(function() {
  //Slideshow
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
  },  3000);

  //Smooth Scrolling with jQuery

  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

$( document ).ready(function() {
  // Collapsing menu.
  function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')

    navs.forEach(nav => nav.classList.toggle('navbar-toggleshow'));
    console.log('toggle that shit');
  };

  document.querySelector('.navbar-link-toggle').addEventListener('click', classToggle);
});

//Menu to close automatically.
document.addEventListener("DOMContentLoaded", function(event) {
  function hideList() {
    var element = document.getElementById('navbar-items');
    element.classList.remove('navbar-toggleshow');
    console.log('remove that shit.');
}

var element = document.getElementById('navbar-items');
element.addEventListener("click", hideList);
console.log(element);
});
