const Ratings = document.querySelectorAll(".rating");

const container = document.getElementById("container");
const submit = document.getElementById("btn");

let selectedRating = "";

Ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    removeActive();
    selectedRating = rating.innerText;
    rating.classList.add("active");
 
  })
})


function removeActive() {
  Ratings.forEach((rating) => {
    rating.classList.remove("active");
    rating.parentNode.classList.remove("active");
  })
}

submit.addEventListener("click", () => {
  if (selectedRating!=="") {
    container.innerHTML = `
    <strong>Thank You!<strong><br><br>
    <strong>Rating: ${selectedRating}<strong><br><br>
    <p>We'll use the rating to improve our customer Service<p>
    `
  }
 
})

