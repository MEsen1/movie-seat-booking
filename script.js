const notOccupiedSeats = document.querySelectorAll(".row .seat:not(occupied)");

const selectBox = document.querySelector("#movie");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const container = document.querySelector(".container");

//*we are using change/onchange with select

selectBox.addEventListener("change", (e) => {
  //*callback for functional programming
  updateMovieInfo(e.target.value);
  console.log(e.target.value);
});

const updateMovieInfo = (price, e) => {
  let selectedSeats = document.querySelectorAll(".row .seat .selected");

  total.innerHTML = price;
  //   const seatsIndexArray = [...selectedSeats]
  //     .map((seat) => [...notOccupiedSeats])
  //     .indexOf(seat);

  const selectedSeatCount = selectedSeats.length;
  count.innerText = selectedSeatCount;
  film.innerText =
    selectBox.options[selectBox.selectedIndex].innerText.split("(")[0];
  total.innerText = selectedSeatCount * price;
};

container.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target.className);
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }

  let price = selectBox.options[selectBox.selectedIndex].value;
  updateMovieInfo(price);
});
