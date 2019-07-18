

var materiaIV = {
    fuel: { price: 700},
    craft1: { quantity: 0, price: 1900 },
    craft2: { quantity: 0, price: 3000 },
    craft3: { quantity: 0, price: 9000 },
    gatherer1: { quantity: 0, price: 20000 },
    gatherer2: { quantity: 0, price: 15000 },
    gatherer3: { quantity: 0, price: 8000 }
}
var materiaV = {
    fuel: { price: 1000},
    craft1: { quantity: 0, price: 7000 },
    craft2: { quantity: 0, price: 15000 },
    craft3: { quantity: 0, price: 25000 },
    gatherer1: { quantity: 0, price: 30000 },
    gatherer2: { quantity: 0, price: 25000 },
    gatherer3: { quantity: 0, price: 25000 }
}
var materiaVI = {
    fuel: { price: 500},
    craft1: { quantity: 0, price: 15000 },
    craft2: { quantity: 0, price: 10000 },
    craft3: { quantity: 0, price: 10000 },
    gatherer1: { quantity: 0, price: 2500 },
    gatherer2: { quantity: 0, price: 3500 },
    gatherer3: { quantity: 0, price: 7000 }
}
var materiaVII = {
    fuel: { price: 2500 },
    craft1: { quantity: 0, price: 40000 },
    craft2: { quantity: 0, price: 17000 },
    craft3: { quantity: 0, price: 30000 },
    gatherer1: { quantity: 0, price: 30000 },
    gatherer2: { quantity: 0, price: 50000 },
    gatherer3: { quantity: 0, price: 35000 }
}
var materiaVIII = {
    fuel: { price: 10000 },
    craft1: { quantity: 0, price: 240000 },
    craft2: { quantity: 0, price: 180000 },
    craft3: { quantity: 0, price: 240000 },
    gatherer1: { quantity: 0, price: 240000 },
    gatherer2: { quantity: 0, price: 230000 },
    gatherer3: { quantity: 0, price: 39000 }
}


function calculateProfit(materia, fuelQuantity) {
    var avgSale = 0;
    var cost = fuelQuantity * materia.fuel.price

    while(true) {
        if(fuelQuantity - 5 < 0) {
            break;
        }
        fuelQuantity -= 5
        var random = Math.floor((Math.random() * 1200) + 1)

        switch (true) {
            case (random < 600):
                fuelQuantity++;
                break;
            case (random < 700):
                materia.gatherer1.quantity++;
                break;
            case (random < 800):
                materia.gatherer2.quantity++;
                break;
            case (random < 900):
                materia.gatherer3.quantity++;
                break;
            case (random < 1000):
                materia.craft1.quantity++;
                break;
            case (random < 1100):
                materia.craft2.quantity++;
                break;
            case (random <= 1200):
                materia.craft3.quantity++;
                break;
            default:
                console.log("Random: ", random);
                break;
        }
    }
    totalSale =((materia.craft1.price * materia.craft1.quantity) + (materia.craft2.price * materia.craft2.quantity) + (materia.craft3.price * materia.craft3.quantity) + (materia.gatherer1.price * materia.gatherer1.quantity) + (materia.gatherer2.price * materia.gatherer2.quantity) + (materia.gatherer3.price * materia.gatherer3.quantity))
    console.log("Total sale: ", totalSale)
    console.log("Buy price: ", cost)
    console.log("Profit: ", totalSale - cost, ((totalSale-cost)*100)/cost, "%")
}

calculateProfit(materiaVII, 100)