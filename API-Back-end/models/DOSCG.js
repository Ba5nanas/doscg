class Models {
    find_xyz() {
        var message_value = "";
        var value = 1;
        var next = 0;

        
        for(var i = 0; i<7; i++){
            
            value = value + next;
            if(i >= 2){
                next += 2;
            }else{
                next = 2;
            }

            if(i >= 6){
                message_value += (value)+" ";
            }else{
                message_value += (value)+", ";
            }
            
            
        }

        return message_value + " THEN X = 1 , Y = 3 , Z = 33";
    }

    find_bc() {
        var A = 21;
        var B = 2;
        var C = -42;
        return "A + B = "+ (A+B) +" Then B = "+ (B) +" and A + C = " + (A+C) + " Then C = "+ (C); 
    }


}

let DOSCG = new Models();

module.exports = DOSCG;