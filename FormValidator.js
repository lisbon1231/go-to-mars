class FromValidator {
  constructor (form, { inputClass, buttonClass, errorClass, inputErrorClass, errorActiveClass } = FromValidator.defaultConfig) {
    this._formElement = form
    this._inputs = [...this._formElement.querySelectorAll(`.${inputClass}`)]
    this._submitButton = this._formElement.querySelector(`.${buttonClass}`)
    this._inputClass = inputClass
    this._inputErrorClass = inputErrorClass
    this._errorClass = errorClass
    this._errorActiveClass = errorActiveClass
  }

  _findErrorElement (input) {
    const classPrefix = `${this._inputClass}_type_`
    const type = [...input.classList].find(className => className.startsWith(classPrefix))
      .split(classPrefix).pop()
    return this._formElement.querySelector(`.${this._errorClass}_type_${type}`)
  }

  _hideError (input) {
    const error = this._findErrorElement(input)
    input.classList.remove(this._inputErrorClass)
    error.classList.remove(this._errorActiveClass)
    error.textContent = ''
  }

  _showError (input) {
    const error = this._findErrorElement(input)
    input.classList.add(this._inputErrorClass)
    error.classList.add(this._errorActiveClass)
    error.textContent = input.validationMessage
  }

  _checkInputValidity (input) {
    input.validity.valid ? this._hideError(input) : this._showError(input)
  }

  _validateInputs () {
    this._inputs.forEach(this._checkInputValidity, this)
  }

  turnOnValidation () {
    this._formElement.addEventListener('submit', e => {
      e.preventDefault()
      this._validateInputs()
    })

    this._formElement.addEventListener('input', e => {
      this._checkInputValidity(e.target)
    })
  }
}

FromValidator.defaultConfig = {
  inputClass: 'form__input',
  buttonClass: 'form__button',
  errorClass: 'form__error',
  inputErrorClass: 'form__input_error',
  errorActiveClass: 'form__error_active'
}

export default FromValidator
