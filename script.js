
function increment() {
	event.preventDefault();
    let quantityElement = document.getElementById('quantity'); 
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.innerText = quantity;
  }

  // Function to decrement quantity
  function decrement() {
    var quantityElement = document.getElementById('quantity');
    var quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
      quantity--;
      quantityElement.innerText = quantity;
    }
  }
  // Function to add item to cart
  function addToCart() {
    var quantity = parseInt(document.getElementById('quantity').innerText);
    alert("Added " + quantity + " item(s) to cart!");
  }
