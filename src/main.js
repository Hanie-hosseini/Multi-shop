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
const mobileMenu = document.getElementById('Sidebar');
const container = document.querySelector('.slide-container');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const leftNumber = btnLeft.querySelector('span');
const rightNumber = btnRight.querySelector('span');

// Function to render mobileMenu
function toggleSidebar() {
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

//render jewelry section

fetch("https://fakestoreapi.com/products/category/jewelery")
    .then(res => res.json())
    .then(json => renderjewelrysection(json))
    .catch(err => alert(err))
function renderjewelrysection(items) {
    const container = document.getElementById("jewelry-container")
    const template = items.map(item => {
        return `
            <div class="group ">
                <div
                    class="relative bg-white overflow-hidden shadow-lg aspect-[3/4] rounded-md transition-[border-radius] duration-1000 ease-in-out rounded-t-[200px]">
                    <img src="${item.image}" alt="jewelry"
                        class="w-full h-full object-contain transition-[filter,border-radius] duration-1000 ease-in-out rounded-t-[200px]" />

                    <div
                        class="absolute inset-0 pointer-events-none transition-[border-radius] duration-1000 ease-in-out rounded-md rounded-t-[200px]">
                    </div>

                   
                    <div class="absolute inset-0 flex gap-4 items-end justify-center pb-4">

                        <!-- icon1-->
                        <div class="relative group/icon">
                            <span
                                class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/icon:opacity-100 transition-all duration-300 text-nowrap">
                                Add to Cart
                            </span>
                            <img class="p-1.5 bg-prim rounded-4xl cursor-pointer opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100"
                                src="../asset/images/icon/shopping-basket-blank-svgrepo-com.svg" alt="shoppping"
                                width="40px">
                        </div>

                        <!-- icon2-->
                        <div class="relative group/icon">
                            <span
                                class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/icon:opacity-100 transition-all duration-300 text-nowrap">
                                Add to wishlist
                            </span>
                            <img class="p-1.5 bg-prim rounded-4xl cursor-pointer opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300"
                                src="../asset/images/icon/like-black.svg" alt="like" width="40px">
                        </div>

                        <!-- icon3-->
                        <div class="relative group/icon">
                            <span
                                class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/icon:opacity-100 transition-all duration-300 text-nowrap">
                                Quick View
                            </span>
                            <img class="p-1.5 bg-prim rounded-4xl cursor-pointer opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-500"
                                src="../asset/images/icon/eye-open-svgrepo-com.svg" alt="visit" width="40px">
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-between md:py-5">
                    <span class="text-prim">GIFTS SET</span>
                    <span class="font-bold">$ ${item.price}</span>
                    <h3 class="py-2">${item.title}</h3>
                   
               </div>
            </div>
    `
    }).join("");
    container.innerHTML = template;
}

fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    .then(res => res.json())
    .then(json => rendermensection(json))
    .catch(err => alert(err))
    function rendermensection(items) {
    const container = document.getElementById("men-container")
    const template = items.map(item => {
        return `
            <div class="group ">
                <div
                    class="relative bg-white overflow-hidden shadow-lg aspect-[3/4] rounded-md transition-[border-radius] duration-1000 ease-in-out rounded-t-[200px]">
                    <img src="${item.image}" alt="Men's Clothing"
                        class="w-full h-full object-contain transition-[filter,border-radius] duration-1000 ease-in-out rounded-t-[200px]" />

                    <div
                        class="absolute inset-0 pointer-events-none transition-[border-radius] duration-1000 ease-in-out rounded-md rounded-t-[200px]">
                    </div>

                   
                    <div class="absolute inset-0 flex gap-4 items-end justify-center pb-4">

                        <!-- icon1-->
                        <div class="relative group/icon">
                            <span
                                class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/icon:opacity-100 transition-all duration-300 text-nowrap">
                                Add to Cart
                            </span>
                            <img class="p-1.5 bg-prim rounded-4xl cursor-pointer opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100"
                                src="../asset/images/icon/shopping-basket-blank-svgrepo-com.svg" alt="shoppping"
                                width="40px">
                        </div>

                        <!-- icon2-->
                        <div class="relative group/icon">
                            <span
                                class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/icon:opacity-100 transition-all duration-300 text-nowrap">
                                Add to wishlist
                            </span>
                            <img class="p-1.5 bg-prim rounded-4xl cursor-pointer opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300"
                                src="../asset/images/icon/like-black.svg" alt="like" width="40px">
                        </div>

                        <!-- icon3-->
                        <div class="relative group/icon">
                            <span
                                class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/icon:opacity-100 transition-all duration-300 text-nowrap">
                                Quick View
                            </span>
                            <img class="p-1.5 bg-prim rounded-4xl cursor-pointer opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-500"
                                src="../asset/images/icon/eye-open-svgrepo-com.svg" alt="visit" width="40px">
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-between md:py-5">
                    <span class="text-prim">Men's Clothing</span>
                    <span class="font-bold">$ ${item.price}</span>
                    <h3 class="py-2">${item.title}</h3>
                   
               </div>
            </div>
    `
    }).join("");
    container.innerHTML = template;
}