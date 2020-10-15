var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      id: 1,
      title: "React Game!",
      description: "Tic tac toe game created using Create Reactapp.",
      URL: "http://heroku/myapp/game/",
    },
    {
      id: 2,
      title: "Onlinestore",
      description: "Online store created with HTML, CSS and JavaScript.",
      URL: "https://git.com/myrepos/shop/index",
    },
  ]);
});

module.exports = router;
