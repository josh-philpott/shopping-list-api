var express = require("express")
var router = express.Router()
var uuidv1 = require("uuid/v1")

const shoppingLists = {
  "shopping-list-one": [
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
  ]
}

/* GET users listing. */
router.get("/:id", function(req, res, next) {
  res.send(shoppingLists[req.params.id])
})

/* POST with id */
router.post("/:id", function(req, res, next) {
  //TODO: Validation

  if (req.body[req.params.id]) {
    shoppingLists[req.params.id] = req.body[req.params.id]
  } else {
    shoppingLists[req.params.id] = []
  }
  res.send(shoppingLists[req.params.id])
})

/* POST with no id creates a new list and returns the id... If it contains a list, saves the list */
router.post("/", function(req, res, next) {
  const key = uuidv1()
  if (req.body.shoppingList) {
    shoppingLists[key] = req.body.shoppingList
  } else {
    shoppingLists[key] = []
  }
  res.send({ id: key, shoppingList: shoppingLists[key] })
})
module.exports = router
