'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal'); // Fixed typo: 'close-model' to 'close-modal'
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) { // Removed the semicolon at the end of the for loop
    btnsOpenModal[i].addEventListener('click', function () {
        console.log('Button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });


   btnCloseModal.addEventListener('click',  function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
   }) 
}




