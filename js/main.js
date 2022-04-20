let form = document.querySelector("#main-form form");

form.onsubmit = (e) => {
  e.preventDefault();
  alert("Form successfully submitted!");
};
