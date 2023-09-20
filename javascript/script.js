function mouseSair() {
    let elementoHome = document.getElementById("link-home");
    elementoHome.classList.add("mouseSaiu");
    setTimeout(() => {
        elementoHome.classList.remove("mouseSaiu");
    }, 300);
}

document.getElementById("link-home").addEventListener("mouseleave", mouseSair);

function mouseSairBelgica() {
    let elementoBelgica = document.getElementById("link-belgica");
    elementoBelgica.classList.add("saiuBelgica");
    setTimeout(() => {
        elementoBelgica.classList.remove("saiuBelgica");
    }, 300)
}

document.getElementById("link-belgica").addEventListener("mouseleave", mouseSairBelgica);

function sairCongo() {
    let elemento = document.getElementById("link-congo");
    elemento.classList.add("saiuCongo");

    setTimeout(() => {
        elemento.classList.remove("saiuCongo");
    }, 300);
}

document.getElementById("link-congo").addEventListener("mouseleave", sairCongo);

function sairCoreia() {
    let elementoCoreia = document.getElementById("link-coreia");
    elementoCoreia.classList.add("saiuCoreia");
    setTimeout(() => {
        elementoCoreia.classList.remove("saiuCoreia");
    }, 300);
}

document.getElementById("link-coreia").addEventListener("mouseleave", sairCoreia);

function sairCuba() {
    let elementoCuba = document.getElementById("link-cuba");
    elementoCuba.classList.add("saiuCuba");
    setTimeout(() => {
        elementoCuba.classList.remove("saiuCuba");
    }, 300);
}

document.getElementById("link-cuba").addEventListener("mouseleave", sairCuba);

function sairEua() {
    let elementoEua = document.getElementById("link-eua");
    elementoEua.classList.add("saiuEua");
    setTimeout(() => {
        elementoEua.classList.remove("saiuEua");
    }, 300);
}

document.getElementById("link-eua").addEventListener("mouseleave", sairEua);

function sairIsrael() {
    let elementoIsrael = document.getElementById("link-israel");
    elementoIsrael.classList.add("saiuIsrael");
    setTimeout(() =>  {
        elementoIsrael.classList.remove("saiuIsrael");
    }, 300);
}

document.getElementById("link-israel").addEventListener("mouseleave", sairIsrael);

function sairLaos() {
    let elementoLaos = document.getElementById("link-laos");
    elementoLaos.classList.add("saiuLaos");
    setTimeout(() => {
        elementoLaos.classList.remove("saiuLaos");
    }, 300);
}

document.getElementById("link-laos").addEventListener("mouseleave", sairLaos);

function sairRussia() {
    let elementoRussia = document.getElementById("link-russia");
    elementoRussia.classList.add("saiuRussia");
    setTimeout(() => {
        elementoRussia.classList.remove("saiuRussia");
    }, 300);
}

document.getElementById("link-russia").addEventListener("mouseleave", sairRussia);


function sairContato() {
    let elementoContato = document.getElementById("link-contato");
    elementoContato.classList.add("saiuContato");

    setTimeout(() => {
        elementoContato.classList.remove("saiuContato");
    }, 300);
}

document.getElementById("link-contato").addEventListener("mouseleave", sairContato);

function sairSobre() {
    let elementoSobre = document.getElementById("link-sobre");

    elementoSobre.classList.add("saiuSobre");

    setTimeout(() => {
        elementoSobre.classList.remove("saiuSobre");
    }, 300);
}

document.getElementById("link-sobre").addEventListener("mouseleave", sairSobre);