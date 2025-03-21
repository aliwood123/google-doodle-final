window.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline();

  // Ensure all paths are initially hidden
  gsap.set([".furnace", ".blowing", ".pulling-glass", ".molten", ".molten-shape", ".google"], { opacity: 0, visibility: "hidden" });

  // "Furnace" appears after a slight delay
  tl.to(".furnace", {
    duration: 1.5,
    opacity: 1,
    visibility: "visible",
    ease: "power2.inOut"
  }, "<")
  
  // "Furnace" fades out and "Blowing" fades in
  .to(".furnace", {
    duration: 2,
    opacity: 0,
    visibility: "hidden"
  })
  .to(".blowing", {
    duration: 2,
    opacity: 1,
    visibility: "visible"
  }, "<")
  
  // "Blowing" fades out and "Pulling" fades in
  .to(".blowing", {
    duration: 2,
    opacity: 0,
    visibility: "hidden"
  })
  .to(".pulling-glass", {
    duration: 2,
    opacity: 1,
    visibility: "visible"
  }, "<")
  
 .to(".pulling", {
    duration: 2,
    opacity: 0,
    visibility: "hidden"
  })
  .to([".molten", ".molten-shape"], {
    duration: 2,
    opacity: 1,
    visibility: "visible"
  }, "<")
  .to(".molten-shape", {
    duration: 3.5,
    filter: "drop-shadow(0px 0px 20px #FF4500) drop-shadow(0px 0px 15px orange)",
    ease: "power2.inOut"
  }, "<")
 
  .to(".molten-shape", {
    duration: 2.5,
    opacity: 0,
    fill: "transparent",
    onComplete: () => document.querySelector(".molten-shape").style.visibility = "hidden"
  }, ">")
  .to(".molten", {
    duration: 2.5,
    opacity: 0,
    fill: "transparent",
    onComplete: () => document.querySelectorAll('.molten').forEach(el => el.style.visibility = 'hidden')
  }, "<")

  // "Google" fades in, overlapping with the fade-out of molten elements
  .to(".google", {
    duration: 2.5,
    opacity: 1,
    visibility: "visible",
    ease: "power2.out"
  }, "-=2.5")
  });

