const express = require("express");
const router = express.Router();
const { updateUser, verifyToken } = require("../controllers/UserController");

// Định nghĩa API cập nhật user
router.put("/update", verifyToken, updateUser);

module.exports = router;
