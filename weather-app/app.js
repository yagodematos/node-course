const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Provide a address");
  return;
}

geocode(address, (error, { latitude, longitude, location } = {}) => {
  if (error) {
    console.log(error);
  } else {
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        console.log("Error", error);
      } else {
        console.log(location);
        console.log(forecastData);
      }
    });
  }
});
