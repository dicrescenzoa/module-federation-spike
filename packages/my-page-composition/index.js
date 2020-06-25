const express = require("express");
const hbs = require("express-hbs");
var hbs_temp = hbs.create();
require('isomorphic-fetch');
const app = express();

app.engine('hbs', hbs.express3({}));

app.set("view engine", ".hbs");
app.set('views', __dirname + '/views');

hbs.registerHelper("increasePrice", function(price) {
  price += 10;
  return price;
});

hbs.registerAsyncHelper("includeFragment", async(url, cb) => {
  const remoteResponse = await fetch(url);
  const html = await remoteResponse.text();
  cb(new hbs_temp.SafeString(html));
});


app.get("/", (req, res) => {
  res.render("test", {
    layout: false,
    totalPrice: 300
  });
});

app.listen(8080, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Listening at http://localhost:8080/`);
});
