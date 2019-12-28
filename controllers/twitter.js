const twitter = require("../helpers/twitter"); // import twitter helper
const api = require("../helpers/api"); // imrpot api helper



/** 
 * This twitter controller method returns all twitter mutual friends list 
 * it takes two params
 * fuser -> first user twitter screen name
 * suser -> second user twitter screen name
 */
module.exports.getMutualFriendsList = (req, res) => {

    twitter.getMutualFriends(req.params.fuser, req.params.suser)
        .then(list => {
            res.json(api.createResponse(true, "success", "Mutual friends list fetched successfully", list));
        })
        .catch(error => {
            console.log(error)
            res.json(api.createResponse(false, "failed", error[0].message));
        });
};