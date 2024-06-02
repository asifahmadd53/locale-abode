document.addEventListener('DOMContentLoaded', function () {
    let dropdownbtn = document.getElementById("dropdownHoverButton");
    let dropdown = document.getElementById("dropdownHover");

    dropdownbtn.addEventListener('click', function () {
        
        dropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!dropdownbtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let inquirebtn = document.querySelector(".inqbtn");
    let form = document.querySelector('.inqform');

    // Toggle form visibility when the toggle button is clicked
    inquirebtn.addEventListener("click", () => {
        toggleFormVisibility();
    });

    // Hide form when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!form.contains(event.target) && event.target !== inquirebtn) {
            form.style.display = "none";
        }
    });

    function toggleFormVisibility() {
        if (form.style.display === "none" || form.style.display === "") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    }
});



function toggleFormVisibility() {
    if (form.style.display === "block") {
        form.style.display = "none"; // If form is visible, hide it
    } else {
        form.style.display = "block"; // If form is hidden, show it
    }
}






