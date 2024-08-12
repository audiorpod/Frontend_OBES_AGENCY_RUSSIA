

// creating COUNTER -> Property : SET INTERVAL - set interval can be defined in one word that is (LOOP after particular interval )


var t1 = gsap.timeline()
t1.from(".line h1", {
    y:150,
    stagger:0.25, // stagger means one by one aiyaga 
    duration:0.6,
    delay:0.5,

});
t1.from("#line1-part1",{
    opacity:0,
    onStart: function(){
        var h5timer = document.querySelector("#line1-part1 h5")
var grow = 0 
setInterval(function(){
    if(grow<100){
       h5timer.innerHTML = grow++
    } else{
        h5timer.innerHTML = grow
    }
}, 30)

    }
    });

    t1.from('.line h2',{
        animationName:"anime",
        opacity:1,
    })

t1.to("#loader",{
    opacity:0,
    duration:0.2,
    delay: 3,
});
t1.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4,
});
t1.to("#loader", {
    display:"none", // display automatically gaiyab ho jaiyaga after some second 
});