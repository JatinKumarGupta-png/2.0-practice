 addEventListener('mousemove',function(e){
    console.log(e.clientX ,e.clientY);
    this.document.body.style.setProperty("--x",e.clientX +'px');
    this.document.body.style.setProperty('--y',e.clientY +'px');
 })

var btn = document.querySelector("button");

function createVideo(){
    var video = document.createElement("video");

    video.src = "./video.mp4";
    video.autoplay = true;
    video.muted = true;   
    video.loop = true;

    video.style.position = "fixed";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.zIndex = "-1";

    document.body.appendChild(video);

    return video;   
}

btn.addEventListener("click", function(){
    var myVideo = createVideo();

    myVideo.muted = false;   
    myVideo.play();          

    btn.remove();
});