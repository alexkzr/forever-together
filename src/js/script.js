document.addEventListener('DOMContentLoaded', () => {
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $('a').not('#login').on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== '') {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });
  $('.login').click(function () {
    $('.overlay').show()
  })
  $('.overlay').click(function () {
    $('.overlay').css('display', 'none')
  })
  $('.popup-close').click(function () {
    $('.overlay').css('display', 'none')
  })
  /*Input mask*/

  $("#menu-button").click(function () {
    $(this).toggleClass("active");
    $("#line-1").toggleClass("active");
    $("#line-2").toggleClass("active");
    $("#line-3").toggleClass("active");
    $("#menu").slideToggle("slow");
  });




});