document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("recentbtn21")){
        document.querySelectorAll(".recentbtn21").forEach(btn=>{
            btn.classList.remove("activebtn21");
            event.target.classList.add("activebtn21");
        })
    }
})
document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("recentbtn22")){
        document.querySelectorAll(".recentbtn22").forEach(btn=>{
            btn.classList.remove("activebtn22");
            event.target.classList.add("activebtn22");
        })
    }
})
document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("recentbtn23")){
        document.querySelectorAll(".recentbtn23").forEach(btn=>{
            btn.classList.remove("activebtn23");
            event.target.classList.add("activebtn23");
        })
    }
})
document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("recentbtn24")){
        document.querySelectorAll(".recentbtn24").forEach(btn=>{
            btn.classList.remove("activebtn24");
            event.target.classList.add("activebtn24");
        })
    }
})
document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("recentbtn25")){
        document.querySelectorAll(".recentbtn25").forEach(btn=>{
            btn.classList.remove("activebtn25");
            event.target.classList.add("activebtn25");
        })
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left21 img');
    const rightArrow = document.querySelector('.right21 img');
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
    const leftArrow = document.querySelector('.left22 img');
    const rightArrow = document.querySelector('.right22 img');
    const cardContainer = document.querySelector('.lahorerentcards');
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
    const leftArrow = document.querySelector('.left23 img');
    const rightArrow = document.querySelector('.right23 img');
    const cardContainer = document.querySelector('.sahiwalrentcards');
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
    const leftArrow = document.querySelector('.left24 img');
    const rightArrow = document.querySelector('.right24 img');
    const cardContainer = document.querySelector('.peshawarrentcards');
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
    const leftArrow = document.querySelector('.left25 img');
    const rightArrow = document.querySelector('.right25 img');
    const cardContainer = document.querySelector('.karachirentcards');
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
    const leftArrow = document.querySelector('.left26 img');
    const rightArrow = document.querySelector('.right26 img');
    const cardContainer = document.querySelector('.investcards');
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