import FormValidator from './FormValidator.js'

const slider = document.querySelector('.slider')
const signInButton = slider.querySelector('.slider__overlayItem_pos_left .slider__button')
const signUpButton = slider.querySelector('.slider__overlayItem_pos_right .slider__button')

const loginForm = document.querySelector('.form_type_login')
const registerForm = document.querySelector('.form_type_register')

const createAccButton = slider.querySelector('.slider__baseItem_pos_left .slider__toggler')
const registerButton = slider.querySelector('.slider__baseItem_pos_right .slider__toggler')

const loginFormValidator = new FormValidator(loginForm)
const registerFormValidator = new FormValidator(registerForm)

loginFormValidator.turnOnValidation()
registerFormValidator.turnOnValidation()

function toggleSlider () {
  slider.classList.toggle('slider_active_left')
  slider.classList.toggle('slider_active_right')
}

registerButton.addEventListener('click', toggleSlider)
createAccButton.addEventListener('click', toggleSlider)

signInButton.addEventListener('click', toggleSlider)
signUpButton.addEventListener('click', toggleSlider)
