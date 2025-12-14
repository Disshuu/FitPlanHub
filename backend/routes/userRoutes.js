const express = require("express");
const { followTrainer, unfollowTrainer, getFeed } = require("../controllers/userController");
const router = express.Router();

router.post("/follow/:trainerId", followTrainer);
router.post("/unfollow/:trainerId", unfollowTrainer);
router.get("/feed", getFeed);

module.exports = router;
