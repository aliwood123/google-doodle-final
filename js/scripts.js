gsap.from(".bubble", {
    scale: .50,
    // transformOrigin: "25% 25%",
    duration: 3,
    repeat: -1,
    yoyo: true,
  })
  
  gsap.to("#furnace-pipe", {
    rotate: -2,
    duration: 2,
    repeat: -1,
    yoyo: true,
  })
  
  gsap.to("#tool", {
    rotate: 6,
    y: -2,
    duration: 1,
    repeat: -1,
    yoyo: true,
  })
  
  gsap.from(".ceiling-light", {
    fill: "#ED9906",
    delay: 4,
    repeat: -1,
    repeatDelay: 4,
    yoyo: true,
  })
  
  gsap.to("#furnace-flame", {
    // rotate: -3,
    x: 3,
    y:-1,
    duration: 2,
    scale: 1.05,
    repeat: -1,
    yoyo: true,
  })
