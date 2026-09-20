Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".magnet-target"); 

 var nav = document.querySelector("#nav")
 Shery.makeMagnet("#magnet-target"); //for hover
 
 window.addEventListener("scrolly",()=>{
    var scroll=window.scrollY
    console.log(typeof(scroll))
    if(scroll>=50){
        nav.style.position = 'fixed';
        nav.style.backgroundcolor ='gray'
    }
 })


 Shery.imageMasker(".mask-target" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Hacker boy",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.textAnimate(".text-target" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
    images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  });

  Shery.imageEffect(".img", {
    style: 2, //Select Style
    debug: true, // Debug Panel
    config: {
      /* Config made from debug panel */
    },
    preset: "./presets/wigglewobble.json",
  });

  Shery.imageEffect(".ak", {
    style: 6,
    debug: true,
    gooey: true,
  });


  
   // Get the image and audio elements
   //const playButton = document.getElementById('playButton');
   //const audioPlayer = document.getElementById('audioPlayer');

   // Add click event listener to the image
   //playButton.addEventListener('click', function() {
       // Play the audio
     //  audioPlayer.play();
 //  });//