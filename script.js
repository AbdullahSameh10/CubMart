const cartButton = document.getElementById("cartButton");
const closeCartButton = document.getElementById("closeCart");
const shoppingCart = document.getElementById("shoppingCart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const cartCount = document.querySelector(".cart-count");
const cartItemsCount = document.getElementById("cartItemsCount");
const promoInput = document.getElementById("promoCode");
const applyPromoButton = document.getElementById("applyPromo");
const subtotalAmount = document.getElementById("subtotalAmount");
const savedAmount = document.getElementById("savedAmount");
const taxAmount = document.getElementById("taxAmount");
const totalAmount = document.getElementById("totalAmount");
const promoAmount = document.getElementById("promoAmount");
const discountAmount = document.getElementById("discountAmount");
const checkoutButton = document.getElementById("checkoutButton");

let cart = [];
let promoDiscountRate = 0;

const products = [
  {
    id: 1,
    name: "Wireless Headphones Pro",
    category: "Electronics",
    price: 149.99,
    mainPrice: 199.99,
    stock: 8,
    description:
      "Active noise cancellation with up to 30 hours of battery life.",
    image:
      "https://www.inspireuplift.com/resizer/?image=https%3A%2F%2Fcdn.inspireuplift.com%2Fuploads%2Fimages%2Fseller_products%2F20323%2Fiu_1753081640_1.jpg&width=3840&quality=75&format=auto&fit=cover",
  },
  {
    id: 2,
    name: "Smart Watch Ultra",
    category: "Electronics",
    price: 249.99,
    mainPrice: 299.99,
    stock: 5,
    description: "AMOLED display with advanced fitness and health tracking.",
    image:
      "https://m.media-amazon.com/images/I/71uFhrrUeVL._AC_UF350,350_QL80_.jpg",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 79.99,
    mainPrice: 99.99,
    stock: 5,
    description: "Rich stereo sound with waterproof portable design.",
    image:
      "https://dukandwar.com/wp-content/uploads/2020/03/JBL-Flip-3-Stealth-Waterproof-Portable-Bluetooth-Speaker-with-Rich-Deep-Bass-Black-With-Mic_3.jpg",
  },
  {
    id: 4,
    name: "Wireless AirPods Pro",
    category: "Electronics",
    price: 49.99,
    mainPrice: 69.99,
    stock: 8,
    description:
      "Crystal-clear calls with immersive audio and long battery life.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpB_ZCtee8bnK2I1r5mbp1Kx0SpPwIu5kPa_ACtSYpD4hK17pCvN8GGouG&s=10",
  },
  {
    id: 5,
    name: "Fast Charging Power Bank",
    category: "Electronics",
    price: 29.99,
    mainPrice: 44.99,
    stock: 5,
    description: "High-capacity portable charger with dual USB outputs.",
    image:
      "https://icdn.tradew.com/file/202308/1575939/png/8013663.png?x-oss-process=image/resize,w_500/quality,Q_90",
  },
  {
    id: 6,
    name: "USB-C Multiport Hub",
    category: "Electronics",
    price: 39.99,
    mainPrice: 87.99,
    stock: 5,
    description: "Expand your laptop with HDMI, USB, SD card and more.",
    image:
      "https://naztech.com/cdn/shop/products/15598_NZT_Thumb_004.jpg?v=1647377101",
  },
  {
    id: 7,
    name: "LED Desk Lamp",
    category: "Electronics",
    price: 14.99,
    mainPrice: 19.99,
    stock: 8,
    description: "Adjustable brightness with eye-care lighting technology.",
    image: "https://i.ebayimg.com/images/g/9NsAAeSwx0Vpuhw2/s-l400.jpg",
  },
  {
    id: 8,
    name: "4K HD Webcam",
    category: "Electronics",
    price: 49.99,
    mainPrice: 69.99,
    stock: 5,
    description: "Professional-quality video for meetings and streaming.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3-CVrvY2dBWoij9aJ_bkmCPgj619E0NDdhOQ2l2t4KJzKC-y6ZdM_v4&s=10",
  },
  {
    id: 9,
    name: "Immersive VR Headset",
    category: "Electronics",
    price: 49.99,
    mainPrice: 69.99,
    stock: 5,
    description: "Experience next-generation virtual reality entertainment.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1T36psWoIl94Cuz1k8APMDdLm8CQ4LmZ5kmwfuo2worLRe2010FAtQsdQ&s=10",
  },
  {
    id: 10,
    name: "Premium Denim Trucker Jacket",
    category: "Fashion & Apparel",
    price: 89.99,
    mainPrice: 129.99,
    stock: 12,
    description: "Vintage-wash denim with a modern tailored fit.",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Luxe Leather Crossbody Bag",
    category: "Fashion & Apparel",
    price: 64.99,
    mainPrice: 89.99,
    stock: 8,
    description: "Premium full-grain leather with adjustable shoulder strap.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "AirFlex Running Sneakers",
    category: "Fashion & Apparel",
    price: 119.99,
    mainPrice: 159.99,
    stock: 15,
    description: "Ultra-light cushioning engineered for all-day comfort.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop",
  },
  {
    id: 13,
    name: "Signature Leather Belt",
    category: "Fashion & Apparel",
    price: 39.99,
    mainPrice: 54.99,
    stock: 20,
    description: "Handcrafted genuine leather with polished metal buckle.",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=700&auto=format&fit=crop",
  },
  {
    id: 14,
    name: "Essential Cotton Tee (3-Pack)",
    category: "Fashion & Apparel",
    price: 29.99,
    mainPrice: 44.99,
    stock: 25,
    description: "Breathable premium cotton designed for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&auto=format&fit=crop",
  },
  {
    id: 15,
    name: "Polarized Aviator Sunglasses",
    category: "Fashion & Apparel",
    price: 54.99,
    mainPrice: 79.99,
    stock: 10,
    description: "Scratch-resistant polarized lenses with UV400 protection.",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop",
  },
  {
    id: 16,
    name: "Luxury Cashmere Scarf",
    category: "Fashion & Apparel",
    price: 74.99,
    mainPrice: 99.99,
    stock: 7,
    description: "Soft cashmere blend offering warmth with timeless style.",
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=700&auto=format&fit=crop",
  },
  {
    id: 17,
    name: "Executive Leather Wallet",
    category: "Fashion & Apparel",
    price: 34.99,
    mainPrice: 49.99,
    stock: 18,
    description: "Slim RFID-protected wallet crafted from genuine leather.",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&auto=format&fit=crop",
  },
  {
    id: 18,
    name: "Heritage Chelsea Boots",
    category: "Fashion & Apparel",
    price: 149.99,
    mainPrice: 199.99,
    stock: 6,
    description:
      "Premium leather boots with waterproof finish and cushioned sole.",
    image:
      "https://www.blundstone.com/cdn/shop/files/product-image_v2_550-USA_l_lifestyle_men_slider_1.jpg?v=1775081355&width=700",
  },
  {
    id: 19,
    name: "Scandinavian Ceramic Vase Collection",
    category: "Home & Living",
    price: 59.99,
    mainPrice: 79.99,
    stock: 9,
    description:
      "Handcrafted matte ceramic vases perfect for modern interiors.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkhHf_1OtYNnGitfDO4rTpZU3C7GpxSwlA4OcJZFCB_w6tW0EeN3q8k_T&s=10",
  },
  {
    id: 20,
    name: "Nordic LED Floor Lamp",
    category: "Home & Living",
    price: 89.99,
    mainPrice: 119.99,
    stock: 6,
    description:
      "Energy-efficient dimmable lighting with elegant minimalist styling.",
    image:
      "https://m.media-amazon.com/images/I/51+lGrYOJ2L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 21,
    name: "Designer Accent Pillow Set",
    category: "Home & Living",
    price: 44.99,
    mainPrice: 59.99,
    stock: 14,
    description: "Soft woven cotton cushions with contemporary textures.",
    image:
      "https://m.media-amazon.com/images/I/81XjLqwxvXL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 22,
    name: "Professional Chef Knife Set",
    category: "Home & Living",
    price: 79.99,
    mainPrice: 109.99,
    stock: 7,
    description:
      "Precision-forged stainless steel blades with ergonomic handles.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdF9Kk1MY3QZFwxTs1t3OQVC-xyo0MO0yHi3wmdLSkK-rdjorZnOgU8E&s=10",
  },
  {
    id: 23,
    name: "Smart Bluetooth Speaker",
    category: "Home & Living",
    price: 69.99,
    mainPrice: 89.99,
    stock: 11,
    description: "Rich 360° audio with seamless wireless streaming.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700&auto=format&fit=crop",
  },
  {
    id: 24,
    name: "Oak Wood Coffee Table",
    category: "Home & Living",
    price: 249.99,
    mainPrice: 329.99,
    stock: 4,
    description: "Solid oak craftsmanship with timeless Scandinavian design.",
    image:
      "https://www.furnitureinfashion.net/cache/594x594-quinton-glass-top-wooden-coffee-table-rustic-oak-led.jpg",
  },
  {
    id: 25,
    name: "Natural Woven Storage Basket Set",
    category: "Home & Living",
    price: 49.99,
    mainPrice: 69.99,
    stock: 13,
    description: "Eco-friendly woven baskets for stylish home organization.",
    image:
      "https://m.media-amazon.com/images/I/61VG6w1Wk2L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 26,
    name: "Gallery Photo Frame Collection",
    category: "Home & Living",
    price: 39.99,
    mainPrice: 54.99,
    stock: 16,
    description:
      "Elegant metallic frames for creating a stunning gallery wall.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=700&auto=format&fit=crop",
  },
  {
    id: 27,
    name: "Contemporary Wall Clock",
    category: "Home & Living",
    price: 59.99,
    mainPrice: 79.99,
    stock: 8,
    description: "Silent quartz movement with a clean modern aesthetic.",
    image:
      "https://m.media-amazon.com/images/I/613gxcbyFTL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 28,
    name: "Premium Wireless Earbuds",
    category: "Spotlight Product",
    price: 179.99,
    mainPrice: 229.99,
    stock: 14,
    description:
      "Experience crystal-clear sound with our latest flagship earbuds. Featuring adaptive noise cancellation, 40-hour battery life with case, and a sleek ergonomic design. Perfect for music lovers and professionals on the go.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLs4GntGtY7YAW32toeNWpRRUt4UtPmtH3yyRPVTrit-vSI4ZvFrFzWJYZ&s=10",
  },
];

function openCart() {
  shoppingCart.classList.add("open");

  cartOverlay.classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeCart() {
  shoppingCart.classList.remove("open");

  cartOverlay.classList.remove("active");

  document.body.style.overflow = "";
}

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    addProduct(Number(button.dataset.id));
  });
});

