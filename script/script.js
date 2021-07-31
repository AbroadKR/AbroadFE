const signUpBtn = document.getElementById('header_signup_login')
const modal = document.querySelector('.signup_modal')
const overlay = modal.querySelector('.modal_overlay')
const closeBtn = modal.querySelector('.signup_button')
const addEmail = document.querySelector('.email_form')
const input = document.querySelector('.email_form_input')
const submit = document.querySelector('.email_form_submit')
const sliderImages = document.querySelectorAll('.signup_in')

const regBtn = document.getElementById('header_signup_regist')
const loginContent = document.querySelector('.signup_contents')
const modalH1 = loginContent.querySelector('h1')
const modalLi = loginContent.querySelector('li')
const modalInput = loginContent.querySelector('input')
const modalSpan = loginContent.querySelector('span')
const modalChangeBtn = document.querySelector('.email_form_changeBtn')
const doNotChange = document.querySelector('.email_form_changeBtn_wrap')

const sliderImage = document.querySelectorAll('.slide-in')

function debounce(func, wait = 5, immediate = true) {
  let timeout
  return function () {
    let context = this,
      args = arguments
    let later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

function checkSlide(e) {
  sliderImage.forEach((sliderImage) => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2
    const imageBottom = sliderImage.offsetTop + sliderImage.height
    const isHalfShown = slideInAt > sliderImage.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active')
    }
  })
}

function addItem(e) {
  e.preventDefault()
  sliderImages[0].classList.add('active')
  const value = input.value
  console.log(value)
}

function removeItem() {
  sliderImages[0].classList.remove('active')
  addEmail.reset()
}

const openModal = () => {
  modal.classList.remove('hidden')
}

const closeModal = () => {
  modal.classList.add('hidden') //
  sliderImages[0].classList.remove('hidden')
  modalH1.innerText = '반갑습니다!'
  modalLi.innerText = '로그인'
  loginContent.querySelector('img').src =
    '../public/images/signup_modal/sendmail_img.svg'
  document.querySelector('.email_form_submit').value = '로그인'
  modalSpan.innerHTML = '아직 회원이 아니신가요?'
  modalChangeBtn.innerText = '회원가입'
  removeItem()
}

function changeRegist() {
  modalH1.innerText = '환영합니다!'
  modalLi.innerText = '회원가입'
  loginContent.querySelector('img').src =
    '../public/images/signup_modal/regist_send_mail.svg'
  document.querySelector('.email_form_submit').value = '회원가입'
  modalSpan.innerHTML = '이미 계정이 있으신가요?'
  modalChangeBtn.innerText = '로그인'
}

function changeLink(e) {
  if (submit.value == '회원가입') {
    e.preventDefault()
    modalH1.innerText = '반갑습니다!'
    modalLi.innerText = '로그인'
    modalSpan.innerHTML = '아직 회원이 아니신가요?'
    modalChangeBtn.innerText = '회원가입'
    loginContent.querySelector('img').src = '../public/images/sendmail.svg'
    document.querySelector('.email_form_submit').value = '로그인'
    removeItem()
  } else if (submit.value == '로그인') {
    e.preventDefault()
    modalH1.innerText = '환영합니다!'
    modalLi.innerText = '회원가입'
    modalSpan.innerHTML = '이미 계정이 있으신가요?'
    modalChangeBtn.innerText = '로그인'
    loginContent.querySelector('img').src = '../public/images/sendmail-reg.svg'
    document.querySelector('.email_form_submit').value = '회원가입'
    removeItem()
  }
}

regBtn.addEventListener('click', openModal)
regBtn.addEventListener('click', changeRegist)
modalChangeBtn.addEventListener('click', changeLink)
closeBtn.addEventListener('click', closeModal)
signUpBtn.addEventListener('click', openModal)
window.addEventListener('scroll', debounce(checkSlide))
addEmail.addEventListener('submit', addItem)
