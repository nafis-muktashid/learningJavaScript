"use strict";


//document.querySelctor - Selects only "one" elemnts with asociatied class name;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

//document.querySelectorAll - Selects all the elements with same class_name/ID_name;
const btnsOpenModal = document.querySelectorAll(".show-modal");


const openModalFunc = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalFunc = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};


//Need a for loop to access and use all the elements selected with the "querySelectorAll";
for (let i = 0; i < btnsOpenModal.length; ++i) {
  btnsOpenModal[i].addEventListener("click", openModalFunc);
}

btnCloseModal.addEventListener("click", closeModalFunc);
overlay.addEventListener("click", closeModalFunc);



//Listening event from Keyboard
//EventListener returns an object.
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalFunc();
  }
});


