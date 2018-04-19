let currentTab = 0 // Current tab is set to be the first tab (0)
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

const validateForm = () => {
  // This function deals with validation of the form fields
  let tab = true
  let input = true
  let i = true
  let valid = true
  tab = document.getElementsByClassName('tab')
  input = tab[currentTab].getElementsByTagName('input')
  // A loop that checks every input field in the current tab:
  for (i = 0; i < input.length; i++) {
    // If a field is empty...
    if (input[i].value === '') {
      // add an 'invalid' class to the field:
      input[i].classList.add('invalid')
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

const nextPrev = (n) => {
  // This function will figure out which tab to display
  let tab = document.getElementsByClassName('tab')
  // Exit the function if any field in the current tab is invalid:
  if (n === 1 && !validateForm()) return false
  // Hide the current tab:
  tab[currentTab].style.display = 'none'
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n
  // if you have reached the end of the form... :
  if (currentTab >= tab.length) {
    // ...the form gets submitted:
    document.getElementById('regForm').submit()
    return false
  }
  // Otherwise, display the correct tab:
  showTab(currentTab)
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
  console.log(tab)

  if (n === 0) {
    prevBtn.style.display = 'none'
  } else {
    prevBtn.style.display = 'inline'
  }
  if (n === (tab.length - 1)) {
    nextBtn.innerHTML = 'Submit'
  } else {
    nextBtn.innerHTML = '>'
  }

  console.log({
    n
  })

  tab[n].style.display = 'block'

  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

export const init = () => {
  prevBtn.addEventListener('click', () => nextPrev(-1))
  nextBtn.addEventListener('click', () => nextPrev(1))
  showTab(currentTab)
}

init()
