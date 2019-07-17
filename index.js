

var materia = {
    fuel: {
        quantity: 100,
        price: 1000
    },
    craft1: {
        quantity: 0,
        price: 10000
    },
    craft2: {
        quantity: 0,
        price: 20000,
    },
    craft3: {
        quantity: 0,
        price: 5000
    },
    gatherer1: {
        quantity: 0,
        price: 15000
    },
    gatherer2: {
        quantity: 0,
        price: 10000
    },
    gatherer3: {
        quantity: 0,
        price: 5000
    }
}

var avgSale = 0;
var cost = materia.fuel.quantity * materia.fuel.price

while(true) {
    if(materia.fuel.quantity - 5 < 0) {
        break;
    }
    materia.fuel.quantity -= 5
    var random = Math.floor((Math.random() * 120) + 1)

    switch (true) {
        case (random < 60):
            materia.fuel.quantity++;
            break;
        case (random < 70):
            materia.gatherer1.quantity++;
            break;
        case (random < 80):
            materia.gatherer2.quantity++;
            break;
        case (random < 90):
            materia.gatherer3.quantity++;
            break;
        case (random < 100):
            materia.craft1.quantity++;
            break;
        case (random < 110):
            materia.craft2.quantity++;
            break;
        case (random < 120):
            materia.craft3.quantity++;
            break;
        default:
            console.log("none");
            break;
    }
}
totalSale =((materia.craft1.price * materia.craft1.quantity) + (materia.craft2.price * materia.craft2.quantity) + (materia.craft3.price * materia.craft3.quantity) + (materia.gatherer1.price * materia.gatherer1.quantity) + (materia.gatherer2.price * materia.gatherer2.quantity) + (materia.gatherer3.price * materia.gatherer3.quantity))
avgSale = totalSale/6
console.log("Total sale: ", totalSale)
console.log("Average sale: ", avgSale)
console.log("Buy price: ", cost)