import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
var splide = new Splide("#slider2", {
  perPage: 5,
  gap: "-20rem",
  type: "loop",

  autoScroll: {
    speed: -1,

    pauseOnHover: false,
  },

  breakpoints: {
    1024: {
      perPage: 5,
      gap: "-15rem",
      height: "10rem",
    },

    768: {
      perPage: 4,
      gap: "-10rem",
      height: "10rem",
    },

    992: {
      perPage: 4,
      gap: "-10rem",
      height: "8rem",
    },

    640: {
      perPage: 4,
      gap: "-10rem",
      height: "8rem",
    },

    576: {
      perPage: 4,
      gap: "-10rem",
      height: "8rem",
    },
    480: {
      perPage: 3,
      gap: "1rem",
      height: "10rem",
    },
  },
});

splide.mount({ AutoScroll });

var splide = new Splide("#slider1", {
  perPage: 5,
  type : 'loop',
  gap: 20,
  // autoHeight: true,
   autoScroll: {
     speed: 1,
     pauseOnHover: false,
   },
  breakpoints: {
   

     1024: {
       perPage: 4,
      },

    768: {
       perPage: 3,
      },
   
    576: {
      perPage: 2,
      },
    480: {
       perPage: 2,
      },
    },
});

splide.mount({ AutoScroll });
