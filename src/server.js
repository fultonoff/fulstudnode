const express = require("express");
const path = require("path");
const cons = require('consolidate');
const app = express();
const port = process.env.PORT|| 5000;




const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')


app.engine('html', cons.swig)
app.set('views', viewsPath);
app.set('view engine', 'html');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// app.use("/public", express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
  res.render(( "index"));
});

app.get("/contact", (req, res) => {
  res.render(( "contact"));
});

app.get("/about", (req, res) => {
  res.render(( "about"));
});

app.get("/faq", (req, res) => {
  res.render(( "faq"));
});

app.get("/policy", (req, res) => {
  res.render(( "policy"));
});

app.get("/countries", (req, res) => {
  res.render(( "portfolio"));
});

app.get("/services", (req, res) => {
  res.render(( "services"));
});

app.get("/team", (req, res) => {
  res.render(( "team"));
});

app.get("/visa", (req, res) => {
  res.render(( "visa"));
});

app.get("/terms", (req, res) => {
  res.render(( "terms"));
});

app.get("*", (req, res) => {
  res.render(( '404', "error"));
});


// app.use("/public", express.static(path.join(__dirname, "static")));
// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public", "contact.html"));
// });
// app.use("/public", express.static(path.join(__dirname, "./public")));
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public", "about.html"));
// });

// app.use("/public", express.static(path.join(__dirname, "./public")));
// app.get("/faq", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public", "faq.html"));
// });

// app.use("/public", express.static(path.join(__dirname, "./public")));
// app.get("/policy", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public", "policy.html"));
// });

// app.use("/public", express.static(path.join(__dirname, "./public")));
// app.get("/countries", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public", "portfolio.html"));
// });

// app.use("/public", express.static(path.join(__dirname, "static")));
// app.get("/services", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public", "services.html"));
// });

// app.use("/public", express.static(path.join(__dirname, "./public")));
// app.get("/team", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public", "team.html"));
// });

// app.use("/public", express.static(path.join(__dirname, "./public")));
// app.get("/visa", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public", "visa.html"));
// });

// app.use("/public", express.static(path.join(__dirname, "./public")));
// app.get("/terms", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public", "terms.html"));
// });


// app.get("*", function (req, res) {
//   if (req.accepts("html")) {
//     res.sendFile(path.join(__dirname, "./public", "error.html"));
//     return;
//   }
// });

app.listen(port, ()=>{
  console.log(`Server is up on port ${port}`);
});
