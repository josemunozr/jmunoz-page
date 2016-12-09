var express = require("express");

var app = express();
var port = process.env.PORT || 3000;


/* Middlewares */
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'jade')

/* direccionamiento */
app.get("/", function (req, res) {
  res.render('index');
})

/* listen */
app.listen(port, function () {
  console.log('Listen server in http://localhost:' + port);
})