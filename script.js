const submitButton = document.querySelector(".form-submit-btn");

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Clicked");
});