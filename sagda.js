var form = document.forms['myform']
var password =document.getElementById('pass')
var span = document.querySelector('span')
function Validation(e){
    if(password.value !== '3102003' ){
        var validepass=document.getElementById('validepass')
        validepass.style.display='inline'
        e.preventDefault()
        password.value="" 
    }
}
let myAudio = document.querySelector('#audio')
myAudio.play()
const video = document.createElement('video');

video.src = 'sagaVid.mp4';

// video.poster =
//   'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217';

video.autoplay = false;
video.controls = true;
video.muted = false;
video.height = 240; 
video.width = 320; 

const box = document.getElementById('box');

box.appendChild(video);
