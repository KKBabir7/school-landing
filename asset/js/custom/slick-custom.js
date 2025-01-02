$(document).ready(function () {
  if ($(".home-page-slider").length > 0) {
    $(".home-page-slider").slick({
      dots: false,
      infinite: false,
      autoplay: false,
      speed: 300,
      arrow: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,

            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,

            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});



document.addEventListener('DOMContentLoaded', function () {
  if ($(".day_slider").length > 0) {
    $(".day_slider").slick({
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 300,
      arrow: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1092,
          settings: {
            slidesToShow: 3,

            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,

            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 368,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  const progressBars = document.querySelectorAll('.progress-bar');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const progressBar = entry.target;
              const targetWidth = progressBar.getAttribute('aria-valuenow') + '%';
              progressBar.style.setProperty('--target-width', targetWidth);
              progressBar.classList.add('animated');
          } else {
              entry.target.classList.remove('animated');
          }
      });
  }, {
      threshold: 0.1
  });
  
  progressBars.forEach(progressBar => {
      observer.observe(progressBar);
  });

});

$(document).ready(function () {
  if ($(".teacher_slider_three").length > 0) {
    $(".teacher_slider_three").slick({
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 300,
      arrow: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1399,
          settings: {
            slidesToShow: 4,

            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,

            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 576,
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
      ],
    });
  }
});

$(document).ready(function () {
  if ($(".teacher_features_slider").length > 0) {
    $(".teacher_features_slider").slick({
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 300,
      arrow: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,

            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,

            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 368,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

$(document).ready(function () {
  if ($(".review_slider").length > 0) {
    $(".review_slider").slick({
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 300,
      arrow: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,

            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,

            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

$(document).ready(function () {
  if ($(".price_packages_slider").length > 0) {
    $(".price_packages_slider").slick({
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 300,
      arrow: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,

            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,

            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

$(document).ready(function () {
  if ($(".lectures_slider").length > 0) {
    $(".lectures_slider").slick({
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 300,
      arrow: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,

            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,

            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

$(document).ready(function () {
  if ($(".booking_now_slider").length > 0) {
    $(".booking_now_slider").slick({
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 300,
      arrow: false,
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,

      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,

            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,

            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

$(document).ready(function () {
  if ($(".available__timing__slider").length > 0) {
    $(".available__timing__slider").slick({
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 300,
      arrow: false,
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,

      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,

            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,

            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

$(document).ready(function () {
  if ($(".price__packages__slider").length > 0) {
    $(".price__packages__slider").slick({
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 300,
      arrow: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,

            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,

            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});
