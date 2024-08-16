const express = require("express");
const app = express();

app.set("secret", "fdjasofjoas");

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/login", express.static(__dirname + "/login"));

require("./plugins/db")(app);
require("./routes/admin/index")(app);
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
