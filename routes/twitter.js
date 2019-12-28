var router = require('express').Router();
const twitterController = require("../controllers/twitter");


/** register twitter get mutual friends api route */
router.get("/friends/:fuser/:suser/mutual", twitterController.getMutualFriendsList);


module.exports = router;
