VanillaTilt.init(document.querySelector(".tilt"), {
    max: 10,        // max tilt angle (deg)
    speed: 1000,     // how fast it tilts
    glare: true,    // light glare effect
    "max-glare": 0.3,
    perspective: 1000,    // depth effect
    scale: 1.05,
    gyroscope: true
})