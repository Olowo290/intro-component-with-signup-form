const inputs = document.querySelectorAll('.input');
const email_Input = document.querySelector('input[type=email]');

const subBTN = document.querySelector('input[type=submit]');

subBTN.addEventListener('click', e => {
  e.preventDefault();
  verify();
});
function verify() {
  inputs.forEach(input => {
    if (input.value == -'') {
      input.closest('label').classList.add('error');
    } else {
      input.closest('label').classList.remove('error');
    }
  });
  if (!email_Input.value.includes('@') | email_Input.value.includes(' ')) {
    document.querySelector('.email-error').textContent =
      'Looks like this is not an email';
    email_Input.closest('label').classList.add('error');
  }
}

inputs.forEach(input => {
  input.addEventListener('input', verify);
});
