
gsap.from("#page1 #circle",{
    scale:0,
    delay:0.9,
    duration:2,
    rotate:720
})

gsap.from("#page2 #circle",{
    scale:0,
    delay:0.9,
    duration:2,
    rotate:720,
    trigger:"#psge2 #circle",
    scroller:"body",

  
  
    
})
gsap.from("#page3 #circle",{
    scale:0,
    delay:0.9,
    duration:2,
    rotate:720
})