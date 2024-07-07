// script.js

function calculateBill() {
    const pizzaType = document.getElementById('pizza-type').value;
    const pizzaSize = document.getElementById('pizza-size').value;
    const toppings = document.querySelectorAll('input[name="toppings"]:checked');

    let basePrice = 0;
    switch (pizzaType) {
        case 'tandoori Panneer':
            basePrice = 100;
            break;
        case 'Chocolate':
            basePrice = 70;
            break;
        case 'veggie':
            basePrice = 60;
            break;
		case 'chicken':
			basePrice = 80;
    }

    let sizeMultiplier = 1;
    switch (pizzaSize) {
        case 'small':
            sizeMultiplier = 50;
            break;
        case 'medium':
            sizeMultiplier = 100;
            break;
        case 'large':
            sizeMultiplier = 200;
            break;
    }

    let toppingsPrice = 0;
    toppings.forEach(topping => {
        switch (topping.value) {
            case 'cheese':
                toppingsPrice += 40;
                break;
			case 'onion':
				toppings +=20;
            case 'mushrooms':
                toppingsPrice += 30;
                break;
            case 'olives':
                toppingsPrice += 50;
                break;
        }
    });

    const totalPrice = basePrice + sizeMultiplier + toppingsPrice;

    document.getElementById('bill-details').textContent = `The total price of your pizza is ${totalPrice.toFixed(2)}`;
}
/**
 * 
 */