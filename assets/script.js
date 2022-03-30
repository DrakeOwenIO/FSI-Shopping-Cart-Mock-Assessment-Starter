function updateQuantity(displayQuantity){
    let quantity = document.querySelector('.total-quantity');
    quantity.innerHTML = displayQuantity;
}

let quantity = 1;

let plusButton = document.querySelector('#quantity-up');
let minusButton = document.querySelector('#quantity-down');

plusButton.addEventListener('click', function()
{
    quantity++;
    updateQuantity(`Quantity: ${quantity}`);
})

minusButton.addEventListener('click', function()
{
    if (quantity > 0)
    {
        quantity--;
        updateQuantity(`Quantity: ${quantity}`);
    }
})