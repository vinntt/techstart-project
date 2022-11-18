const {expressjwt:jwt} = require("express-jwt");

// https://github.com/auth0/express-jwt
// JWT Validation Middleware - protect the routes
//Instantiate the JWT token validation middleware
const isAuthenticated = jwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ["HS256"],
    requestProperty: "user",
    getToken: getTokenFromHeaders
});

// Function used to extracts the JWT token from the request's Authorization Headers.
function getTokenFromHeaders(req) {

    // Check if the token is available on the request Headers.
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {

        // Get the encoded token string and return it.
        const token = req.headers.authorization.split(" ")[1];

        return token;
    }

    return null;
}

//export the middleware so we can use it to create a protected route
exports.isAuthenticated = isAuthenticated;