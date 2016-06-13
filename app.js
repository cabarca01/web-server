/**
 * Created by cabarca on 13/06/16.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

// middleware
var middleware = require('./middleware.js');
app.use(middleware.logger); // Application level middleware

// Routing
app.get('/about', middleware.requireAuthentication, function (req, res){
    res.send('About Us!')
});
// publicly expose static webpages
app.use(express.static(__dirname + '/public'));
// Listener
app.listen(PORT, function (){
    console.log('Started Express server on ' + PORT)
});