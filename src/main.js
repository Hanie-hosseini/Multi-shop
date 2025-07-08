const slides = [
    {
        leftImage: "../asset/images/header/erring.jpg",
        rightImage: "../asset/images/header/model.jpg",
        title: "Stylish Jewelry",
        description: "Shine bright with timeless, sustainably crafted pieces made to dazzle."
    },
    {
        leftImage: "../asset/images/header/woman.jpg",
        rightImage: "../asset/images/header/man.jpg",
        title: "Elegant Fashion",
        description: "Discover your style with our exclusive clothing collection."
    },
    {
        leftImage: "../asset/images/header/wifi.jpg",
        rightImage: "../asset/images/header/watch.jpg",
        title: "Smart Electronics",
        description: "Upgrade your life with the latest in tech and innovation."
    }
];

let currentSlide = 0;
const slideInterval = 5000;

// DOM Elements
const mobileMenu= document.getElementById('Sidebar');
const container = document.querySelector('.slide-container');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const leftNumber = btnLeft.querySelector('span');
const rightNumber = btnRight.querySelector('span');

// Function to render mobileMenu
function toggleSidebar(){
  mobileMenu.classList.toggle("translate-x-full")  
}


// Function to render slide
function renderSlide(index) {
    const slide = slides[index];
    container.innerHTML = `
        <div class="hidden md:block relative">
            <img class="rounded-[250px] h-[400px] object-cover" src="${slide.leftImage}" alt="left" width="250px">
            <div class="absolute top-3 left-3 border-2 border-amber-50 border-solid w-12/12 h-[400px] rounded-[250px] animate-float"></div>
        </div>

        <div class="flex flex-col gap-2.5 md:gap-28 items-center text-amber-50 p-7 max-w-md text-center">
            <h1 class="text-3xl md:text-6xl md:leading-20 font-bold">${slide.title}</h1>
            <p class="text-lg leading-relaxed">${slide.description}</p>
            <a class="border-2 border-solid border-amber-50 py-3 px-5 hover:bg-prim hover:text-amber-50 transition-all duration-300" href="#">SHOP NOW</a>
        </div>

        <div class="animate-float">
            <img class="w-60 md:w-80 h-72 rounded-[100px] md:rounded-bl-[200px] md:rounded-br-[0] md:rounded-tr-[200px]  md:rounded-tl-[0] md:h-[500px] object-cover" src="${slide.rightImage}" alt="right" width="350px">
        </div>
    `;

    // Update slide numbers
    leftNumber.textContent = `0${(index === 0 ? slides.length : index)}`;
    rightNumber.textContent = `0${(index + 1 > slides.length ? 1 : index + 1)}`;
}

// Slide change events
btnLeft.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderSlide(currentSlide);
    resetAutoSlide();
});

btnRight.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide(currentSlide);
    resetAutoSlide();
});

// Auto slide
let autoSlide = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide(currentSlide);
}, slideInterval);

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        renderSlide(currentSlide);
    }, slideInterval);
}

// Initial render
renderSlide(currentSlide);