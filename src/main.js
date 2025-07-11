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
const root = document.getElementById('root')

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

//render men section

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


//render men-page
function handleMenpageClick(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    history.pushState({}, "", href)
    checkState()
}


function renderMenPage() {
    root.innerHTML = `
    <div class="flex items-center justify-center h-screen bg-gray-100 dark:bg-teal-900">
        <div class="relative w-20 h-20">
            <div class="absolute inset-0 rounded-full border-4 border-t-transparent border-prim animate-spin"></div>
            <span class="absolute inset-0 flex items-center justify-center text-sm font-semibold text-prim dark:text-amber-400">
             Loading...
            </span>
        </div>
    </div>`;
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        .then(res => res.json())
        .then(json => renderMenData(json))
        .catch(err => alert(err))

    function renderMenData(data) {
        const template = data.map(item => {
            return `
            <div class="group ">
                <div
                    class="relative bg-white overflow-hidden shadow-lg aspect-[3/4] rounded-md transition-[border-radius] duration-1000 ease-in-out rounded-t-[200px]">
                    <img src="${item.image}" alt="Men's Clothing"
                        class="w-full h-full object-contain transition-[filter,border-radius] duration-1000 ease-in-out rounded-t-[200px]" />
                     
                    <div
                        class="absolute inset-0 pointer-events-none transition-[border-radius] duration-1000 ease-in-out rounded-md rounded-t-[200px]">
                    </div>

                   
                    <div class="absolute inset-0 flex gap-3 items-end justify-center pb-4">
                        <span class="text-gray-950 font-bold bg-prim rounded-2xl p-1">${item.rating.rate}</span>
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
                <div class="flex flex-col justify-between md:py-5 text-center">
                    <span class="text-prim">${item.category}</span>
                    
                    <span class="font-bold ">$ ${item.price}</span>
                    <h3 class="py-2 text-gray-700">${item.title}</h3>
                    
                   
               </div>
            </div>

            `
        }).join("");
        const container = `
        
        <!--mobile container-->
                <div class="flex justify-between items-center md:hidden p-8 bg-gray-900 max-w-screen-2xl mx-auto relative">
                    <div class="flex items-center gap-4 relative">
                    <img src="../asset/images/icon/3.png" alt="logo" width="100px">
                    <h2 class="text-logo absolute left-14 top-10 text-[18px] w-[50px] font-semibold">A R O</h2>
                </div>
                    <div onclick="toggleSidebar()"><img src="../asset/images/icon/bar.svg" alt="iconbar" width="44px">
                    </div>
                </div>

                <div id="Sidebar"
                    class="fixed top-0 right-0 translate-x-full w-10/10 shadow-xl duration-1000 bg-amber-50 flex justify-between items-start  z-30 rounded-2xl ">
                    <div class="px-4 mt-28 mb-12">
                        <ul>
                            <li class="cursor-pointer hover:text-prim transition-all duration-300 mb-2">
                                <a onclick="handleMenpageClick()" href="/men">
                                    Men's Clothing
                                </a>
                            </li>
                            <li class="cursor-pointer hover:text-prim transition-all duration-300 mb-2">
                                <a onclick="handleWomenpageClick(event)" href="/women">
                                    Women's Clothing
                                </a>
                            </li>
                            <li class="cursor-pointer hover:text-prim transition-all duration-300 mb-2">
                                <a onclick="handleJewelrypageClick(event)" href="/jewelry">
                                    Jewelry
                                </a>
                            </li>
                            <li class="cursor-pointer hover:text-prim transition-all duration-300 mb-2">
                                <a onclick="handleElectronicspageClick(event)" href="/electronics">
                                    Electronics
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img class="p-0.5 cursor-pointer shadow-2xl mt-4 mr-6" src="../asset/images/icon/cancel.svg"
                        alt="cancel" width="24px" onclick="toggleSidebar()">
                </div>

                <!--desktop container-->
                <div class="hidden lg:flex justify-between p-6 items-center bg-gray-900 max-w-screen-2xl mx-auto relative">
                    <div class="flex items-center">
                        <img src="../asset/images/icon/3.png" alt="logo" width="80px">
                        <h2 class="text-amber-50 absolute left-16">A R O</h2>
                    </div>

                    <nav>
                        <ul class="flex text-amber-50 gap-5">
                            <li class="group relative cursor-pointer flex gap-0.5 items-center">
                                HOME
                                <img src="../asset/images/icon/arrow.svg" alt="arrow" width="12px">
                                <span
                                    class="absolute left-0 -bottom-1 h-0.5 w-0 bg-prim transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li class="group relative cursor-pointer flex gap-0.5 items-center">
                                SHOP
                                <img src="../asset/images/icon/arrow.svg" alt="arrow" width="12px">
                                <span
                                    class="absolute left-0 -bottom-1 h-0.5 w-0 bg-prim transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li class="group relative cursor-pointer flex gap-0.5 items-center">
                                PRODUCT
                                <img src="../asset/images/icon/arrow.svg" alt="arrow" width="12px">
                                <span
                                    class="absolute left-0 -bottom-1 h-0.5 w-0 bg-prim transition-all duration-300 group-hover:w-full"></span>
                                <div
                                    class="hidden group-hover:block bg-amber-50 text-gray-800 absolute z-30 w-44  top-7 left-0 transition-all duration-300">
                                    <ul class="text-center p-4 ">
                                        <li class="hover:text-prim hover:underline">
                                            <a onclick="handleElectronicspageClick(event)" href="/electronics">
                                                Electronics
                                            </a>
                                        </li>
                                        <li class="hover:text-prim hover:underline">
                                            <a onclick="handleJewelrypageClick(event)" href="/jewelry">
                                                Jewelry
                                            </a>
                                        </li>
                                        <li class="hover:text-prim hover:underline">
                                            <a onclick="handleWomenpageClick(event)" href="/women">Women's Clothing
                                            </a>
                                        </li>
                                        <li class="hover:text-prim hover:underline">
                                            <a onclick="handleMenpageClick(event)" href="/men">
                                                Men's Clothing
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="group relative cursor-pointer flex gap-0.5 items-center">
                                BLOG
                                <img src="../asset/images/icon/arrow.svg" alt="arrow" width="12px">
                                <span
                                    class="absolute left-0 -bottom-1 h-0.5 w-0 bg-prim transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li class="group relative cursor-pointer flex gap-0.5 items-center">
                                PAGES
                                <img src="../asset/images/icon/arrow.svg" alt="arrow" width="12px">
                                <span
                                    class="absolute left-0 -bottom-1 h-0.5 w-0 bg-prim transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li class="group relative cursor-pointer flex gap-0.5 items-center">
                                CONTACT
                                <img src="../asset/images/icon/arrow.svg" alt="arrow" width="12px">
                                <span
                                    class="absolute left-0 -bottom-1 h-0.5 w-0 bg-prim transition-all duration-300 group-hover:w-full"></span>
                                <div
                                    class="hidden group-hover:block bg-amber-50 text-gray-800 absolute z-30 w-44  top-7 left-0 transition-all duration-1000">
                                    <ul class="text-center p-4 ">
                                        <li class="hover:text-prim hover:underline">Contact 1</li>
                                        <li class="hover:text-prim hover:underline">Contact 2</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div class="flex text-amber-50 gap-4 items-center">
                        <div><a href="#">REGISTER/LOGIN</a></div>
                        <img class="cursor-pointer" src="../asset/images/icon/search.svg" alt="icon search"
                            width="20px">
                        <img class="cursor-pointer" src="../asset/images/icon/like.svg" alt="icon fav" width="20px">
                        <img class="cursor-pointer" src="../asset/images/icon/shopping.svg" alt="icon shop cart"
                            width="20px">
                    </div>
                </div>

        <h1 class="text-center md:text-5xl text-gray-800 font-bold py-1 md:py-4">FOR MEN</h1>
        <div  class="grid grid-cols-1 md:grid-cols-4 gap-10 md:py-12 py-6 md:px-52 px-2.5  max-w-screen-2xl mx-auto bg-orange-50">
        
        ${template}
        </div>
        `
        root.innerHTML = container;

    }

}

function checkState() {
    const url = location.pathname;
    if (url === "/men") {
        renderMenPage()
    }
}