// GET YOUR OWN API KEY AT exchangerate-api.com
const key = "YOUR_API_KEY";

const url = new URL(document.location.href);
const base = url.searchParams.get("base");
const target = url.searchParams.get("target");

const rate = document.querySelector("#rate");

const baseUrl = `https://v6.exchangerate-api.com/v6/${key}/pair/${base}/${target}`;

fetch(baseUrl)
  .then((response) => {
    if (!response.ok) {
      throw "Invalid API call";
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    rate.textContent = data.conversion_rate;
  })
  .catch((error) => {
    console.error("There was an error", error);
  });