function addProduct(productId) {
  const product = products.find((p) => p.id === productId);

  if (!product) return;

  const existingItem = cart.find((item) => item.product.id === productId);

  if (existingItem) {
    if (existingItem.quantity >= product.stock) {
      alert("Maximum stock reached.");

      return;
    }

    existingItem.quantity++;
  } else {
    cart.push({
      product: product,

      quantity: 1,
    });
  }

  renderCart();
}

function updateBadge() {
  const totalItems = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  cartCount.textContent = totalItems;

  cartItemsCount.textContent = totalItems;
}

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    emptyCart.style.display = "block";
  } else {
    emptyCart.style.display = "none";
  }

  cart.forEach((item, index) => {
    cartItems.innerHTML += `
        <div class="cart-item card shadow-sm mb-3">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-3">

                <img
                  src="${item.product.image}"
                  class="img-fluid rounded"
                  alt="${item.product.name}" />
              </div>

              <div class="col-5">
                <h6 class="mb-1">${item.product.name}</h6>
                <small class="text-muted"> ${item.product.category} </small>
                <br />
                <small class="text-success"> In Stock : ${item.product.stock} </small>
              </div>

              <div class="col-4 text-end">
                <div class="btn-group btn-group-sm mb-2">
                  <button class="btn btn-outline-secondary decrease" data-index="${index}"> - </button>
                  <button class="btn btn-light" style="width: 55px; cursor: default"> ${item.quantity} </button>
                  <button class="btn btn-outline-secondary increase" data-index="${index}"> + </button>
                </div>

                <div class="fw-bold"> $${(item.product.price * item.quantity).toFixed(2)} </div>
                <small class="text-decoration-line-through text-muted"> $${(item.product.mainPrice * item.quantity).toFixed(2)} </small>
                <br />
                <button class="btn btn-link text-danger p-0 mt-2 remove" data-index="${index}"> Remove </button>
              </div>
            </div>
          </div>
        </div>
        `;
  });

  updateBadge();

  attachCartEvents();

  updateTotals();
}

