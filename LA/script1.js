// Toggle menu visibility
document.addEventListener('DOMContentLoaded', function() {
    let toggle = document.getElementById("toggle");
    let menu = document.getElementById("navbar-sticky");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !toggle.contains(event.target)) {
            menu.classList.add("hidden");
        }
    });
});

// Toggle active class on main buttons
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener("click", (event) => {
        if (event.target.classList && event.target.classList.contains("mainbtn")) {
            const buttons = document.querySelectorAll(".mainbtn");
            buttons.forEach((btn) => btn.classList.remove("active"));
            event.target.classList.add("active");
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.getElementById('buy-button');
    const rentButton = document.getElementById('rent-button');
    const buyCityList = document.getElementById('buy-city-list');
    const rentCityList = document.getElementById('rent-city-list');

    buyButton.addEventListener('click', function() {
        console.log('Buy button clicked');
        buyCityList.classList.remove('hidden');
        rentCityList.classList.add('hidden');
        console.log('Showing buy city list, hiding rent city list');
    });

    rentButton.addEventListener('click', function() {
        console.log('Rent button clicked');
        rentCityList.classList.remove('hidden');
        buyCityList.classList.add('hidden');
        console.log('Showing rent city list, hiding buy city list');
   });
});

// // Filter cities
// document.addEventListener('DOMContentLoaded', function() {
    
//     let cities = [
//         "Sahiwal", "Lahore", "Karachi", "Multan", "Peshawar", "Okara", "Rawalpindi", "Quetta", "Islamabad",
//     ];

//     let resultBox = document.querySelector(".result-box ul");
//     let inputBox = document.getElementById("input-box");
//     let resultContainer = document.querySelector(".result-box");

//     inputBox.addEventListener("input", function () {
//         let input = inputBox.value.toLowerCase();
//         let filteredCities = cities.filter((city) =>
//             city.toLowerCase().includes(input)
//         );
//         display(filteredCities);
//     });

//     function display(results) {
//         resultBox.innerHTML = ""; // Clear previous results
//         if (results.length) {
//             resultContainer.classList.remove("hidden");
//             results.forEach((city) => {
//                 let li = document.createElement("li");
//                 li.textContent = city;
//                 li.addEventListener("click", function () {
//                     inputBox.value = city; // Update input box with selected city
//                     resultContainer.classList.add("hidden"); // Hide the list
//                 });
//                 resultBox.appendChild(li);
//             });
//         } else {
//             resultContainer.classList.add("hidden");
//         }
//     }

//     inputBox.addEventListener("focus", function () {
//         let input = inputBox.value.toLowerCase();
//         let filteredCities = cities.filter((city) =>
//             city.toLowerCase().includes(input)
//         );
//         display(filteredCities);
//     });

//     document.addEventListener("click", function(event) {
//         if (!inputBox.contains(event.target) && !resultContainer.contains(event.target)) {
//             resultContainer.classList.add("hidden");
//         }
//     });
// });

// // Scroll card container
document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.querySelector(".left img");
    const rightArrow = document.querySelector(".right img");
    const cardContainer = document.querySelector(".cards");
    const scrollAmount = 540; // Adjust this value as needed

    leftArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft += scrollAmount;
    });

    rightArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft -= scrollAmount;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.querySelector(".left8 img");
    const rightArrow = document.querySelector(".right8 img");
    const cardContainer = document.querySelector(".rentcards");
    const scrollAmount = 540; // Adjust this value as needed

    leftArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft += scrollAmount;
        console.log("sagsf")
    });

    rightArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft -= scrollAmount;
        console.log("sagsf")
    });
});

// Toggle active class on recent buttons
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("recentbtn")) {
        document.querySelectorAll(".recentbtn").forEach((btn) => {
            btn.classList.remove("activebtn");
            event.target.classList.add("activebtn");
        });
    }
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("recentbtn1")) {
        document.querySelectorAll(".recentbtn1").forEach((btn) => {
            btn.classList.remove("activebtn1");
            event.target.classList.add("activebtn1");
        });
    }
});

console.log("Hii my name Is Asif Bin AHmad");

// Toggle submenu visibility based on screen size
function showSubmenu() {
    const submenu = document.getElementById('submenu');
    submenu.style.display = 'block';
}

function hideSubmenu() {
    const submenu = document.getElementById('submenu');
    submenu.style.display = 'none';
}

function toggleSubmenu() {
    const submenu = document.getElementById('submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function checkScreenSize() {
    const isSmallScreen = window.innerWidth <= 768; // Change the breakpoint as needed
    const menu = document.getElementById('menu');
    const submenu = document.getElementById('submenu');

    if (isSmallScreen) {
        menu.addEventListener('click', toggleSubmenu);
        submenu.style.display = 'none'; // Hide submenu by default on small screens
    } else {
        menu.addEventListener('mouseenter', showSubmenu);
        menu.addEventListener('mouseleave', hideSubmenu);
        submenu.style.display = 'none'; // Hide submenu by default on larger screens
    }
}

window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);


console.log("nhajodhjldsf")


window.onload = function() {
    // Get the current scroll position from sessionStorage
    var scrollPosition = sessionStorage.getItem('scrollPosition');
    
    // If there's a scroll position stored, scroll to it
    if (scrollPosition !== null) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
};




