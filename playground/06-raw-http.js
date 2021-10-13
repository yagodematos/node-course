const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=8045ce1e19ccec1018c44f2a376fe052&query=40,-75";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunck) => {
    data += chunck.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
