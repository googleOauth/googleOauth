'use strict';
require('dotenv').config();
const superagent = require('superagent');
const User = require('./users');
console.log('I am in hereeeeee')
// Provider data
const tokenServerUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
const remoteAPI = 'https://accounts.google.com/o/oauth2/v2/auth';


//user data
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI; //http://localhost:3000/g_oath


// exported function
module.exports = async function (req, res, next) {
    const code = req.query.code;
    console.log('1. CODE:', code);
    const remoteToken = await exchangeCodeForToken(code);
    console.log('2. ACCESS TOKEN', remoteToken);

}

// Functions
async function exchangeCodeForToken(code) {
    let params = {
        'client_id': clientId,
        'redirect_uri': REDIRECT_URI,
        'response_type': 'token',
        'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
        'include_granted_scopes': 'true',
        'state': 'pass-through value'
    };
const tokenResponse = await superagent.get(tokenServerUrl).query(params);
// const accessToken = tokenResponse.body.

console.log('token Resposne', tokenResponse)
console.log( tokenResponse.body.access_token)


}