function attachCartEvents() {
  document.querySelectorAll(".increase").forEach((button) => {
    button.addEventListener("click", () => {
      const item = cart[button.dataset.index];

      if (item.quantity >= item.product.stock) {
        alert("Maximum available stock reached.");

        return;
      }

      item.quantity++;

      renderCart();
    });
  });

  document.querySelectorAll(".decrease").forEach((button) => {
    button.addEventListener("click", () => {
      const item = cart[button.dataset.index];

      item.quantity > 1 ? item.quantity-- : null;

      renderCart();
    });
  });

  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", () => {
      cart.splice(button.dataset.index, 1);

      renderCart();
    });
  });
}

function calculateSubtotal() {
  return cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}

function getDiscountRate() {
  let originalTotal = 0;
  let productDiscount = 0;

  cart.forEach((item) => {
    originalTotal += item.product.mainPrice * item.quantity;

    productDiscount +=
      (item.product.mainPrice - item.product.price) * item.quantity;
  });

  // Total after product discounts
  const subtotal = originalTotal - productDiscount;

  // Promo discount amount
  const promoDiscount = subtotal * promoDiscountRate;

  // Total saved
  const totalDiscount = productDiscount + promoDiscount;

  // Overall discount percentage
  const rate = originalTotal === 0 ? 0 : totalDiscount / originalTotal;

  return {
    rate,
    originalTotal,
    productDiscount,
    promoDiscount,
    totalDiscount,
  };
}

