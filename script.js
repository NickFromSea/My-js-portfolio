AOS.init({
    duration:2000,
});

particlesJS("particles-js", {
 particles: {
  number: {
   value: 80,
   density: {
    enable: true,
    value_area: 800,
   },
  },
  color: {
   value: "#ffffff",
  },
  shape: {
   type: "circle",
   stroke: {
    width: 0,
    color: "#000000",
   },
   polygon: {
    nb_sides: 5,
   },
   image: {
    src: "img/github.svg",
    width: 100,
    height: 100,
   },
  },
  opacity: {
   value: 0.5,
   random: false,
   anim: {
    enable: false,
    speed: 1,
    opacity_min: 0.1,
    sync: false,
   },
  },
  size: {
   value: 2,
   random: true,
   anim: {
    enable: false,
    speed: 40,
    size_min: 0.1,
    sync: false,
   },
  },
  line_linked: {
   enable: true,
   distance: 200,
   color: "#ffffff",
   opacity: 0.4,
   width: 1,
  },
  move: {
   enable: true,
   speed: 3,
   direction: "none",
   random: false,
   straight: false,
   out_mode: "out",
   attract: {
    enable: false,
    rotateX: 600,
    rotateY: 1200,
   },
  },
 },
 interactivity: {
  detect_on: "canvas",
  events: {
   onhover: {
    enable: true,
    mode: "repulse",
   },
   onclick: {
    enable: true,
    mode: "push",
   },
   resize: true,
  },
  modes: {
   grab: {
    distance: 400,
    line_linked: {
     opacity: 1,
    },
   },
   bubble: {
    distance: 400,
    size: 40,
    duration: 2,
    opacity: 8,
    speed: 3,
   },
   repulse: {
    distance: 150,
   },
   push: {
    particles_nb: 4,
   },
   remove: {
    particles_nb: 2,
   },
  },
 },
 retina_detect: true,
 config_demo: {
  hide_card: false,
  background_color: "#b61924",
  background_image: "",
  background_position: "50% 50%",
  background_repeat: "no-repeat",
  background_size: "cover",
 },
});

gsap.from(".name_header", { duration: 3, y: 200, opacity:0, scale:3 });
gsap.from(".name", { duration: 3, opacity:0, scale:4 });
// gsap.from(".second", { duration: 3, opacity: 0 });
// gsap.from(".third", { duration: 3, x: 200, opacity: 0 });

// gsap.from(".project", { duration: 2, opacity: 0, stagger: 1 });
// gsap.from(".contact_header", { duration: 3, opacity: 0, scale: 2 });
// gsap.from(".social_net", { duration: 1, x: -200, opacity: 0 });
// gsap.from(".message", { duration: 1, x: 200, opacity: 0 });


