let currentTab = 0 // Current tab is set to be the first tab (0)
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')

const validateForm = () => {
  // This function deals with validation of the form fields
  let valid = true
  const tab = document.getElementsByClassName('tab')
  const inputs = tab[currentTab].getElementsByTagName('input')
  // A loop that checks every input field in the current tab:
  for (const inp of inputs) {
    // If a field is empty...
    if (inp.value === '') {
      // add an 'invalid' class to the field:
      inp.classList.add('invalid')
      // and set the current valid status to false:
      valid = false
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName('step')[currentTab].classList.add('finish')
  }
  return valid // return the valid status
}

const selectTab = tabIndex => {
  const tabs = document.getElementsByClassName('tab')
  tabs[currentTab].style.display = 'none'
  currentTab = tabIndex
  if (currentTab >= tabs.length) {
    // ...the form gets submitted:
    document.getElementById('reg-form').submit()
    return false
  }
  showTab(currentTab)
}

const prev = () => selectTab(currentTab - 1)
const next = () => {
  if (!validateForm()) return false
  return selectTab(currentTab + 1)
}




const fixStepIndicator = (n) => {
  // This function removes the 'active' class of all steps...
  let step = document.getElementsByClassName('step')
  let i
  for (i = 0; i < step.length; i++) {
    step[i].className = step[i].className.replace(' active', '')
  }
  // ... and adds the 'active' class to the current step:
  step[n].classList.add('active')
}

const showTab = (n) => {
  const tab = document.getElementsByClassName('tab')

  if (n === 0) {
    prevBtn.style.visibility = 'hidden'
  } else {
    prevBtn.style.visibility = ''
  }
  if (n === (tab.length - 1)) {
    nextBtn.textContent = 'Submit'
  } else {
    nextBtn.textContent = '>'
  }


  tab[n].style.display = 'block'

  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

export const init = () => {
  prevBtn.addEventListener('click', prev)
  nextBtn.addEventListener('click', next)
  const inputs = document.querySelectorAll('.tab input')
  for (const inp of inputs) {
    inp.addEventListener('input', ev => ev.target.classList.remove('invalid'))
  }
  showTab(currentTab)
}

init()
