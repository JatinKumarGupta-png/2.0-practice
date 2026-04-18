let btn = document.querySelector("button");
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');
let card = document.querySelector('.card');

let grow = 0;
btn.addEventListener('click', function(){
    btn.style.pointerEvents = 'none';
    let num = Math.floor(Math.random()*50)+50;
    // let img = document.createElement("img");
    // img.src = "https://images.pexels.com/photos/36815599/pexels-photo-36815599.jpeg";
    // card.appendChild(img);
    // card.style.opacity = 1;
    let int = setInterval(function(){
        grow++;
        h2.innerHTML = grow +'%';
        inner.style.width = grow + '%';
    },num);
     console.log(num);
     setTimeout(function(){
        clearInterval(int);
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.8;
     },num*100);
})
