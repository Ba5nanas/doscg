// Call Express
var express = require('express');
// Init Express
var app = express();
var router = express.Router();
// Get Controller SCG
var controller = require('./controllers/DOSCG');
// Create Routers
//--- Object 1 = X, Y, 5, 9, 15, 23, Z  - Please create a new function for finding X, Y, Z value
router.get('/object-1', controller.object_1 );
//--- If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding B and C value
router.get('/object-2', controller.object_2 );  
//--- Please use “Google API” for finding the best way to go to Central World from SCG Bangsue 
router.get('/object-3', controller.object_3 );
// Active router
app.use('/', router);
// Export for main.js
module.exports = app;