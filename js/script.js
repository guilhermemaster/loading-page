const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
const pp = document.querySelector(".pp");

function hidenNumber(){
    loadText.style.display = 'none';
}

let load = 0;
const blurring = () => {
    load++;
    if (load > 99) clearInterval(int);
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    if (load == 100) {        
        setTimeout(hidenNumber, 2000);
    }  
    
};

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) - (out_max - out_min)) / (in_max - in_min) + out_min;
}

let int = setInterval(blurring, 30);