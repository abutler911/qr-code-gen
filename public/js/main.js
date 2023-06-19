console.log("hooked into main js");
let form = document.getElementById("qrForm");

// add event listener for form submission
form.addEventListener("submit", function () {
  // this code runs when the form is submitted
  // set timeout to clear form after submission
  setTimeout(function () {
    form.reset();
  }, 100);
});
