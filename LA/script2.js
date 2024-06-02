document.addEventListener("DOMContentLoaded", function() {
  // Slideshow functionality
  let slideIndex = 0;

  function showSlides() {
    let slides = document.getElementsByClassName("Slides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
  }
  showSlides();

  // Dropdown toggling functions
  function toggleDropdown(dropdownId) {
    let dropdown = document.getElementById(dropdownId);
    if (dropdown) {
      dropdown.classList.toggle("hidden");
    }
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", function(event) {
    let dropdown = document.getElementById("property-type-dropdown");
    let arrow = document.querySelector(".dropdown-toggle");
    let propertyInput = document.getElementById("property-type");
    if (dropdown && !dropdown.contains(event.target) && event.target !== arrow && event.target !== propertyInput) {
      dropdown.classList.add("hidden");
    }
  });

  // Form submission function
  function submitForm() {
    // Handle form submission here
  }

  // Popup handling
  let okButton = document.getElementById("ok-button");
  let popupOverlay = document.getElementById("popup-overlay");

  if (okButton && popupOverlay) {
    okButton.addEventListener("click", function() {
      popupOverlay.style.display = "none";
      setTimeout(function() {
        popupOverlay.remove();
      }, 5000);
    });
  }
  
  // Button-Checkbox
  const checkbox = document.getElementById('remember-me');
  const label = document.querySelector('label[for="remember-me"]');
  if (checkbox && label) {
    checkbox.addEventListener('click', function() {
      if (this.checked) {
        this.classList.add('checked');
        label.classList.add('text-red-500');
      } else {
        this.classList.remove('checked');
        label.classList.remove('text-red-500');
      }
    });
  }

  // Phone number select
  const flagIcon = document.getElementById("flag-icon");
  const phoneNumberSelect = document.getElementById("phone-number");
  if (phoneNumberSelect && flagIcon) {
    phoneNumberSelect.addEventListener("change", function() {
      const selectedCode = this.value;
      const flagCode = this.selectedOptions[0].dataset.flag;
      flagIcon.src = `https://www.countryflags.io/${flagCode}/flat/16.png`;
    });
  }

  // Residential dropdown
  function toggleResidentialOptions() {
    let residentialOptions = document.getElementById('residential-options');
    if (residentialOptions) {
      residentialOptions.classList.toggle('hidden');
    }
  }

  // Plot dropdown
  function togglePlotOptions() {
    let plotOptions = document.getElementById('plot-options');
    if (plotOptions) {
      plotOptions.classList.toggle('hidden');
    }
  }

  // Commercial dropdown
  function toggleCommercialOptions() {
    let commercialOptions = document.getElementById('commercial-options');
    if (commercialOptions) {
      commercialOptions.classList.toggle('hidden');
    }
  }

  function cancelSelection() {
    document.querySelectorAll('.options').forEach(option => {
      option.classList.add('hidden');
    });
  }

  function applySelection() {
    // Apply selection logic here
  }

  // City dropdown
  function toggleCityDropdown() {
    let dropdown = document.getElementById("cityDropdown");
    if (dropdown) {
      dropdown.classList.toggle("hidden");
    }
  }

  function selectCity(city) {
    let inputField = document.getElementById("cityInput");
    if (inputField) {
      inputField.value = city;
    }
    let dropdown = document.getElementById("cityDropdown");
    if (dropdown) {
      dropdown.classList.add("hidden");
    }
  }

});
