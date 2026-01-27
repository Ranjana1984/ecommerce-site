<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple E-Commerce Store</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>My Online Store</h1>
    <div id="cart">
      🛒 Cart: <span id="cart-count">0</span> items | Total: $<span id="cart-total">0</span>
    </div>
  </header>

  <main>
    <section class="products">
      <div class="product">
        <h2>Product 1</h2>
        <p>$20</p>
        <button onclick="addToCart(20)">Add to Cart</button>
      </div>
      <div class="product">
        <h2>Product 2</h2>
        <p>$35</p>
        <button onclick="addToCart(35)">Add to Cart</button>
      </div>
      <div class="product">
        <h2>Product 3</h2>
        <p>$50</p>
        <button onclick="addToCart(50)">Add to Cart</button>
      </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 My Online Store</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>


