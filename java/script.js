particlesJS("particles-js", {
  particles: {
    number: { value: 78, density: { enable: true, value_area: 900 } },
    color: { value: ["#ffffff", "#f2c35b", "#8fd6ff"] },
    shape: { type: "circle" },
    opacity: { value: 0.62, random: true },
    size: { value: 3.8, random: true },
    line_linked: {
      enable: true,
      distance: 145,
      color: "#ffffff",
      opacity: 0.24,
      width: 1.2
    },
    move: {
      enable: true,
      speed: 2.1,
      direction: "none",
      random: true,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 180, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
