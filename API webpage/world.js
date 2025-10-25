const apiURL = "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population";

const flagsContainer = document.getElementById("flags");
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const regionSelect = document.getElementById("regions");
const darkBtn = document.getElementById("dark");

let countriesData = [];

async function getCountries() {
  console.log("Fetching from:", apiURL);
  try {
    const res = await fetch(apiURL);
    console.log("Status:", res.status);
    const data = await res.json();
    console.log("Received:", data);

    countriesData = data;
    displayCountries(countriesData);
  } catch (err) {
    console.error("Error loading countries:", err);
    flagsContainer.innerHTML = "<p>Unable to load countries data.</p>";
  }
}

function displayCountries(data) {
  flagsContainer.innerHTML = "";
  data.forEach((country) => {
    const card = document.createElement("div");
    card.classList.add("cards");
    card.innerHTML = `
      <img src="${country.flags.png}" alt="${country.name.common}">
      <h2>${country.name.common}</h2>
      <p><b>Population:</b> ${country.population.toLocaleString()}</p>
      <p><b>Region:</b> ${country.region}</p>
      <p><b>Capital:</b> ${country.capital ? country.capital[0] : "N/A"}</p>
    `;
    flagsContainer.appendChild(card);
  });
}

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  );
  displayCountries(filtered);
});

regionSelect.addEventListener("change", () => {
  const region = regionSelect.value;
  if (region === "none") {
    displayCountries(countriesData);
  } else {
    const filtered = countriesData.filter(
      (country) => country.region === region
    );
    displayCountries(filtered);
  }
});


let darkMode = false;
darkBtn.addEventListener("click", () => {
  var flag = document.getElementById("flags")
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? "#1e1e1e" : "rgb(237, 237, 237)";
  document.body.style.color = darkMode ? "white" : "black";
  document.querySelectorAll(".cards").forEach((card) => {
    flag.style.backgroundColor =  darkMode ? "#2a2a2a" : "white";
    card.style.backgroundColor = darkMode ? "#2a2a2a" : "white";
    card.style.color = darkMode ? "white" : "black";
  });
  darkBtn.textContent = darkMode ? " ☀︎ Light Mode" : "⏾ Dark Mode";
});

getCountries();
