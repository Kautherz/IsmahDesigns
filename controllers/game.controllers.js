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
       // console.log(request.session.id);
        //console.log(request.body.productIDs);
    
        const sessionID = request.session.id;
        const {products} = request.body;
        const bag = userBags.add(sessionID, products);
        console.log(sessionID, bag);


        if (bag){
            //userBags[sessionID].push(productIDs); 
            response.json({'success': true, 'bag': bag });
        }
        else{
           response.json({'success': false});
        }
    }

    getBag(request, response){
        //console.log(request.session.id);
        //response.json({success:true})
        
        const sessionID = request.session.id;

        const bag = userBags.get(sessionID);
        console.log(sessionID, bag);

        if(bag){
            response.json({'success': true, 'bag': bag });
        }
        else{
             response.json({"success": false})

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
    
}

module.exports = new Controllers();