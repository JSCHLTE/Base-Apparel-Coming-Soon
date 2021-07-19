const inputEmail = document.querySelector('#inputEmail');
const inputImage = document.querySelector('#inputImage');
const warning = document.querySelector('.warning');

inputImage.addEventListener('click', () => {
    const inputEmailValue = inputEmail.value;
    if(!inputEmailValue.includes('@') || inputEmailValue == ''){
        warning.innerHTML = '<img src="images/icon-error.svg" alt="Error img" class="error-img"> Please provide a valid email.';
    } else {
        warning.innerHTML = '';
    }
});