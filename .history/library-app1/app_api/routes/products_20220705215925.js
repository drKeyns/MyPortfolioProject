var express = require("express");
var router = express.Router();

const productsController = require("../controllers/products"); // Підключення контролера

/* GET список книг. */
router.get("/", productsController.getList);

/* GET видалення книги за id. */
router.delete("/", productsController.delete);

/* POST Створення нової книги. */
router.post("/", productsController.add);

// Оновлення інформації про книгу після редагування
router.put("/", productsController.update);

/* Відображення інформації про одну книгу */
router.get("/:id", productsController.getById);

module.exports = router;
