const followTrainer = (req, res) => res.send(`Followed trainer ${req.params.trainerId} `);
const unfollowTrainer = (req, res) => res.send(`Unfollowed trainer ${req.params.trainerId} `);
const getFeed = (req, res) => res.send("Personalized feed working ");
module.exports = { followTrainer, unfollowTrainer, getFeed };
