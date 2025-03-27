const express = require("express");
const router = express.Router();
const PhongController = require("../controllers/PhongController");

router.get("/", PhongController.getAllPhong);
router.get("/:id", PhongController.getPhongById);
router.post("/rent", PhongController.rentRoom);

module.exports = router;
