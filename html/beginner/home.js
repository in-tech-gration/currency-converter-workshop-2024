function initSelector(cssSelector) {
  const currencies = document.querySelectorAll(
    `${cssSelector} .currency-button`
  );

  currencies.forEach((item) => {
    item.addEventListener("click", (event) => {
      document
        .querySelector(`${cssSelector} .currency-button.selected`)
        ?.classList.remove("selected");

      event.currentTarget.classList.add("selected");
    });
  });
}

initSelector(".base-currencies");
initSelector(".target-currencies");
const error = document.querySelector("#error");

document.querySelector("#track-button").addEventListener("click", () => {
  const base = document.querySelector(
    ".base-currencies .currency-button.selected"
  )?.dataset.currencyCode;
  const target = document.querySelector(
    ".target-currencies .currency-button.selected"
  )?.dataset.currencyCode;

  if (!base) {
    error.textContent = "Please select a base currency.";
    return;
  }
  if (!target) {
    error.textContent = "Please select a target currency.";
    return;
  }
  if (base === target) {
    error.textContent = "Please select different currencies.";
    return;
  }
  const url = `converter.html?base=${base}&target=${target}`;
  window.location.href = url;
});
