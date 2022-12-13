const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Initialisation du slider, création de l'image

const initialisationSlider = () => {
    const image = document.createElement("img");
    image.setAttribute('id', 'image');
    image.alt = "Banner Print-it";
    image.style.width = '100%';
    image.style.height = '100%';
    image.src = banniere;

    let slide = document.getElementById('slide');
    slide.appendChild(image);
    slide.classList.add("showMe");

    let banner = document.getElementById('banner');
    const text = document.createElement("p");
    text.setAttribute('id', 'text');
    text.innerHTML = slides[i].tagLine;
    banner.appendChild(text);
    text.classList.add("showMe");

}

let i = 0;
let banniere = './assets/images/slideshow/' + slides[i].image;
let tagLine = slides[i].tagLine;

// Si slider à plus d'une image, création des points et des flèches

if (slides.length > 1) {
    for (let i = 0; i < slides.length; i++) {
        const dotElement = document.createElement("span");
        dotElement.classList.add("dot");
        const dots = document.querySelector(".dots");
        dots.appendChild(dotElement);

    }

    const arrowLeftElement = document.createElement("img");
    arrowLeftElement.src = "./assets/images/arrow_left.png";
    arrowLeftElement.alt = "Slide précédente";
    arrowLeftElement.classList.add("arrow","arrow_left");
    banner.appendChild(arrowLeftElement);

    const arrowRightElement = document.createElement("img");
    arrowRightElement.src = "./assets/images/arrow_right.png";
    arrowRightElement.alt = "Slide suivante";
    arrowRightElement.classList.add("arrow","arrow_right");
    banner.appendChild(arrowRightElement);

    const arrowleft = document.querySelector(".arrow_left");
    const arrowright = document.querySelector(".arrow_right");

    let dot = document.getElementsByClassName("dot");
    dot[i].classList.add("dot_selected");




    const slider = (banniere, tagLine, i) => {
        const image = document.getElementById('image');
        image.src = './assets/images/slideshow/' + banniere;
        const text = document.getElementById('text');
        text.innerHTML = tagLine;
        dot[i].classList.add("dot_selected");
    }



    initialisationSlider();

// Ajout du click sur flèche de gauche, image précédente

    arrowleft.addEventListener('click', function () {
        dot[i].classList.remove("dot_selected");
        slide.classList.remove("showMe");
        text.classList.remove("showMe");
        setTimeout(() => {
            if (i > 0) {
                i--;
            } else {
                i = slides.length - 1;
            }
            banniere = slides[i].image;
            tagLine = slides[i].tagLine;
            slider(banniere, tagLine, i);
            slide.classList.add("showMe"),
            text.classList.add("showMe");}, 700)
    });

// Ajout du click sur flèche de droite, image suivante

    arrowright.addEventListener('click', function () {
        dot[i].classList.remove("dot_selected");
        slide.classList.remove("showMe");
        text.classList.remove("showMe");
        setTimeout(() => {
                if (i < (slides.length - 1)) {
                    i++;
                } else {
                    i = 0;
                }
        banniere = slides[i].image;
        tagLine = slides[i].tagLine;
        slider(banniere, tagLine, i);
        slide.classList.add("showMe"),
        text.classList.add("showMe");}, 700)
    });

// Création d'un tableau contenant les points

let dotsArray = document.querySelectorAll(".dot");


// Ajout du click sur chaque point du tableau pour aller à l'image correspondante

    dotsArray.forEach((item, n) => {
            item.addEventListener('click', function () {
                dot[i].classList.remove("dot_selected");
                slide.classList.remove("showMe");
                text.classList.remove("showMe");
                setTimeout(() => {
                    i = n;
                    banniere = slides[i].image;
                    tagLine = slides[i].tagLine;
                    slider(banniere, tagLine, i);
                    slide.classList.add("showMe"),
                        text.classList.add("showMe");
                }, 700)
            })
    } );

// Si une seule image dans le slider

} else {
    initialisationSlider();
}