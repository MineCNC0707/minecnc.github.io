// shop.js

// 购物车数据，用于存储已添加到购物车的产品
const cart = [];

// 添加产品到购物车
function addToCart(productId) {
  const product = {
    id: productId,
    // 添加其他产品信息字段
  };

  // 将产品添加到购物车数组
  cart.push(product);

  // 更新购物车内容的显示
  updateCartDisplay();

  // 获取刚添加到购物车的产品元素
  const productElement = document.querySelector(`.product[data-product-id="${productId}"]`);

  // 添加淡出效果
  productElement.classList.add('fade-out');

  // 在淡出效果完成后，将产品元素从DOM中移除
  productElement.addEventListener('transitionend', function () {
    productElement.remove();
  });
}

// 更新购物车内容的显示
function updateCartDisplay() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';

  for (const product of cart) {
    const productElement = document.createElement('div');
    productElement.dataset.productId = product.id; // 用于标识产品
    productElement.classList.add('product');
    productElement.textContent = `产品名称: ${product.name}, 价格: $${product.price}`;
    cartElement.appendChild(productElement);

    // 添加淡入效果
    setTimeout(() => {
      productElement.classList.add('fade-in');
    }, 10);
  }
}
