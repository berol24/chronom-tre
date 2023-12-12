//les variables dont on a besoin
let sp = document.querySelectorAll("span");
let btn_start = document.querySelector('#start');
let btn_stop = document.querySelector('#stop');
let btn_reset = document.querySelector('#reset');
let t;
let ms = 0;
let s = 0;
let mn = 0;
let h = 0;


// mettre en place le compteur 

function update_chrono() {
    ms += 1
    if (ms == 10) {
        ms = 1;
        s += 1;
    }
    if (s == 60) {
        s = 0;
        mn += 1
    }
    if (mn == 60) {
        mn = 0;
        h += 1
    }
    // insertion des valeurs dans les span
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min"
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

//mettre en place la funtion du bouton start

btn_start.addEventListener('click', function start() {
    //cette ligne de code execute la function update_chrono
    // tous les 100ms
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true;
})

//mettre en place la funtion du bouton stop

btn_stop.addEventListener('click', function stop() {
    clearInterval(t) //suppression de l'intervalle t que nous avons creer
    btn_start.disabled = false

})

//mettre en place la funtion du bouton reset


btn_reset.addEventListener('click', function() {
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
})