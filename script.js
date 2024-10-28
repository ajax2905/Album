const ftsd = document.querySelectorAll(".fts div");
const verct = document.querySelector(".verct");
const pimg = document.querySelector("#pimg");
const fch = document.querySelector("#fch");
const volt = document.querySelector("#volt");
const prox = document.querySelector("#prox");
const zoom = document.querySelector(".zoom");

let im = 0;

for (let i = 0; i < ftsd.length; i++) {
    ftsd[i].addEventListener("click", () =>{
        verct.style.display = "flex";
        setTimeout(() => {
        verct.style.opacity = "1";
        }, 10)
        pimg.src = `i${i + 1}.jpg`;
        im = i + 1;
        pimg.addEventListener("mouseover", () => {
            zoom.style.display = "block";
            zoom.style.background = `url(i${i + 1}.jpg)`;
        });
    })
}
fch.addEventListener("click", () =>{
    verct.style.opacity = "0";
    setTimeout(() => {
    verct.style.display = "none";
    }, 300)
})

prox.addEventListener("click", () =>{
    im++;
    if (im > ftsd.length) {
    im = 1;
    }
    pimg.src = `i${im}.jpg`;
})

volt.addEventListener("click", () =>{
    im--;
    if (im < 1) {
    im += ftsd.length;
    }
    pimg.src = `i${im}.jpg`;
})

pimg.addEventListener("mousemove", flw);

pimg.addEventListener("mouseout", () => {
    zoom.style.display = "none";
});

function flw(e) {
    zoom.style.background = `url(${pimg.src})`;
    let x = e.offsetX;
    let y = e.offsetY;
    zoom.style.left = `${x + 150}px`;
    zoom.style.top = `${y}px`;
    zoome(e);
}

function zoome(e){
    if(e.offsetX) {offsetX = e.offsetX;}
    if(e.offsetY) {offsetY = e.offsetY;}
    x = offsetX/pimg.offsetWidth*100;
    y = offsetY/pimg.offsetHeight*100;
    zoom.style.backgroundPosition = x + '% ' + y + '%';
  }