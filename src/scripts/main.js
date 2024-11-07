'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

// eslint-disable-next-line promise/param-names, no-unused-vars
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

function addMessage(text, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';

  if (isError) {
    messageDiv.classList.add('error-message');
  }
  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);
}

promise1
  .then((message) => {
    addMessage(message);
  })
  .catch((error) => {
    addMessage(error, true);
  });

promise2
  .then((message) => {
    addMessage(message);
  })
  .catch((error) => {
    addMessage(error, true);
  });
