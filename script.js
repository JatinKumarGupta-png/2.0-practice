

let iteration = 0;
const p = document.querySelector('p');
const originalText = p.innerText;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const chars = characters.split('');

let interval; 



p.addEventListener('mouseenter', function () {
    iteration = 0; 

    clearInterval(interval); 

    interval = setInterval(() => {
        let str = originalText.split('').map((char, idx) => {
            if (idx < iteration) {
                return char;
            }
            return chars[Math.floor(Math.random() * chars.length)];
        }).join('');

        p.innerText = str;

        if (iteration >= originalText.length) {
            clearInterval(interval); 
        }

        iteration += 0.5;
    }, 40);
});
p.addEventListener('mouseleave', () => {
    clearInterval(interval);
    p.innerText = text;
});

document.addEventListener('mousemove', function(e){
    document.body.style.setProperty("--x", e.clientX + 'px');
    document.body.style.setProperty("--y", e.clientY + 'px');
});

