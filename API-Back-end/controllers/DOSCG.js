var models = require("../models/DOSCG.js");
var path = require('path');

class Controller {
    object_1 (req, res){
        var message = "X, Y, 5, 9, 15, 23, Z - Please create a new function for finding X, Y, Z value <br> Answer : ";
        var message_string = models.find_xyz();
        res.send(message+message_string);
    }

    object_2 (req, res){
        var message = "If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding B and C value <br> Answer : ";
        var message_string = models.find_bc();
        res.send(message+message_string);
    }

    object_3 (req, res){
        res.sendfile(path.resolve('view/google_map.html'));
    }
}

let DOSCG = new Controller();

module.exports = DOSCG;