function applyPromoCode(code) {
  code = code.trim().toUpperCase();

  switch (code) {
    case "SAVE10":
      return 0.1;

    case "WELCOME":
      return 0.15;

    case "SAVE20":
      return 0.2;

    default:
      return 0;
  }
}

function calculateTax(amount) {
  return amount * 0.14;
}

function updateTotals() {
  const discountInfo = getDiscountRate();

  const originalTotal = discountInfo.originalTotal;
  const productDiscount = discountInfo.productDiscount;
  const promoDiscount = discountInfo.promoDiscount;

  const taxableAmount = originalTotal - productDiscount - promoDiscount;

  const tax = calculateTax(taxableAmount);

  const total = taxableAmount + tax;

  subtotalAmount.textContent = "$" + originalTotal.toFixed(2);

  savedAmount.textContent = "-$" + productDiscount.toFixed(2);

  discountAmount.textContent = `-${(discountInfo.rate * 100).toFixed(1)}%`;

  promoAmount.textContent = "-$" + promoDiscount.toFixed(2);

  taxAmount.textContent = "$" + tax.toFixed(2);

  totalAmount.textContent = "$" + total.toFixed(2);
}

applyPromoButton.addEventListener("click", () => {
  const code = promoInput.value;

  promoDiscountRate = applyPromoCode(code);

  if (promoDiscountRate === 0 && code.trim() !== "") {
    alert("Invalid Promo Code!");
  } else if (promoDiscountRate > 0) {
    alert("Promo Code Applied!");
  }

  promoInput.value = "";

  updateTotals();
});

