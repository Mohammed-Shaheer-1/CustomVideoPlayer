let playbtn=document.getElementById('play-btn')
let video=document.querySelector(".video")
let progressbar=document.querySelector('.progress-bar')
let progressrange=document.querySelector('.progress-range')


let isvideoplaying=false;

function videoplayORpause(){
    
    if(!isvideoplaying){
        video.play()
        console.log("play");
        isvideoplaying=true
         playbtn.classList.replace('fa-play','fa-pause')
    }else{
        video.pause()
        console.log("pause");
        isvideoplaying=false
     playbtn.classList.replace('fa-pause','fa-play')
    }  
}
function updateprogressbar(event){

progressbar.style.cssText=`width:${(event.target.currentTime/this.duration)*100}%`
}
function updateprogressrange(event){
// let width=progressrange.getBoundingClientRect()


let currrentpoint=event.offsetX

let progressbarwidth=this.clientWidth


let currentrange=(currrentpoint/progressbarwidth)*video.duration
// console.log(currentrange);
video.currentTime=currentrange

}

playbtn.addEventListener('click',videoplayORpause)
video.addEventListener('click',videoplayORpause)
video.addEventListener("timeupdate",updateprogressbar)
progressrange.addEventListener('click',updateprogressrange)

var player=video('videoPlayer',{
    autoplay:MutationRecord
})



// How do you pause an html5 video with the spacebar using e.key? There's something off about the logic...
// video.on('keydown',function(e){
//     if(e.keyCode === 32) {
//         let isvideoplayingg=false
//         if(isvideoplayingg == false){
//             video.play()

//         }else{
//             if(isvideoplayingg==true){
//                 video.pause()
//             }
//         }
//     }
// })

// $( document ).on( 'keydown', function ( e ) {
//             if ( e.keyCode === 32 ) {
//                 if (video.paused == true) {
//                     // Play the video
//                     video.play();
//                 }else{
//                     if(video.play == true){
//                     video.pause();
//                     }
//                 }
//             }
//         });

// inp.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
      
      
//       inp.focus()
//       inp.value=""
//     }
// });