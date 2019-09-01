var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/admin", function(req, res, next) {
  res.render("pages/admin", { pageLink: "/admin", buttonColor: "is-warning" });
});

router.get("/recruiter", function(req, res, next) {
  res.render("pages/recruiter", {
    pageLink: "/recruiter",
    buttonColor: "is-link"
  });
});

router.get("/consultant", function(req, res, next) {
  res.render("pages/consultant", {
    pageLink: "/consultant",
    buttonColor: "is-danger"
  });
});
module.exports = router;
