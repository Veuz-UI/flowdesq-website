
//Animations
gsap.registerPlugin(ScrollTrigger);

  // // home about
  // gsap.from(".left-hm-about-in", {
  //   duration: 1,   
  //   x: -100,
  //   opacity: 0,
  //   stagger: 0.2,   
  //   scrollTrigger: {
  //     trigger: ".left-hm-about-in",  
  //     start: "top 80%",    
  //     end: "bottom 30%",    
  //     scrub: false,
  //     markers: false,
  //     toggleActions: "play none none reverse"
  //   }
  // });
  // gsap.from(".right-hm-about-video", {
  //   duration: 1,       
  //   x: 100,
  //   opacity: 0,
  //   stagger: 0.2,  
  //   scrollTrigger: {
  //     trigger: ".right-hm-about-video",    
  //     start: "top 80%",             
  //     end: "bottom 30%",             
  //     scrub: false,
  //     markers: false,
  //     toggleActions: "play none none reverse"
  //   }
  // });
  


//scroller-smooth
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 300)
})
gsap.ticker.lagSmoothing(0)
// close




