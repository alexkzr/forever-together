document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a")
      .not("#login")
      .on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("html, body").animate({
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
  $(".login").click(function () {
    $(".overlay").show();
  });
  $(".overlay").click(function () {
    $(".overlay").css("display", "none");
  });
  $(".popup-close").click(function () {
    $(".overlay").css("display", "none");
    $(".buyOverlay").css("display", "none");
  });
  $('.popup-form__button').click(function () {
    $(".buyOverlay").css("display", "none");
    $("#thankyou").css("display", "block");
  })
  /*Input mask*/

  $("#menu-button").click(function () {
    $(this).toggleClass("active");
    $("#line-1").toggleClass("active");
    $("#line-2").toggleClass("active");
    $("#line-3").toggleClass("active");
    $("#menu").slideToggle("slow");
  });
  /*Price choice */
  const orderButton1 = document.querySelector(".order1");
  const orderButton2 = document.querySelector(".order2");
  const orderButton3 = document.querySelector(".order3");
  const buyOverlay = document.querySelector(".buy-overlay");
  const cancelButton = document.querySelector(".popup-form__cancel");
  const close = document.querySelector('.popup-close');
  const orderButton = document.querySelectorAll(".order");
  const options = document.querySelectorAll(".option");

  const basic = document.querySelector(".basic");
  const silver = document.querySelector(".silver");
  const gold = document.querySelector(".gold");

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".buy-overlay").hide();
      $(".overlay").hide();
      $("#thankyou").hide();
      reset()
    }
  });

  for (let i = 0; i < options.length; i++) {
    orderButton[i].addEventListener("click", e => {

      options[i].checked = true;
      buyOverlay.style.display = "block";
    });
  }

  function reset() {
    console.log(length);
    for (i = 0; i < options.length; i++) {
      console.log(options[i].selectedIndex);
      options[i].checked = false;
    }
  }
  cancelButton.addEventListener("click", e => {
    e.preventDefault();
    buyOverlay.style.display = "none";
    reset();
  });
  close.addEventListener("click", e => {
    e.preventDefault();
    buyOverlay.style.display = "none";
    reset();
  });
  // buyOverlay.addEventListener("click", e => {
  //   e.preventDefault();
  //   buyOverlay.style.display = "none";
  //   reset();
  // });
  // orderButton1.addEventListener("click", e => {
  //   e.preventDefault();
  //   buyOverlay.style.display = "block";
  //   basic.setAttribute("selected", true);
  //   basic.value = "Basic - 1600р.";
  //   console.log(basic.value);
  // });
  // orderButton2.addEventListener("click", e => {
  //   e.preventDefault();
  //   buyOverlay.style.display = "block";
  //   silver.setAttribute("selected", true);
  //   silver.value = "Silver - 2500р.";
  //   console.log(silver.value);
  // });
  // orderButton3.addEventListener("click", e => {
  //   e.preventDefault();
  //   buyOverlay.style.display = "block";
  //   gold.setAttribute("selected", true);
  //   gold.value = "Gold - 4000р.";
  //   console.log(gold.value);
  // });
});