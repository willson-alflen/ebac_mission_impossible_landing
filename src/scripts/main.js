/* open/close movie trailer */
function toggle() {
  let trailer = document.querySelector(".trailer");
  trailer.classList.toggle("active");
}

/* open/close synopsis */
function toggleSynopsis() {
  let synopsis = document.querySelector(".synopsis");
  synopsis.classList.toggle("active");
}

/* open/close form */
function toggleForm() {
  let form = document.querySelector(".form-insider");
  form.classList.toggle("active");
}

/* check form */
let email = document.getElementById("inputEmail");
let birthDate = document.getElementById("inputBirthDate");
let btnSubmit = document.getElementById("btnSubmit");

email.addEventListener("input", function () {
  checkFormvalidity();
});

birthDate.addEventListener("input", function () {
  checkFormvalidity();
});

function checkFormvalidity() {
  if (email.value !== "" && birthDate.value !== "") {
    btnSubmit.style.opacity = "1";
  } else {
    btnSubmit.style.opacity = "0.4";
  }
}

/* close menu when an item is clicked */
document.querySelectorAll(".navbar-nav .nav-link").forEach(function (item) {
  item.addEventListener("click", function () {
    var navbarNav = document.getElementById("navbarNav");
    if (navbarNav.classList.contains("show")) {
      navbarNav.classList.remove("show");
    }
  });
});

/* button back to top */
let btnBackToTop = document.getElementById("btnBackToTop");

window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 100) {
    btnBackToTop.classList.add("show");
  } else {
    btnBackToTop.classList.remove("show");
  }
});

btnBackToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
