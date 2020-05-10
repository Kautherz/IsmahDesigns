const game = require('../models/game.model');
class Controllers{
    getGame(request, response){
        const id = request.params.id;
        const data = game.get(id);
        if(data){
            data["success"] = true;
            response.json(data);
        }
        else{
            response.json({"success": false})
        }
    }

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
}

module.exports = new Controllers();