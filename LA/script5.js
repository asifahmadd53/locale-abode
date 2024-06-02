let menu = document.getElementById('cta-button-sidebar');
let togglebtn = document.querySelector('.togglebtn .svg'); 
let svg = document.querySelector('.svg'); 
let links = document.querySelectorAll('#cta-button-sidebar a');

togglebtn.addEventListener('click', () => {
  toggleMenu();
});

links.forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu();
  });
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && event.target !== togglebtn) {
    menu.style.transform = 'translateX(-100%)';
  }
});

function toggleMenu() {
  if (menu.style.transform === 'translateX(-100%)') {
    menu.style.transform = 'translateX(0)';
  } else {
    menu.style.transform = 'translateX(-100%)';
  }
}


document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const contentSections = document.querySelectorAll('.content-section');

            contentSections.forEach(function(section) {
                section.style.display = 'none';
            });

            const targetSection = document.getElementById(`content-${targetId}`);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});
var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [6, 8,5 ,14, 10, 13],
                
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });



// Variable to store the initially displayed page
var initialPageId = 'page1';

function showPage(pageId) {
    
    var pages = document.querySelectorAll('.page');

    pages.forEach(function(page) {
        if (page.id !== pageId && page.id !== initialPageId) {
            page.classList.remove('active');
        }
    });

    var selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    if (pageId !== initialPageId) {
        var initialPage = document.getElementById(initialPageId);
        if (initialPage) {
            initialPage.classList.remove('active');
        }
    }
}

// Initially display the first page
showPage(initialPageId);







