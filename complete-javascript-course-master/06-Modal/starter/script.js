'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal'); // Fixed typo: 'close-model' to 'close-modal'
const btnsOpenModal = document.querySelectorAll('.show-modal');


const openModal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

    const closeModal = function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
       }
for (let i = 0; i < btnsOpenModal.length; i++) { // Removed the semicolon at the end of the for loop

    //this is when to pop open the modal
    btnsOpenModal[i].addEventListener('click', openModal);


//this is when we have to close
   btnCloseModal.addEventListener('click', closeModal);
   overlay.addEventListener('click',closeModal);








}




