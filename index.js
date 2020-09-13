const express = require("express");
const app = express();
app.listen(3000, () => console.log("Listening at 3000"));
app.use(express.static("public"));
app.use(
  express.json({
    limit: "1MB",
  })
);
app.post("/api", (request, response) => {
  console.log(request.body);
  const data = request.body;

  response.json({
    status: "success",
    latitude: data.lat,
    longitude: data.lon,
  });
});