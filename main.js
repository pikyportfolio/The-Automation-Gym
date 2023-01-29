const subscribeButton = document.querySelector('form[name="subscribe"] button');
subscribeButton.addEventListener('click', () => {
  const form = document.querySelector('form[name="subscribe"]');
  form.setAttribute('data-netlify-recaptcha', true);
});