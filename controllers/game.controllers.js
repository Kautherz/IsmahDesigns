const game = require('../models/game.model');
class Controllers{
    getProduct(request, response){
        const {productID} = request.query;
        const data = game.get(productID);
        if(data){
            data["success"] = true;
            response.json(data);
        }
        else{
            response.json({"success": false})
        }
    }

    getGender(request, response){
        const {gender} = request.query;
        const {type} = request.query;
        var data = {};
        data = game.getGenderDictionary(gender, type);
        const num_data = Object.keys(data).length;
        if(num_data == 0){
            response.json({"success": false});
        }
        else{
            response.json(data);
        }
    }
}

module.exports = new Controllers();