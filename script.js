const inputs = document.querySelectorAll('.input');
const email_Input = document.querySelector('input[type=email]');

const subBTN = document.querySelector('input[type=submit]');

subBTN.addEventListener('click', e => {
  e.preventDefault();
  inputs.forEach(input => {
    if (input.value == -'') {
      input.closest('label').classList.add('error');
    } else {
      input.closest('label').classList.remove('error');
    }
  });
  if (!email_Input.value.includes('@') | email_Input.value.includes(' ')) {
    email_Input.closest('label').classList.add('error');
  }
});
