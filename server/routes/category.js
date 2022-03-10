const express = require("express");
const router = express.Router();
const { create, list, read, update, removeSoft } = require("../controllers/category");

router.post("/category", create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", update);
router.patch("/category/:slug", removeSoft);

module.exports = router;