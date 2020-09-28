class Bag {
    constructor() {
        this.userBags = {};
    }

    get(id) {
        console.log("Bag id:" + id);
        if (this.userBags[id]) {
            const bag = this.userBags[id];
            return bag;
        } else {
            this.userBags[id] = {};
            const bag = this.userBags[id];
            return bag;
        }
    }

    add(sessionID, productID, size, quantity) {
        const bagID = productID + "-" + size;
        if (!this.userBags[sessionID]) {
            this.userBags[sessionID] = {};
        }
        const bag = this.userBags[sessionID];
        bag[bagID] = quantity;
        // this.userBags[sessionID][bagID] = quantity;
        return bag;
    }

    set(id, items) {
        if (this.userBags[id]) {
            this.userBags[id] = items;
            const bag = this.userBags[id];
            return bag;
        } else {
            return null;
        }
    }

    delete(sessionID, uniqueID) {
        if (!this.userBags[sessionID]) {
            this.userBags[sessionID] = {};
        }
        delete this.userBags[sessionID].uniqueID;
        var bag = this.userBags[sessionID];
        delete bag[uniqueID];
        return bag;
    }
}

module.exports = new Bag();
