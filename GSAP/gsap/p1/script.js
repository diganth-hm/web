var tl = gsap.timeline()
tl.from("#nav h3",
    {
       y:-50,
        opacity:0,
        delay:0.2,
        duration:0.5,
     
    })
    tl.from("#main h1",
    {
        x:-500,
        opacity:0,
        duartion:0.8,
        stagger:0.5
      
     
    })
    tl.from("#bg img",
        {
           opacity:0,
           delay:0.1,
           

        })
    tl.from("#image1",{
         x:100,
         rotate:45,
         opacity:0,
         duration:0.9

    })
     tl.from("#image2",{
         x:100,
         rotate:45,
         opacity:0,
         duration:0.9

    })