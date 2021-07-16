const addItems = document.querySelector('.add-email');
const input = document.querySelector('.add-email-input');
const submit = document.querySelector('.add-email-submit');
const sliderImages = document.querySelectorAll('.slide-in');

function addItem(e) {
  e.preventDefault();
  sliderImages[0].classList.add('active');
  input.classList.add('disabled');
  submit.classList.add('disabled');
  const value = input.value;
  console.log(value);
}

addItems.addEventListener('submit', addItem);
