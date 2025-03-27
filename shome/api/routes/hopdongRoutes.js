const express = require("express");
const router = express.Router();
const HopDongController = require("../controllers/HopDongController");

router.post("/thuephong", HopDongController.thuePhong);

module.exports = router;
