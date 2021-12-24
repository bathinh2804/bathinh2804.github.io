const buyBtns = document.querySelector(".btn");
/* Dùng chọn khi chỉ có 1 elements */
const modal = document.querySelector(".js-modal");

const modalContainer = document.querySelector(".js-modal-container");
function showbuytickets() {
    modal.classList.add("open");
  }
  function closebuytickets() {
    modal.classList.remove("open");
  } 
  modalContainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  buyBtns.addEventListener("click", showbuytickets);
  modal.addEventListener("click", closebuytickets);