var express = require("express")
var router = express.Router()
var uuidv1 = require("uuid/v1")

/* GET users listing. */
router.get("/:id", function(req, res, next) {
  res.send([
    {
      id: uuidv1(),
      category: "Produce",
      name: "Shallots",
      quantity: 1,
      inCart: false
    },
    {
      id: uuidv1(),
      category: "Produce",
      name: "Carrots",
      quantity: 2,
      inCart: false
    },
    {
      id: uuidv1(),
      category: "Meat",
      name: "Ground Turkey",
      quantity: 1,
      quantityType: "lbs",
      inCart: false
    },
    { id: uuidv1(), category: "Pantry", name: "Soy Sauce", inCart: false },
    {
      id: uuidv1(),
      category: "Pantry",
      name: "Rice Vinegar",
      inCart: false
    },
    {
      id: uuidv1(),
      category: "Pantry",
      name: "Brown Sugar",
      quantity: 2,
      quantityType: "cups",
      inCart: false
    },
    {
      id: uuidv1(),
      category: "Pantry",
      name: "Jasmine Rice",
      quantity: 1,
      quantityType: "cups",
      inCart: false
    }
  ])
})

module.exports = router
