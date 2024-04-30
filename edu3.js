function myFunction() {
    alert("Thank You for comment");
  }
function incrementCounter() {
    var counterElement = document.querySelector('.icon-cart span');

    var currentValue = parseInt(counterElement.textContent);

    var newValue = currentValue + 1;

    counterElement.textContent = newValue;

    var productElement = this.parentElement;

    var productName = productElement.querySelector('h2').textContent;

    var cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    cartItems.push(productName);

    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

var addButtons = document.querySelectorAll('.addCart');

addButtons.forEach(function(button) {
    button.addEventListener('click', incrementCounter);
});

var iconCart = document.querySelector('.icon-cart');

iconCart.addEventListener('click', function() {
    var cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    alert('Cart Items:\n' + cartItems.join('\n'));
});
