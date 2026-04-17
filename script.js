var btn = document.querySelector("button");
var main = document.querySelector('main');
// const gifs = [
//   "https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif", // neon swirl
//   "https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif", // colorful waves
//   "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif", // gradient motion
//   "https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif", // trippy colors
//   "https://media.giphy.com/media/3o6ZsZQd7d0G0RrXzi/giphy.gif", // 3d cube
//   "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif", // neon tunnel
//   "https://media.giphy.com/media/3o7aCTfyhYawdOXcFW/giphy.gif", // colorful loop
//   "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif", // glowing particles
//   "https://media.giphy.com/media/3oEjHGr1Fhz0kyv8Ig/giphy.gif", // rainbow motion
//   "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif", // glitch effect
//   "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif", // 3d animation
//   "https://media.giphy.com/media/3o7TKsQ8rR6lLqz9nG/giphy.gif", // abstract neon
//   "https://media.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif", // 3d spin
//   "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif", // colorful spiral
//   "https://media.giphy.com/media/l0MYyda4pWnqZ1vYk/giphy.gif", // light burst
//   "https://media.giphy.com/media/3o6Zt7bA5b0l8P1JDi/giphy.gif", // neon rings
//   "https://media.giphy.com/media/xT9Igqz02TEWXq0wMw/giphy.gif", // colorful grid
//   "https://media.giphy.com/media/3o7TKz8wQzWfXq6Xqg/giphy.gif", // abstract 3d
//   "https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif", // glow wave
//   "https://media.giphy.com/media/3o7TKO2u7F7p4bKpK0/giphy.gif"  // neon explosion
// ];
var imgUrl = "https://i.pinimg.com/originals/1a/b1/51/1ab15107a274c54e8b929c128b6ffd71.gif";

btn.addEventListener('mousemove', function(){
    var img = document.createElement('img');
    var size = Math.floor(Math.random() * 10)+8 ;
    var x = Math.random()*100;
    var y = Math.random()*100;
    var deg = Math.floor(Math.random()*360);
    // var img = Math.floor(Math.random() * img);
    img.src = imgUrl;

    img.style.left = x + '%';
    img.style.top= y +'%';
    img.style.transform = `rotate( ${deg}deg)`;
    
    img.style.height = size + 'px';
    img.style.width = size + 'px';
    img.style.borderRadius = "50%";
    img.style.position ='absolute'
    // img.style.backgroundColor = `img${img}`;
    img.style.objectFit = "cover";

    main.appendChild(img);
})