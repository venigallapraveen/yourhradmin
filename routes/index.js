var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/admin", function(req, res, next) {
  res.render("pages/admin", {
    pageLink: "https://forms.gle/dQaZ8DbidvFRoDaZ7",
    buttonColor: "is-warning"
  });
});

router.get("/recruiter", function(req, res, next) {
  res.render("pages/recruiter", {
    pageLink: "https://forms.gle/dQaZ8DbidvFRoDaZ7",
    buttonColor: "is-link"
  });
});

router.get("/consultant", function(req, res, next) {
  res.render("pages/consultant", {
    pageLink: "https://forms.gle/dQaZ8DbidvFRoDaZ7",
    buttonColor: "is-danger"
  });
});
module.exports = router;
