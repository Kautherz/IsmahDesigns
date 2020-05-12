
class Bag {
    constructor(){
        
        this.userBags = {};

    }


    get(id){
        if(this.userBags[id]){
            const bag = this.userBags[id];
            return bag;
        }
        else{
            return null;
        }
    }

    add(id, items){
        if(!this.userBags[id]){
            this.userBags[id] = [];  
        }
        const bag = this.userBags[id];
        for (let item of items){
             bag.push(item);
        }
        return bag;

    }

    set(id, items){
        if(this.userBags[id]){
            this.userBags[id] = items;
            const bag = this.userBags[id];
            return bag;
        }
        else{
            return null;
        }
    }


}

module.exports = new Bag();