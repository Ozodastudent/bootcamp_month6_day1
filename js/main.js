const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const listEl = document.querySelector(".list");
const selectEl = document.querySelector(".type_select");
const yearInput = document.querySelector(".year_input");

function renderMovies(element) {
  const movieFragment = document.createDocumentFragment();
  element.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("card");
    listItem.classList.add("movie_card");
    const listImg = document.createElement("img");
    listImg.src = item.Poster;
    listImg.width = "150";
    listImg.height = "150";
    const listTitle = document.createElement("p");
    listTitle.textContent = `Title: ${item.Title}`;
    const listType = document.createElement("p");
    listType.textContent = `Type : ${item.Type}`;
    const listYear = document.createElement("p");
    listYear.textContent = `Year: ${item.Year}`;
    listItem.appendChild(listImg);
    listItem.appendChild(listTitle);
    listItem.appendChild(listType);
    listItem.appendChild(listYear);
    movieFragment.appendChild(listItem);
  });
  listEl.appendChild(movieFragment);
}
function renderUrl(inputValue, selectValues, yearValue) {
  fetch(
    `http://www.omdbapi.com/?apikey=f504a03b&s=${inputValue}&type=${selectValues}&y=${yearValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      renderMovies(data.Search);
    });
}
formEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  listEl.innerHTML = "";
  const inputValue = inputEl.value.trim();
  const selectValues = selectEl.value;
  const yearValue = yearInput.value;
  renderUrl(inputValue, selectValues, yearValue);
});
