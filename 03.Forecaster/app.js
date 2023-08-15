function attachEvents() {
  document
    .querySelector("#submit")
    .addEventListener("click", getWeatherDataForLocation);
}

async function getWeatherDataForLocation() {
  const locationName = document.querySelector("#location").value;
  const locationResponse = await (
    await fetch("http://localhost:3030/jsonstore/forecaster/locations")
  ).json();

  const location = locationResponse.find(
    (l) => l.name.toLowerCase() === locationName.toLowerCase()
  );

  const currentConditionsResponse = await (
    await fetch(
      `http://localhost:3030/jsonstore/forecaster/today/${location.code}`
    )
  ).json();

  console.log(currentConditionsResponse);

  const threeDayForecastResponse = await (
    await fetch(
      `http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`
    )
  ).json();

  console.log(threeDayForecastResponse);
}

attachEvents();
