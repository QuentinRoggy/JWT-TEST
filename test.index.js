require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.json({
    route: "/",
    authentication: false
  });
});

//Login route 
app.post("/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  let isPresent = false;
  let isPresnetIndex = null;

  for (let i = 0; i < database.length; i++ ) {
    if (database[i].name === name && database[i].password === password ) {
      isPresent = true;
      isPresnetIndex = i;
      break;
    }
  }

  if(isPresent) {
    const token = jwt.sign(database[isPresnetIndex], "secret");

    res.json({
      login: true,
      token,
      data: database[isPresnetIndex]
    });
  } else {
    res.json({
      login: false,
      error: "Please check name and password"
    });
  }
});

app.get("/auth", (req, res) => {
  const token = req.body.token;

  if (token) {
    const decode = jwt.verify(token, "secret");

    res.json({
      login: true,
      data: decode
    });
  } else {
    res.json({
      login: false,
      error: "error"
    });
  }
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});


// A fake database object.
let database = [
  {
      name: 'gfg',
      work: 'knowledge provider',
      password: 'abc'
  },
  {
      name: 'suryapratap',
      work: 'technical content writer',
      password: '123'
  }
];