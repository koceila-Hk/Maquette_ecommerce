// Compteur panier 

let cartAdd = document.getElementById('btnAdd');
let cartRm = document.getElementById('btnRm');
let nb = document.getElementById('nb');
let counter = parseInt(nb.innerText);

cartAdd.addEventListener('click', () => {
    counter += 1;
    nb.innerText = counter;
});

cartRm.addEventListener('click', () => {
    if (counter > 0) {
    counter -= 1;
    nb.innerText = counter;
    }
});

//footer year

const year = document.querySelector('.year');
let date = new Date();
let newYear = date.getFullYear();
year.innerHTML = newYear;

// ----------POP-UP-----------

let popUp = document.querySelector(".pop-up");

setTimeout(() => {
    popUp.style.display = "flex";
}, 2000); 

// ----------Close appear user email --------

let closeAppear = document.querySelector('.closeAppear');

closeAppear.addEventListener('click', () => {
    popUp.style.display = 'none';
});

//--------Escape --------

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        popUp.style.display = 'none';
    }
});

// ------Open nav--------

let nav = document.querySelector('.navBar');
console.log(nav);
let menu = document.querySelector('.openNav');
let menuEtat = false;

menu.addEventListener('click', () => {
    if (!menuEtat) {
        nav.style.display = 'flex';
        menuEtat = true;
    } else { 
        nav.style.display = 'none';
        menuEtat = false;
    }
});

// ------image principal---------

let othersImages = document.querySelectorAll('.rest-images img');
let mainImage = document.querySelector('.img-profil img');
console.log(mainImage);

othersImages.forEach(image => {
    image.addEventListener('mouseover', function() {
        mainImage.src = image.src;
    });
});

// ------img principal mobile --------

let arrowRight = document.querySelector('.arrow-right');
let arrowLeft = document.querySelector('.arrow-left');
let currentIndex = 0;

arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % othersImages.length;
    mainImage.src = othersImages[currentIndex].src;
});

arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + othersImages.length) % othersImages.length;
    mainImage.src = othersImages[currentIndex].src;
});


