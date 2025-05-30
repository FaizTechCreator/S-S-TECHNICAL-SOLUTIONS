// Particles.js setup
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});

// Contact form alert
function contactAlert() {
  alert("Thank you for reaching out! We'll get back to you soon.");
  return false;
}
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded');
});