document.addEventListener("DOMContentLoaded", function() {
    var logoutButton = document.getElementById("logout-button");
    var userDropdown = document.getElementById("user-dropdown");

    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            // Hide the profile menu
            userDropdown.classList.add("hidden");
        });
    }
});


let investButton = document.getElementById("invest-button");
let popupOverlay = document.getElementById("popup-overlay1");
let popupContent = document.getElementById("popup-content");

if (investButton && popupOverlay) {
    investButton.addEventListener("click", function() {
        popupOverlay.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    });

    popupOverlay.addEventListener("click", function(event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = "none";
            document.body.style.overflow = "auto"; // Restore scrolling
        }
    });
}






document.addEventListener('DOMContentLoaded', function () {
    // Handlers for sell buttons
    const sellButtons = document.querySelectorAll('.recentbtn');
    console.log('Sell buttons found:', sellButtons);

    sellButtons.forEach(button => {
        button.addEventListener('click', function () {
            const city = this.getAttribute('data-city');
            console.log('Sell button clicked, city:', city);
            fetchSellProperties(city);
        });
    });

    function fetchSellProperties(city) {
        console.log('Fetching sell properties for city:', city);
        
        fetch(`/fetch_sell_properties?city=${city}`)
            .then(response => {
                console.log('Response received:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);

                const cityContent = document.getElementById('cityContent');
                console.log('City content element:', cityContent);
                
                cityContent.innerHTML = '';
                
                data.properties.forEach(property => {
                    console.log('Processing property:', property);
                    
                    const propertyCard = `
                    <a href="/n/${property.name_of_prop}">
                        <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                            ${property.images ? `<img class="w-full h-[50%] min-h-[50%]" src="${property.images.url}" alt="${property.name_of_prop}">` : '<p>no image found</p>'}
                            <div class="px-2 py-2">
                                <div class="mb-2">
                                    <h2 class="text-sm font-bold text-gray-900">${property.name_of_prop}</h2>
                                </div>
                                <div class="flex justify-around">
                                    <div class="flex items-center mr-3">
                                        <img src="/static/images/bed.svg"/>
                                        <p class="ml-1 text-sm font-medium text-gray-700">${property.rooms}</p>
                                    </div>
                                    <div class="flex items-center">
                                        <img src="/static/images/washroom.svg" />
                                        <p class="ml-1 text-sm font-medium text-gray-700">${property.baths}</p>
                                    </div>
                                    <div class="flex items-center">
                                        <img src="/static/images/area.svg"/>
                                        <p class="ml-1 text-sm font-medium text-gray-700">${property.size}</p>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <p class="text-2xl font-extrabold text-blue-800">${property.price}</p>
                                </div>
                            </div>
                            <div class="px-2 flex justify-between items-center">
                                <div class="flex items-center">
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Agent Name</p>
                                        <p class="text-xs text-gray-600">${property.owner_name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>`;
                    
                    cityContent.insertAdjacentHTML('beforeend', propertyCard);
                });
            })
            .catch(error => {
                console.error('Error fetching properties:', error);
            });
    }

    // Handlers for rent buttons
    const rentButtons = document.querySelectorAll('#propertyTypeButtons10 button');
    console.log('Rent buttons found:', rentButtons);
    
    rentButtons.forEach(button => {
        button.addEventListener('click', function () {
            const city = this.getAttribute('data-city');
            console.log('Rent button clicked, city:', city);
            fetchRentProperties(city);
        });
    });

    function fetchRentProperties(city) {
        console.log('Fetching rent properties for city:', city);

        fetch(`/fetch_rent_properties?city=${city}`)
            .then(response => response.json())
            .then(data => {
                console.log('Data received:', data);

                const rentCityContent = document.getElementById('rentCityContent');
                console.log('Rent city content element:', rentCityContent);
                
                rentCityContent.innerHTML = '';
                
                data.properties.forEach(property => {
                    console.log('Processing property:', property);
                    
                    const propertyCard = `
                    <a href="/rent/${property.name_of_prop}">
                        <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                            ${property.images ? `<img class="w-full h-[50%] min-h-[50%]" src="${property.images.url}" alt="${property.name_of_prop}">` : '<p>No image found</p>'}
                            <div class="px-2 py-2">
                                <div class="mb-2">
                                    <h2 class="text-sm font-bold text-gray-900">${property.name_of_prop}</h2>
                                </div>
                                <div class="flex justify-around">
                                    <div class="flex items-center mr-3">
                                        <img src="/static/images/bed.svg"/>
                                        <p class="ml-1 text-sm font-medium text-gray-700">${property.rooms}</p>
                                    </div>
                                    <div class="flex items-center">
                                        <img src="/static/images/washroom.svg" />
                                        <p class="ml-1 text-sm font-medium text-gray-700">${property.baths}</p>
                                    </div>
                                    <div class="flex items-center">
                                        <img src="/static/images/area.svg"/>
                                        <p class="ml-1 text-sm font-medium text-gray-700">${property.size} sqm</p>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <p class="text-2xl font-extrabold text-blue-800">${property.price}</p>
                                </div>
                            </div>
                            <div class="px-2 flex justify-between items-center">
                                <div class="flex items-center">
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Owner Name</p>
                                        <p class="text-xs text-gray-600">${property.owner_name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>`;
                    
                    rentCityContent.insertAdjacentHTML('beforeend', propertyCard);
                });
            })
            .catch(error => {
                console.error('Error fetching properties:', error);
            });
    }
});
