
const path = require('path');

/** 
 * this helper method returns view file path html
 * Eg: index will convert to view_path/index.html
 * Eg : user.home will convert to view_path/user/home.html
 * */
module.exports = (viewName) => {
    return path.resolve( [__dirname, "/../views/", viewName.split(".").join("/"), ".html" ].join("") ); 
}