const reels = [
  {
    ismuted:true,
    username: "rahul_verma",
    likecount: 1240,
    islike: false,
    commentcount: 85,
    caption: "Morning vibes 🌄 #nature",
    video: "./v1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    sharecount: 32,
    isfollow: false
  },
  {
    ismuted:true,
    username: "priya_sharma",
    likecount: 5420,
    islike: true,
    commentcount: 210,
    caption: "Dance practice 💃🔥",
     video: "./v2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg",
    sharecount: 120,
    isfollow: true
  },
  {
    ismuted:true,
    username: "tech_with_aman",
    likecount: 3200,
    islike: false,
    commentcount: 150,
    caption: "JavaScript trick you must know 💻",
     video: "./v3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/13.jpg",
    sharecount: 75,
    isfollow: false
  },
  {
    ismuted:true,
    username: "foodie_riya",
    likecount: 8750,
    islike: true,
    commentcount: 430,
    caption: "Street food in Delhi 😍",
     video: "./v4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/14.jpg",
    sharecount: 300,
    isfollow: true
  },
  {
    ismuted:true,
    username: "fitness_raj",
    likecount: 2210,
    islike: false,
    commentcount: 95,
    caption: "Leg day grind 🏋️‍♂️",
     video: "./v5.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/15.jpg",
    sharecount: 60,
    isfollow: false
  },
  {
    ismuted:true,
    username: "travel_with_me",
    likecount: 9900,
    islike: true,
    commentcount: 520,
    caption: "Goa sunset 🌊🌅",
     video: "./v6.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/16.jpg",
    sharecount: 410,
    isfollow: true
  },
  {
    ismuted:true,
    username: "memes_hub",
    likecount: 15000,
    islike: false,
    commentcount: 1200,
    caption: "Relatable 😂 #funny",
     video: "./v7.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/17.jpg",
    sharecount: 900,
    isfollow: false
  },
  {
    ismuted:true,
    username: "art_by_sneha",
    likecount: 4300,
    islike: true,
    commentcount: 210,
    caption: "Sketching time ✏️",
     video: "./v8.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/18.jpg",
    sharecount: 140,
    isfollow: true
  },
  {
    ismuted:true,
    username: "gaming_pro",
    likecount: 7800,
    islike: false,
    commentcount: 600,
    caption: "Clutch moment 🎮🔥",
     video: "./v9.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/19.jpg",
    sharecount: 350,
    isfollow: false
  },
  {
    ismuted:true,
    username: "daily_quotes",
    likecount: 2600,
    islike: true,
    commentcount: 110,
    caption: "Stay positive ✨",
     video: "./v10.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/20.jpg",
    sharecount: 80,
    isfollow: true
  }
];
var AllReels = document.querySelector('.all-reels');


function addData(){
    let sum = '';
reels.forEach(function(elem ,idx){
    sum = sum + `<div class="reel">
                    <video autoplay ${elem.ismuted ?'muted':''} src="${elem.video}"></video>
                    <div class="mute" id=${idx}>
                    ${elem.ismuted ?'<i class="ri-volume-mute-line"></i>':'<i class="ri-volume-up-line"></i>'}
                     
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class="follow">${elem.isfollow ?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                        <h4 class="like-icon" >${elem.islike?'<i class="ri-heart-fill">':'<i class="ri-heart-line"></i>'}</i></h4>
                            <h6>${elem.likecount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon" ><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentcount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon" ><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.sharecount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon" ><i class="ri-more-2-line"></i></h4>
                            
                        </div>
                    </div>
                </div>`
})

AllReels.innerHTML = sum;
}

addData()

AllReels.addEventListener('click',function(dets){
    if(dets.target.className  == "like"){
      if(!reels[dets.target.id].islike){
      reels[dets.target.id].likecount++;
      reels[dets.target.id].islike = true
    }else{
      reels[dets.target.id].likecount--;
      reels[dets.target.id].islike = false
    }
    addData()
    }
    if(dets.target.className == 'follow'){
      if(! reels[dets.target.id].isfollow ){
        reels[dets.target.id].isfollow  = true
      }else{
        reels[dets.target.id].isfollow  = false
      }
      addData()
    }
    if(dets.target.className == 'mute'){
      if(! reels[dets.target.id].ismuted ){
        reels[dets.target.id].ismuted  = true
      }else{
        reels[dets.target.id].ismuted  = false
      }
      addData()
    }
    
})



