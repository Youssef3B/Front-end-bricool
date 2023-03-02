// ------------------------------------Slick----------------------------------------------

$(".slick_slide").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="bx bx-left-arrow-alt left_arrow">',
  nextArrow: '<i class="bx bx-right-arrow-alt right_arrow">',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// ------------------------------------END-Slick----------------------------------------------
// ------------------------------------Start Faq----------------------------------------------
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", (event) => {
    const currentAccordionItem = event.currentTarget.parentNode;
    const isAccordionItemActive =
      currentAccordionItem.classList.contains("active");
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
      if (item !== currentAccordionItem) {
        item.classList.remove("active");
      }
    });

    if (!isAccordionItemActive) {
      currentAccordionItem.classList.add("active");
    }
  });
});
// ------------------------------------End Faq----------------------------------------------
// -----------------------------------Start checkbox----------------------------------------------
function handleCheckboxClick(clickedCheckbox) {
  // Get all checkboxes in the group
  var checkboxes = document.getElementsByName("choice");

  // Uncheck all checkboxes except the clicked one
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== clickedCheckbox) {
      checkboxes[i].checked = false;
    }
  }
}
// -----------------------------------End checkbox----------------------------------------------
// -----------------------------------Gallery carousel----------------------------------------------
var slideIndex = 1;
showSlide(slideIndex);

function changeImage(n) {
  showSlide((slideIndex = n + 1));
}

function prevSlide() {
  showSlide((slideIndex -= 1));
}

function nextSlide() {
  showSlide((slideIndex += 1));
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("img-thumbnail");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}

// -----------------------------------end carousel----------------------------------------------
