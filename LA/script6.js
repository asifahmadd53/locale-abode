document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener("click",(event)=>{
        if(event.target.classList.contains("recentbtn3")){
            document.querySelectorAll(".recentbtn3").forEach(btn=>{
                btn.classList.remove("activebtn3");
                event.target.classList.add("activebtn3");
            })
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener("click",(event)=>{
        if(event.target.classList.contains("recentbtn4")){
            document.querySelectorAll(".recentbtn4").forEach(btn=>{
                btn.classList.remove("activebtn4");
                event.target.classList.add("activebtn4");
            })
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener("click",(event)=>{
        if(event.target.classList.contains("recentbtn5")){
            document.querySelectorAll(".recentbtn5").forEach(btn=>{
                btn.classList.remove("activebtn5");
            });
            event.target.classList.add("activebtn5");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("recentbtn6")) {
            document.querySelectorAll(".recentbtn6").forEach(btn => {
                btn.classList.remove("activebtn6");
            });
            event.target.classList.add("activebtn6");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("recentbtn7")) {
            document.querySelectorAll(".recentbtn7").forEach(btn => {
                btn.classList.remove("activebtn7");
            });
            event.target.classList.add("activebtn7");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left3 img');
    const rightArrow = document.querySelector('.right3 img');
    const cardContainer = document.querySelector('.recentcards');
    const scrollAmount = 540; // Adjust this value as needed

    leftArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft += scrollAmount;
        console.log("sdsfs")
    });

    rightArrow.addEventListener("click", ()=>{
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft -= scrollAmount;
        console.log("xkjnsjgf")
    })
});

document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left4 img');
    const rightArrow = document.querySelector('.right4 img');
    const cardContainer = document.querySelector('.lahorecards');
    const scrollAmount = 540; // Adjust this value as needed

    leftArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft += scrollAmount;
        console.log("sdsfs")
    });

    rightArrow.addEventListener("click", ()=>{
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft -= scrollAmount;
        console.log("xkjnsjgf")
    })
});
document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left5 img');
    const rightArrow = document.querySelector('.right5 img');
    const cardContainer = document.querySelector('.sahiwalcards');
    const scrollAmount = 540; // Adjust this value as needed

    leftArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft += scrollAmount;
        console.log("sdsfs")
    });

    rightArrow.addEventListener("click", ()=>{
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft -= scrollAmount;
        console.log("xkjnsjgf")
    })
});
document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left6 img');
    const rightArrow = document.querySelector('.right6 img');
    const cardContainer = document.querySelector('.peshawarcards');
    const scrollAmount = 540; // Adjust this value as needed

    leftArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft += scrollAmount;
        console.log("sdsfs")
    });

    rightArrow.addEventListener("click", ()=>{
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft -= scrollAmount;
        console.log("xkjnsjgf")
    })
});
document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left7 img');
    const rightArrow = document.querySelector('.right7 img');
    const cardContainer = document.querySelector('.karachicards');
    const scrollAmount = 540; // Adjust this value as needed

    leftArrow.addEventListener("click", () => {
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft += scrollAmount;
        console.log("sdsfs")
    });

    rightArrow.addEventListener("click", ()=>{
        cardContainer.style.scrollBehavior = "smooth";
        cardContainer.scrollLeft -= scrollAmount;
        console.log("xkjnsjgf")
    })
});






///////////////////isl


document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to property type buttons
    var propertyTypeButtons = document.querySelectorAll('#propertyTypeButtons button');
    propertyTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var propertyType = this.getAttribute('data-type');
            fetchProperties(propertyType);
        });
    });

    // Function to fetch properties using AJAX
    function fetchProperties(propertyType) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/fetch_properties/?property_type=' + propertyType, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                updateProperties(data.properties);
            } else {
                console.error('Error:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Connection Error');
        };
        xhr.send();
    }

    // Function to update property cards with fetched data
    function updateProperties(properties) {
        var cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = ''; // Clear previous properties

        properties.forEach(function(property) {
            var propertyCard = `
            <a href="/n/${property.name_of_prop}">

            <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                ${property.images_url ? '<img class="w-full h-[50%] min-h-[50%]" src="' + property.images_url + '" alt="' + property.name_of_prop + '">' : '<p>no image found</p>'}
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
            cardContainer.insertAdjacentHTML('beforeend', propertyCard);
        });
    }
});




/////////////lhr






document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to property type buttons
    var propertyTypeButtons = document.querySelectorAll('#propertyTypeButtons1 button');
    propertyTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var propertyType = this.getAttribute('data-type');
            fetchProperties(propertyType);
        });
    });

    // Function to fetch properties using AJAX
    function fetchProperties(propertyType) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/fetch_properties1/?property_type=' + propertyType, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                updateProperties(data.properties);
            } else {
                console.error('Error:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Connection Error');
        };
        xhr.send();
    }

    // Function to update property cards with fetched data
    function updateProperties(properties) {
        var cardContainer = document.getElementById('cardContainer1');
        cardContainer.innerHTML = ''; // Clear previous properties

        properties.forEach(function(property) {
            var propertyCard = `
            <a href="/n/${property.name_of_prop}">
            <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                ${property.images_url ? '<img class="w-full h-[50%] min-h-[50%]" src="' + property.images_url + '" alt="' + property.name_of_prop + '">' : '<p>no image found</p>'}
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
            cardContainer1.insertAdjacentHTML('beforeend', propertyCard);
        });
    }
});







