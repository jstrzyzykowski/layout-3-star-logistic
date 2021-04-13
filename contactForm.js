const form = document.querySelector('.footer__form form');
const confirmMessage = document.querySelector('.footer .form-confirm');
const userName = document.getElementById('username');
const userEmail = document.getElementById('useremail');
const userMessage = document.getElementById('usermessage');
const errorBoxes = document.querySelectorAll('.footer__form form span');

const EMAIL_JS = {
  userid: 'YOUR_USER_ID',
  serviceid: 'YOUR_SERVICE_ID',
  templateid: 'YOUR_TEMPLATE_ID',
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  cleanErrors();
  const validateResult = validateForm();

  if(validateResult.valid) {
    initializeSender(EMAIL_JS);
    sendMessage(EMAIL_JS, form);
    cleanForm();
    confirmMessage.classList.add('active');
    setTimeout(() => {
      confirmMessage.classList.remove('active');
    }, 4000);
  } else {
    for (const errorName in validateResult.errors) {
      const span = document.getElementById(`${errorName}-error`);
      span.innerText = validateResult.errors[`${errorName}`];
      span.classList.add('active');
    }
  }
});

function isEmpty(string) {
  if (string.trim() === '') return true;
  else return false;
};

function isEmail(email) {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(email.match(emailRegEx)) return true;
  else return false;
};

function validateForm() {
  let errors = {};
  if(isEmpty(userName.value)) errors.username = 'Must not be empty';
  
  if(isEmpty(userEmail.value)) errors.useremail = 'Must not be empty';
  else if(!isEmail(userEmail.value)) errors.useremail = 'Email is not valid';

  if(isEmpty(userMessage.value)) errors.usermessage = 'Must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

function cleanErrors() {
  errorBoxes.forEach((box) => {
    if(box.classList.contains('active')) {
      box.innerText = '';
      box.classList.remove('active');
    }
  })
}

function cleanForm() {
  userName.value = '';
  userEmail.value = '';
  userMessage.value = '';
}

function initializeSender({ userid }) {
  const userId = userid;
  if(userId.trim() === '') {
    console.log('Must not be empty');
    return false;
  }
  emailjs.init(userId);
}

function sendMessage({serviceid, templateid}, form) {
  emailjs.sendForm(serviceid, templateid, form)
  .then(function() {
      console.log('SUCCESS!');
    }, function(error) {
      console.log('FAILED...', error);
    });
}