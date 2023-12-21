let showtext = document.querySelector(".text-show");
let changeSelect = document.querySelector(".change-select");

changeSelect.addEventListener(`change`, function () {
  showtext.classList.add("show-text");
});
