const aboutUsBtn = document.querySelector(".about");

aboutUsBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.scroll({
        top: document.querySelector(".about-page").offsetTop,
        behavior: "smooth"
    })
})

const gettingStartedBtn = document.querySelector(".get-started");

console.log(gettingStartedBtn);

gettingStartedBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.scroll({
        top: document.querySelector(".next-session-page").offsetTop,
        behavior: "smooth"
    })
})