document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to property type buttons
    var propertyTypeButtons = document.querySelectorAll('#propertyTypeButtons2 button');
    propertyTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var propertyType = this.getAttribute('data-type');
            fetchProperties(propertyType);
        });
    });

    // Function to fetch properties using AJAX
    function fetchProperties(propertyType) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/fetch_properties2/?property_type=' + propertyType, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                updateProperties(data.properties);
            } else {
                console.error('Error:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Connection Error');
        };
        xhr.send();
    }

    // Function to update property cards with fetched data
    function updateProperties(properties) {
        var cardContainer = document.getElementById('cardContainer2');
        cardContainer.innerHTML = ''; // Clear previous properties

        properties.forEach(function(property) {
            var propertyCard = `
            <a href="/n/${property.name_of_prop}">
            <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                ${property.images_url ? '<img class="w-full h-[50%] min-h-[50%]" src="' + property.images_url + '" alt="' + property.name_of_prop + '">' : '<p>no image found</p>'}
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
            <a/>`;
            cardContainer2.insertAdjacentHTML('beforeend', propertyCard);
        });
    }
});



/////////////swl




document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to property type buttons
    var propertyTypeButtons = document.querySelectorAll('#propertyTypeButtons3 button');
    propertyTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var propertyType = this.getAttribute('data-type');
            fetchProperties(propertyType);
        });
    });

    // Function to fetch properties using AJAX
    function fetchProperties(propertyType) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/fetch_properties3/?property_type=' + propertyType, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                updateProperties(data.properties);
            } else {
                console.error('Error:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Connection Error');
        };
        xhr.send();
    }

    // Function to update property cards with fetched data
    function updateProperties(properties) {
        var cardContainer = document.getElementById('cardContainer3');
        cardContainer.innerHTML = ''; // Clear previous properties

        properties.forEach(function(property) {
            var propertyCard = `
            <a href="/n/${property.name_of_prop}">
            <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                ${property.images_url ? '<img class="w-full h-[50%] min-h-[50%]" src="' + property.images_url + '" alt="' + property.name_of_prop + '">' : '<p>no image found</p>'}
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
            cardContainer3.insertAdjacentHTML('beforeend', propertyCard);
        });
    }
});




///////////////////////





document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to property type buttons
    var propertyTypeButtons = document.querySelectorAll('#propertyTypeButtons4 button');
    propertyTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var propertyType = this.getAttribute('data-type');
            fetchProperties(propertyType);
        });
    });

    // Function to fetch properties using AJAX
    function fetchProperties(propertyType) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/fetch_properties4/?property_type=' + propertyType, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                updateProperties(data.properties);
            } else {
                console.error('Error:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Connection Error');
        };
        xhr.send();
    }

    // Function to update property cards with fetched data
    function updateProperties(properties) {
        var cardContainer = document.getElementById('cardContainer4');
        cardContainer.innerHTML = ''; // Clear previous properties

        properties.forEach(function(property) {
            var propertyCard = `
         
            <a href="/n/${property.name_of_prop}">
            <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                ${property.images_url ? '<img class="w-full h-[50%] min-h-[50%]" src="' + property.images_url + '" alt="' + property.name_of_prop + '">' : '<p>no image found</p>'}
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
            cardContainer4.insertAdjacentHTML('beforeend', propertyCard);
    });
}
});












//////////////////////rentttttt


////////////isl

