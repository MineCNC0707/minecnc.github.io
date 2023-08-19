// shop.js

// 购物车数据，用于存储已添加到购物车的产品
const cart = [];

// 添加产品到购物车
function addToCart(productId) {
  // 根据 productId 添加产品到购物车的逻辑
  // 这里可以根据需要实现购物车逻辑，例如添加产品到数组 cart 中
  // 然后更新购物车内容的显示
  const product = {
    id: productId,
    // 添加其他产品信息字段
  };

  cart.push(product);
  updateCartDisplay();
}

// 更新购物车内容的显示
function updateCartDisplay() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';

  for (const product of cart) {
    const productElement = document.createElement('div');
    productElement.textContent = `产品名称: ${product.name}, 价格: $${product.price}`;
    cartElement.appendChild(productElement);
  }
}
