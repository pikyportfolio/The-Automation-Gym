const submitButton = document.querySelector('form[name="subscribe"] [type="submit"]');
submitButton.addEventListener('click', () => {
const form = document.querySelector('form[name="subscribe"]');
form.setAttribute('data-netlify-recaptcha', true);
});