document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to property type buttons
    var propertyTypeButtons = document.querySelectorAll('#propertyTypeButtons5 button');
    propertyTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var propertyType = this.getAttribute('data-type');
            fetchProperties(propertyType);
        });
    });

    // Function to fetch properties using AJAX
    function fetchProperties(propertyType) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/fetch_properties5/?property_type=' + propertyType, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                updateProperties(data.properties);
            } else {
                console.error('Error:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Connection Error');
        };
        xhr.send();
    }

    // Function to update property cards with fetched data
    function updateProperties(properties) {
        var cardContainer = document.getElementById('cardContainer5');
        cardContainer.innerHTML = ''; // Clear previous properties

        properties.forEach(function(property) {
            var propertyCard = `
            <a href="/rent/${property.name_of_prop}">

            <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                ${property.images_url ? '<img class="w-full h-[50%] min-h-[50%]" src="' + property.images_url + '" alt="' + property.name_of_prop + '">' : '<p>no image found</p>'}
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
            cardContainer5.insertAdjacentHTML('beforeend', propertyCard);
        });
    }
});




/////////////lhr






document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to property type buttons
    var propertyTypeButtons = document.querySelectorAll('#propertyTypeButtons6 button');
    propertyTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var propertyType = this.getAttribute('data-type');
            fetchProperties(propertyType);
        });
    });

    // Function to fetch properties using AJAX
    function fetchProperties(propertyType) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/fetch_properties6/?property_type=' + propertyType, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                updateProperties(data.properties);
            } else {
                console.error('Error:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Connection Error');
        };
        xhr.send();
    }

    // Function to update property cards with fetched data
    function updateProperties(properties) {
        var cardContainer = document.getElementById('cardContainer6');
        cardContainer.innerHTML = ''; // Clear previous properties

        properties.forEach(function(property) {
            var propertyCard = `
            <a href="/rent/${property.name_of_prop}">
            <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                ${property.images_url ? '<img class="w-full h-[50%] min-h-[50%]" src="' + property.images_url + '" alt="' + property.name_of_prop + '">' : '<p>no image found</p>'}
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
            cardContainer6.insertAdjacentHTML('beforeend', propertyCard);
        });
    }
});







document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to property type buttons
    var propertyTypeButtons = document.querySelectorAll('#propertyTypeButtons7 button');
    propertyTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var propertyType = this.getAttribute('data-type');
            fetchProperties(propertyType);
        });
    });

    // Function to fetch properties using AJAX
    function fetchProperties(propertyType) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/fetch_properties7/?property_type=' + propertyType, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                updateProperties(data.properties);
            } else {
                console.error('Error:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Connection Error');
        };
        xhr.send();
    }

    // Function to update property cards with fetched data
    function updateProperties(properties) {
        var cardContainer = document.getElementById('cardContainer7');
        cardContainer.innerHTML = ''; // Clear previous properties

        properties.forEach(function(property) {
            var propertyCard = `
            <a href="/rent/${property.name_of_prop}">
            <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                ${property.images_url ? '<img class="w-full h-[50%] min-h-[50%]" src="' + property.images_url + '" alt="' + property.name_of_prop + '">' : '<p>no image found</p>'}
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
            <a/>`;
            cardContainer7.insertAdjacentHTML('beforeend', propertyCard);
        });
    }
});



/////////////swl




document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to property type buttons
    var propertyTypeButtons = document.querySelectorAll('#propertyTypeButtons8 button');
    propertyTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var propertyType = this.getAttribute('data-type');
            fetchProperties(propertyType);
        });
    });

    // Function to fetch properties using AJAX
    function fetchProperties(propertyType) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/fetch_properties8/?property_type=' + propertyType, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                updateProperties(data.properties);
            } else {
                console.error('Error:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Connection Error');
        };
        xhr.send();
    }

    // Function to update property cards with fetched data
    function updateProperties(properties) {
        var cardContainer = document.getElementById('cardContainer8');
        cardContainer.innerHTML = ''; // Clear previous properties

        properties.forEach(function(property) {
            var propertyCard = `
            <a href="/rent/${property.name_of_prop}">
            <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                ${property.images_url ? '<img class="w-full h-[50%] min-h-[50%]" src="' + property.images_url + '" alt="' + property.name_of_prop + '">' : '<p>no image found</p>'}
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
            cardContainer8.insertAdjacentHTML('beforeend', propertyCard);
        });
    }
});




///////////////////////





document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to property type buttons
    var propertyTypeButtons = document.querySelectorAll('#propertyTypeButtons9 button');
    propertyTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var propertyType = this.getAttribute('data-type');
            fetchProperties(propertyType);
        });
    });

    // Function to fetch properties using AJAX
    function fetchProperties(propertyType) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/fetch_properties9/?property_type=' + propertyType, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                updateProperties(data.properties);
            } else {
                console.error('Error:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Connection Error');
        };
        xhr.send();
    }

    // Function to update property cards with fetched data
    function updateProperties(properties) {
        var cardContainer = document.getElementById('cardContainer9');
        cardContainer.innerHTML = ''; // Clear previous properties

        properties.forEach(function(property) {
            var propertyCard = `
         
            <a href="/rent/${property.name_of_prop}">
            <div class="min-h-80 h-80 w-60 min-w-60 rounded overflow-hidden shadow-lg hover:shadow-xl">
                ${property.images_url ? '<img class="w-full h-[50%] min-h-[50%]" src="' + property.images_url + '" alt="' + property.name_of_prop + '">' : '<p>no image found</p>'}
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
            cardContainer9.insertAdjacentHTML('beforeend', propertyCard);
   });
}
});
