const inventory = require('../models/inventory');
const userBags = require('../models/bag');

class Controllers{


    getProduct(request, response){
        const {productID} = request.query;
        const data = inventory.get(productID);
        if(data){
            data["success"] = true;
            response.json(data);
        }
        else{
            response.json({"success": false})
        }
    }

    addBag(request, response){
        const sessionID = request.session.id;
        const {productID, size, quantity} = request.body;
        const bag = userBags.add(sessionID, productID, size, quantity);

        if (bag){
            //userBags[sessionID].push(productIDs); 
            response.json({'success': true, 'bag': bag });
        }
        else{
           response.json({'success': false});
        }
    }

    getBag(request, response){
        const sessionID = request.session.id;
        const bag = userBags.get(sessionID);

        if(bag){
            response.json(bag);
        }
        else{
             response.json({'success': false})

        }
    }

    setBag(request, response){

        const sessionID = request.session.id;
        const {products} = request.body;
        const bag = userBags.set(sessionID, products);


        if (bag){
            //userBags[sessionID].push(productIDs); 
            response.json({'success': true, 'bag': bag });
        }
        else{
           response.json({'success': false});
        }
    }
    
    getGender(request, response){
        const {gender} = request.query;
        const {type} = request.query;
        var data = {};
        data = inventory.getGenderDictionary(gender, type);
        const num_data = Object.keys(data).length;
        if(num_data == 0){
            response.json({"success": false});
        }
        else{
            response.json(data);
        }
    }

    deleteProduct(request, response){
        const sessionID = request.session.id;
        const uniqueID = request.body.data;
        const bag = userBags.delete(sessionID, uniqueID);

        if (bag){
            //userBags[sessionID].push(productIDs); 
            response.json({'success': true, 'bag': bag });
        }
        else{
           response.json({'success': false});
        }
    }

    getTotal(request, response){
        const sessionID = request.session.id;
        const bag = userBags.get(sessionID);
        const total = inventory.getTotalPrice(bag);
        response.json(total);
    }
}

module.exports = new Controllers();