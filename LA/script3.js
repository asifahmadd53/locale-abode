// Ensure DOM is loaded before executing script
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content loaded"); 

  // Log a greeting message
  console.log("Hello, how are you?");

  
  const sellButton = document.getElementById('sell_button');
  const rentButton = document.getElementById('rent_button');

 
  const selectedOptionInput = document.getElementById('property_action');

  selectedOptionInput.value = "sell";

  if (sellButton && rentButton && selectedOptionInput ) {
      sellButton.addEventListener('click', () => {
          selectedOptionInput.value = sellButton.textContent.trim();
      });

      rentButton.addEventListener('click', () => {
          selectedOptionInput.value = rentButton.textContent.trim();
      });
  } else {
      console.error("Sell, rent buttons, or property action input not found.");
  }

  
  const roomButtons = document.querySelectorAll('.room_button');

  
  const selectedRooms = document.getElementById('rooms');

 
  roomButtons.forEach(button => {
      button.addEventListener('click', () => {
          selectedRooms.value = button.textContent.trim();
      });
  });

  
  const bathButtons = document.querySelectorAll('.bath_button');

  
  const selectedBaths = document.getElementById('baths');


  bathButtons.forEach(button => {
      button.addEventListener('click', () => {
          selectedBaths.value = button.textContent.trim();
      });
  });

 
  const dayButtons = document.querySelectorAll('.day_button');

  
  const selectedDays = document.getElementById('availability');

 
  dayButtons.forEach(button => {
      button.addEventListener('click', () => {
          selectedDays.value = button.textContent.trim();
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve elements
  const resButton = document.getElementById('res_button');
  const plotButton = document.getElementById('plot_button');
  const commButton = document.getElementById('comm_button');
  const input = document.getElementById('property_type');
  const sub_typeButtons = document.querySelectorAll('.sub_types');
  const selectedbutton = document.getElementById('property_subtypes');
  const citySelect = document.getElementById('city');
  const areaSelect = document.getElementById('area');
  const submitButton = document.querySelector('.submitbutton button');

  
  input.value = "Residential";

  
  resButton.addEventListener('click', () => {
      input.value = resButton.textContent.trim();
  });

  plotButton.addEventListener('click', () => {
      input.value = plotButton.textContent.trim();
  });

  commButton.addEventListener('click', () => {
      input.value = commButton.textContent.trim();
  });

  
  sub_typeButtons.forEach(button => {
      button.addEventListener('click', () => {
          selectedbutton.value = button.textContent.trim();
      });
  });

  
  function validateSelection() {
      if (citySelect.value === 'Select City' && areaSelect.value !== 'area') {
          alert('Please select a city first');
          return false;
      }
      return true;
  }

 
  submitButton.addEventListener('click', function(event) {
      if (!validateSelection()) {
          event.preventDefault(); 
      }
  });
});


document.addEventListener("click", (event) => {
  if (event.target.classList.contains("spacesbtn15")) {
      document.querySelectorAll(".spacesbtn15").forEach((btn) => {
          btn.classList.remove("activebtn15");
      });
      event.target.classList.add("activebtn15");
  }

  if (event.target.classList.contains("spacesbtn12")) {
      document.querySelectorAll(".spacesbtn12").forEach((btn) => {
          btn.classList.remove("activebtn12");
      });
      event.target.classList.add("activebtn12");
  }

  if (event.target.classList.contains("spacesbtn13")) {
      document.querySelectorAll(".spacesbtn13").forEach((btn) => {
          btn.classList.remove("activebtn13");
      });
      event.target.classList.add("activebtn13");
  }

  if (event.target.classList.contains("spacesbtn11")) {
      document.querySelectorAll(".spacesbtn11").forEach((btn) => {
          btn.classList.remove("activebtn11");
      });
      event.target.classList.add("activebtn11");
  }
  if (event.target.classList.contains("spacesbtn14")) {
      document.querySelectorAll(".spacesbtn14").forEach((btn) => {
          btn.classList.remove("activebtn14");
      });
      event.target.classList.add("activebtn14");
  }

  if (event.target.classList.contains("blinkbtn")) {
      document.querySelectorAll(".blinkbtn").forEach(btn => {
          btn.parentElement.classList.remove("afterclick");
      });
      event.target.parentElement.classList.add("afterclick");
  }
});

document.addEventListener("DOMContentLoaded", function() {
 
  const categoryButtons = document.querySelectorAll(".categorybtn");


  categoryButtons.forEach(button => {
      button.addEventListener("click", () => {
         
          const targetContainerId = button.getAttribute("data-target");
          const targetContainer = document.getElementById(targetContainerId);

       
          document.querySelectorAll(".varietycontainer").forEach(container => {
              container.style.display = container === targetContainer ? "block" : "none";
          });
      });
  });

  
  const residentialContainer = document.getElementById("resedentialcont");
  const otherContainers = document.querySelectorAll(".varietycontainer:not(#resedentialcont)");

  residentialContainer.style.display = "block";
  otherContainers.forEach(container => {
      container.style.display = "none";
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const slider = document.querySelector('.slider');
  const switchLabel = document.querySelector('.switch');

  toggleButton.addEventListener('change', function() {
      if (toggleButton.checked) {
          slider.style.left = '100%'; 
          switchLabel.classList.add('checked-bg-color');
      } else {
          slider.style.left = '0'; 
          switchLabel.classList.remove('checked-bg-color');
      }
  });
});


console.log("here toggle functioning satrt")
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const clientsVisibility = document.querySelector('.clientsvisibility');

  toggleButton.addEventListener('change', function() {
      
      clientsVisibility.classList.toggle('hidden');
      console.log("Toggle button clicked");
  });
});


window.onscroll = function() {
  stickyFunction();
};

var stickyElement = document.getElementById("sticky-element");
var stickyOffset = stickyElement.offsetTop;

function stickyFunction() {
  if (window.window.scrollY >= stickyOffset) {
    stickyElement.classList.add("sticky");
  } else {
    stickyElement.classList.remove("sticky");
  }
}