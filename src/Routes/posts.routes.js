const express = require("express");
const posts = require("../Controllers/posts.controllers");
const router = express.Router();

router.get("/", posts.home);
router.get("/hiburan", posts.getHiburan);
router.post("/hiburan", posts.postHiburan);
router.get("/hiburan/:id", posts.getHiburanBy);

module.exports = router;
