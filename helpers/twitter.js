/** import twitter client */
const twitterClient = require("../helpers/twitterClient");


module.exports.getFriends = (username) => {
    return twitterClient.get('friends/list', { screen_name : username, count : 200}).then(response => {
        return response.users;
    });
};

module.exports.getMutualFriends = async (fuser, suser) => {

    let ffriendids = (await this.getFriends(fuser)).map( user => user.id_str ); // get first user friend ids
    let friendidshashmap = ffriendids.reduce( (map, userid) => { 
        map.set(userid, 1);  
        return map;
    }, new Map());

    let sfriends = await this.getFriends(suser); // get second user friends

    /** now get all fiends */
    let commonfriends = [];
    sfriends.forEach(user => {
        if(friendidshashmap.has(user.id_str)) {
            commonfriends.push({
                id : user.id,
                name : user.name,
                screen_name : user.screen_name,
                url : user.url,
                profile_image_url : user.profile_image_url,
                description : user.description
            });
        }
    });

    return commonfriends;
};