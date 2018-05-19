document.addEventListener("DOMContentLoaded", () => {
  /* Modal window script */
  const requestButton = document.getElementById("call-button");
  const requestButtonContacts = document.getElementsByClassName("call-button");
  const popup = document.querySelector(".popup-overlay");
  const closeButton = document.querySelector(".popup-close");
  const popupThanks = document.getElementById('thankyou');

  requestButton.addEventListener("click", e => {
    e.preventDefault();
    popup.style.display = "block";
  });
  for (let i = 0; i < requestButtonContacts.length; i++) {
    requestButtonContacts[i].addEventListener("click", e => {
      e.preventDefault();
      console.log('the button was clicked');
      popup.style.display = "block";
    });
  }

  closeButton.addEventListener("click", e => {
    e.preventDefault();
    popup.style.display = "none";
  });
  closeButton.addEventListener("click", e => {
    e.preventDefault();
    popupThanks.style.display = "none";
  });
  /* End Modal Window*/

  const submitButton = document.getElementsByClassName('submit');
  const modal = document.getElementById('thankyou');
  for (let i = 0; i < submitButton.length; i++) {
    submitButton[i].addEventListener('change', e => {
      e.preventDefault();
      modal.style.display = 'block';
    })
  }



  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }

  const slider = document.querySelector(".feedback-slider");

  slider.addEventListener("click", e => {
    e.preventDefault();
    const popupOverlay = document.querySelector(".feedback-popup-overlay");
    const sliderFeed = document.getElementsByClassName("slider-feed");
    const popup = document.querySelector(".feedback-popup");
    console.log(e.target.tagName);
    if (e.target.tagName == "IMG") {
      popupOverlay.style.display = "block";
      for (let i = 0; i < sliderFeed.length; i++) {
        sliderFeed[i].style.zIndex = "-2";
      }
      const imageSrc = e.target.src;
      const image = document.createElement("img");
      image.src = imageSrc;
      popup.appendChild(image);
      popupOverlay.addEventListener("click", e => {
        popupOverlay.style.display = "none";
        image.remove();
        for (let i = 0; i < sliderFeed.length; i++) {
          sliderFeed[i].style.zIndex = "99";
        }
      });
    }
  });
});