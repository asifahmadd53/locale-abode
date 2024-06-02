let menu = document.getElementById("cta-button-sidebar");
let togglebtn = document.querySelector(".togglebtn .svg");
let svg = document.querySelector(".svg");
let links = document.querySelectorAll("#cta-button-sidebar a");

togglebtn.addEventListener("click", () => {
  toggleMenu();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && event.target !== togglebtn) {
    menu.style.transform = "translateX(-100%)";
  }
});

function toggleMenu() {
  if (menu.style.transform === "translateX(-100%)") {
    menu.style.transform = "translateX(0)";
  } else {
    menu.style.transform = "translateX(-100%)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-target");
      const contentSections = document.querySelectorAll(".content-section");

      contentSections.forEach(function (section) {
        section.style.display = "none";
      });

      const targetSection = document.getElementById(`content-${targetId}`);
      if (targetSection) {
        targetSection.style.display = "block";
      }
    });
  });
});
// var ctx = document.getElementById('myChart').getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//             datasets: [{
//                 label: 'Sales',
//                 data: [6, 8,5 ,14, 10, 13],

//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });

// Variable to store the initially displayed page
var initialPageId = "page1";

function showPage(pageId) {
  var pages = document.querySelectorAll(".page");

  pages.forEach(function (page) {
    if (page.id !== pageId && page.id !== initialPageId) {
      page.classList.remove("active");
    }
  });

  var selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  if (pageId !== initialPageId) {
    var initialPage = document.getElementById(initialPageId);
    if (initialPage) {
      initialPage.classList.remove("active");
    }
  }
}

// Initially display the first page
showPage(initialPageId);

var companyListItem = document.getElementById("companyListItem");
var companyList = document.getElementById("companyList");

if (window.innerWidth <= 1023) {
  companyListItem.addEventListener("click", toggleList);
}

function toggleList() {
  if (companyList.style.display === "block") {
    companyList.style.display = "none";
  } else {
    companyList.style.display = "block";
  }
}

const chartConfig = {
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  chart: {
    type: "line",
    height: 240,
    toolbar: {
      show: false,
    },
  },
  title: {
    show: "",
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#020617"],
  stroke: {
    lineCap: "round",
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#616161",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  yaxis: {
    labels: {
      style: {
        colors: "#616161",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#dddddd",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 5,
      right: 20,
    },
  },
  fill: {
    opacity: 0.8,
  },
  tooltip: {
    theme: "dark",
  },
};

const chart = new ApexCharts(
  document.querySelector("#line-chart"),
  chartConfig
);

chart.render();

document.addEventListener("DOMContentLoaded", function () {
  const chartConfig = {
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    title: {
      show: false, // Set to false instead of empty string
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#001021"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  };

  const chart = new ApexCharts(
    document.querySelector("#bar-chart"),
    chartConfig
  );
  chart.render();
});

const getChartOptions = () => {
  return {
    series: [35.1, 23.5, 2.4, 5.4],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
    chart: {
      height: 300,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Unique visitors",
              fontFamily: "Inter, sans-serif",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return "$" + sum + "k";
              },
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: function (value) {
                return value + "k";
              },
            },
          },
          size: "80%",
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "k";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + "k";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };
};

if (
  document.getElementById("donut-chart") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("donut-chart"),
    getChartOptions()
  );
  chart.render();

  // Get all the checkboxes by their class name
  const checkboxes = document.querySelectorAll(
    '#devices input[type="checkbox"]'
  );

  // Function to handle the checkbox change event
  function handleCheckboxChange(event, chart) {
    const checkbox = event.target;
    if (checkbox.checked) {
      switch (checkbox.value) {
        case "desktop":
          chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
          break;
        case "tablet":
          chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
          break;
        case "mobile":
          chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
          break;
        default:
          chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
      }
    } else {
      chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
    }
  }

  // Attach the event listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) =>
      handleCheckboxChange(event, chart)
    );
  });
}

const options = {
  chart: {
    height: "90%",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0,
    },
  },
  series: [
    {
      name: "New users",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#1A56DB",
    },
  ],
  xaxis: {
    categories: [
      "01 February",
      "02 February",
      "03 February",
      "04 February",
      "05 February",
      "06 February",
      "07 February",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

if (
  document.getElementById("area-chart") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(document.getElementById("area-chart"), options);
  chart.render();
}

console.log("jdndjv");

document.addEventListener("DOMContentLoaded", function () {
  const deleteButton = document.getElementById("delete-button");
  const messageCard = document.getElementById("message-card");

  deleteButton.addEventListener("click", function () {
    messageCard.remove();
    console.log("saefasdf");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const removeButton = document.getElementById("remove-button");
  const agentCard = document.getElementById("agent-card");

  removeButton.addEventListener("click", function () {
    agentCard.remove();
    console.log("saefasdf");
  });
});



// Function to show a popup
function showPopup(popupOverlay) {
  popupOverlay.classList.remove("hidden");
}

// Function to hide a popup
function hidePopup(popupOverlay) {
  popupOverlay.classList.add("hidden");
}

const registerButton = document.getElementById("registerButton");
const popupOverlay2 = document.getElementById("popup-overlay2");
const popupContent2 = document.getElementById("popup-content2");

// Event listener for the first register button and popup
registerButton.addEventListener("click", function() {
  showPopup(popupOverlay2);
});

// Event listener for clicks outside the first popup
document.body.addEventListener("click", function (event) {
  // Check if the clicked element is outside the first popup
  if (!popupContent2.contains(event.target) && event.target !== registerButton) {
    hidePopup(popupOverlay2);
  }
});

const registerButton2 = document.getElementById("registerButton2");
const popupOverlay3 = document.getElementById("popup-overlay3");
const popupContent3 = document.getElementById("popup-content3");

// Event listener for the second register button and popup
registerButton2.addEventListener("click", function() {
  showPopup(popupOverlay3);
});

// Event listener for clicks outside the second popup
document.body.addEventListener("click", function (event) {
  // Check if the clicked element is outside the second popup
  if (!popupContent3.contains(event.target) && event.target !== registerButton2) {
    hidePopup(popupOverlay3);
  }
});



