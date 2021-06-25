const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


/**
 * Make sure the user is logged in
 **/

function ensureUserLoggedIn(req, res, next) {
    let token = _getToken(req);                 //GET THE TOKEN

    try {
        jwt.verify(token, SECRET_KEY);              //VERIFY THE TOKEN. THROW AN ERROR IF TOKEN IS INVALID OR MISSING
       
        //AFTER TOKEN IS PASSED LET THE NEXT MIDDLEWARE RUN IF IT'S OK
        next();                                     
    } catch (err) {
        res.status(401).send({ error: 'Unauthorized' });
    }
}


/**
  MAKES SURE USER ONLY HAS ACCES TO THEIR PAGE,
  i.e. userId in token === userId in URL param
 **/

function ensureSameUser(req, res, next) {
    let token = _getToken(req);

    try {
        // THROW AN ERROR IF TOKEN IS INVALID OR MISSING
       
        let payload = jwt.verify(token, SECRET_KEY);

        //AFTER TOKEN IS PASSED LET THE NEXT MIDDLEWARE RUN IF IT'S OK
        if (payload.userId === Number(req.params.userId)) {
            next();
        } else {
            res.status(401).send({ error: 'Unauthorized' }); // DISPLAY 401 -- UNAUTHORIZED ACCESS
        }
    } catch (err) {
        res.status(401).send({ error: 'Unauthorized' });
    }
}


/**
 * Return the JWT token if found, else return ''
 * Authorization header string looks like: "Bearer <token>"
 **/

function _getToken(req) {
    // Return '' if header not found
    if ( !('authorization' in req.headers) ) {
        return '';
    }

    // Split header into 'Bearer' and token
    let authHeader = req.headers['authorization'];
    let [str, token] = authHeader.split(' ');

    return (str === 'Bearer') ? token : '';
}


module.exports = {
    ensureUserLoggedIn,
    ensureSameUser
};