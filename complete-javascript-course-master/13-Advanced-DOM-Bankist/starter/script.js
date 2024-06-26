'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

Message.style.height = Number.parseFloat(getComputedStyle(message).height,
10) + 30 + 'px';

document.documentElement.style.setProperty
('--color-primary','orangered');

//Data attritubtes
data-version-number = '3.0'
console.log(0)

//Classes

logo.classList.add('c');
logo.classList.remove('c');

const btnScrollTo = 

Event propogation

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.chi)
logo.classList.add('c');
logo.classList.remove('c');

const btnScrollTo = 
 
Event propogation

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.chi)10) + 30 + 'px';

document.documentElement.style.setProperty
('--color-primary','orangered');

//Data attritubtes
data-version-number = '3.0'
console.log(0)

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.chi)10) + 30 + 'px';

document.documentElement.style.setProperty
('--color-primary','orangered');

//Data attritubtes
data-version-number = '3.0'
console.log(0)
Event propogation

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.chi)10) + 30 + 'px';

document.documentElement.style.setProperty
('--color-primary','orangered');

//Data attritubtes
data-version-number = '3.0'
console.log(0)

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.chi)10) + 30 + 'px';

document.documentElement.style.setProperty
('--color-primary','orangered');

//Data attritubtes
data-version-number = '3.0'
console.log(0)