function generateReceipt() {
  const subtotal = calculateSubtotal();

  const productDiscount = cart.reduce((total, item) => {
    return (
      total + (item.product.mainPrice - item.product.price) * item.quantity
    );
  }, 0);

  const promoDiscount = (subtotal - productDiscount) * promoDiscountRate;

  const tax = calculateTax(subtotal - promoDiscount);

  const total = subtotal - promoDiscount + tax;

  const orderNumber = "CM" + Math.floor(Math.random() * 900000 + 100000);

  const date = new Date().toLocaleString();

  let html = `
    <div class="text-center mb-4">
      <i class="fa-solid fa-circle-check text-success display-3"></i>
      <h3 class="mt-3 fw-bold"> Order Receipt </h3>
      <p class="text-muted mb-1"> Order #${orderNumber} </p>
      <small class="text-muted"> ${date} </small>
    </div>
  `;

  cart.forEach((item) => {
    html += `
      <div class="card border-0 shadow-sm mb-3">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-3 col-md-2">
              <img
                src="${item.product.image}"
                class="img-fluid rounded"
                style="height: 80px; object-fit: cover" />
            </div>

            <div class="col-6 col-md-7">
              <h6 class="fw-bold mb-1"> ${item.product.name} </h6>

              <small class="text-muted"> Quantity : ${item.quantity} </small>
            </div>

            <div class="col-3 text-end">
              <div class="fw-semibold"> $${item.product.price.toFixed(2)} </div>

              <small class="text-success"> $${(item.quantity * item.product.price).toFixed(2)} </small>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  html += `
    <div class="card bg-light border-0 mt-4">
      <div class="card-body">
        <div class="d-flex justify-content-between mb-2">
          <span>Subtotal</span>
          <strong>$${subtotal.toFixed(2)}</strong>
        </div>

        <div class="d-flex justify-content-between mb-2 text-success">
          <span>Product Savings</span>
          <strong>-$${productDiscount.toFixed(2)}</strong>
        </div>

        <div class="d-flex justify-content-between mb-2 text-success">
          <span>Promo Savings</span>
          <strong>-$${promoDiscount.toFixed(2)}</strong>
        </div>

        <div class="d-flex justify-content-between mb-2">
          <span>Tax (14%)</span>
          <strong>$${tax.toFixed(2)}</strong>
        </div>

        <hr />

        <div class="d-flex justify-content-between fs-4 fw-bold">
          <span>Total</span>
          <span class="text-success"> $${total.toFixed(2)} </span>
        </div>
      </div>
    </div>

    <p class="text-center mt-4 text-muted">
      ❤️ Thank you for shopping with CubMart!
    </p>
  `;

  return html;
}

checkoutButton.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  closeCart();

  document.getElementById("receiptContent").innerHTML = generateReceipt();

  const modal = new bootstrap.Modal(document.getElementById("receiptModal"));

  modal.show();
});

document.getElementById("confirmOrder").addEventListener("click", () => {
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("receiptModal"),
  );

  modal.hide();

  printReceipt();
});

function printReceipt() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const now = new Date();

  const receiptWindow = window.open("", "_blank", "width=800,height=900");

  let itemsHTML = "";
  let subtotal = 0;
  let storeDiscount = 0;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.product.id);
    const lineTotal = product.price * item.quantity;
    const originalTotal = product.mainPrice * item.quantity;
    const saved = originalTotal - lineTotal;

    subtotal += lineTotal;
    storeDiscount += saved;

    itemsHTML += `
      <tr>
        <td>${product.name}</td>
        <td style="text-align:center;">${item.quantity}</td>
        <td style="text-align:right;">$${product.price.toFixed(2)}</td>
        <td style="text-align:right;">$${lineTotal.toFixed(2)}</td>
      </tr>
    `;
  });

  const promoCode = document
    .getElementById("promoCode")
    .value.trim()
    .toUpperCase();

  const promoRate = applyPromoCode(promoCode);
  const promoDiscount = subtotal * promoRate;

  const tax = calculateTax(subtotal - promoDiscount);

  const total = subtotal - promoDiscount + tax;

  receiptWindow.document.write(`
  <!doctype html>
  <html>
    <head>
      <title>Receipt</title>

      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          color: #333;
        }

        h1 {
          text-align: center;
          margin-bottom: 0;
        }

        h4 {
          text-align: center;
          margin-top: 5px;
          color: #777;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 30px;
        }

        th,
        td {
          border-bottom: 1px solid #ddd;
          padding: 12px;
        }

        th {
          background: #f4f4f4;
        }

        .summary {
          margin-top: 30px;
          width: 320px;
          margin-left: auto;
        }

        .summary table {
          margin-top: 0;
        }

        .summary td {
          border: none;
          padding: 6px;
        }

        .total {
          font-size: 20px;
          font-weight: bold;
          border-top: 2px solid #000;
        }

        .footer {
          margin-top: 50px;
          text-align: center;
          color: #666;
        }
      </style>
    </head>

    <body>
      <h1>CubMart Store</h1>
      <h4>Order Receipt</h4>

      <p><strong>Date:</strong> ${now.toLocaleDateString()}</p>
      <p><strong>Time:</strong> ${now.toLocaleTimeString()}</p>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          ${itemsHTML}
        </tbody>
      </table>

      <div class="summary">
        <table>
          <tr>
            <td>Subtotal</td>
            <td style="text-align: right">$${subtotal.toFixed(2)}</td>
          </tr>

          <tr>
            <td>Store Savings</td>
            <td style="text-align: right; color: green">
              -$${storeDiscount.toFixed(2)}
            </td>
          </tr>

          <tr>
            <td>Promo Discount</td>
            <td style="text-align: right; color: green">
              -$${promoDiscount.toFixed(2)}
            </td>
          </tr>

          <tr>
            <td>Tax (14%)</td>
            <td style="text-align: right">$${tax.toFixed(2)}</td>
          </tr>

          <tr class="total">
            <td>Total</td>
            <td style="text-align: right">$${total.toFixed(2)}</td>
          </tr>
        </table>
      </div>

      <div class="footer">
        <h3>Thank you for shopping with CubMart ❤️</h3>

        <p>We hope to see you again.</p>
      </div>

      <script>
        window.onload = function () {
          window.print();
          setTimeout(function () {
            window.close();
          }, 500);
        };
      </script>
    </body>
  </html>
`);

  receiptWindow.document.close();

  cart = [];
  renderCart();

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("checkoutModal"),
  );

  // modal.hide();
}

cartButton.addEventListener("click", openCart);

closeCartButton.addEventListener("click", closeCart);

cartOverlay.addEventListener("click", closeCart);
