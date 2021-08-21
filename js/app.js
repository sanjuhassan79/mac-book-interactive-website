// allcost function

function addAllCost(items, entraItem) {

    const entraItems = document.getElementById(`${items}_Cost`).innerText = entraItem;
    const entraItemsText = entraItems.innerText;
    const entraItemsAmount = parseFloat(entraItemsText);

    entraItems.innerText = entraItemsAmount;

    calculateTotal();
}

function getValue(items) {
    const entraItems = document.getElementById(`${items}_Cost`).innerText;
    const entraItemsAmount = parseFloat(entraItems);

    return entraItemsAmount;

};


function calculateTotal() {

    const Best_Price = document.getElementById('Best_Price').innerText;
    const Best_PriceAmount = parseFloat(Best_Price);
    const memory = getValue('memory');
    const storage = getValue('storage');
    const delivery = getValue('delivery');
    const total_price = Best_PriceAmount + memory + storage + delivery;

    document.getElementById('total_price').innerText = total_price;
    document.getElementById('pomo_total').innerText = total_price;

}











// Memory start

document.getElementById('memory8gb').addEventListener('click', function() {

    addAllCost('memory', 0);



})
document.getElementById('memory16gb').addEventListener('click', function() {
    addAllCost('memory', 180);

})



// Storage start

document.getElementById('storage256GBSsd').addEventListener('click', function() {

    addAllCost('storage', 0);

})
document.getElementById('storage512GBBSsd').addEventListener('click', function() {

    addAllCost('storage', 100);


})
document.getElementById('storage1TBSsd').addEventListener('click', function() {

    addAllCost('storage', 180);

})


// Delivery start

document.getElementById('FreePrimeDelivery').addEventListener('click', function() {

    addAllCost('delivery', 0);

})
document.getElementById('DeliveryCharge21').addEventListener('click', function() {

    addAllCost('delivery', 20);

})

document.getElementById('apple__pomeCode').addEventListener('click', function() {

    let total = document.getElementById('total_price').innerText;


    let pomoInput = document.getElementById('inputValue');

    let pomoValue = pomoInput.value;

    if (pomoValue == 'stevekaku') {
        let totalPrices = total * 0.2;
        let pomomainTotal = total - totalPrices;

        document.getElementById('pomo_total').innerText = pomomainTotal;
    }


    pomoInput.value = '';





})