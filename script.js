var crsr=document.querySelector("#cursur")
var blur=document.querySelector("#cursur-blur")

document.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x+30+"px";
  crsr.style.top=dets.y+"px";

  blur.style.left=dets.x-150+"px";
  blur.style.top=dets.y-150+"px";
})

gsap.to("#nav", {
    backgroundColor: "black",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        marker: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
});

gsap.to("#main", {
    backgroundColor: "#000", // corrected semi-colon to comma
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        marker: true,
        start: "top -30%",
        end: "top -100%",
        scrub: 2
    }
});

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    // Assuming `crsr` is defined somewhere in your code
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", function() {
    // Assuming `crsr` is defined somewhere in your code
    crsr.style.scale = 1;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "#95c11e";
  });
});


gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:0.4,
    scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 60%",
    end:"top 75%",
    scrub:2
    }

})

gsap.from(".card",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
    trigger:".card",
    scroller:"body",
    marker:true,
    start:"top 70%",
    end:"top 65%",
    scrub:2
    }

})