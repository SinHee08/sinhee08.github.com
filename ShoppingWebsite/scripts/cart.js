// cart.js

function updateCartNumFromLocalStorage() {
    var cart = JSON.parse(localStorage.getItem('cart')) || { products: [] };
    var totalQuantity = 0;

    // 计算购物车中所有商品的总数量
    cart.products.forEach(product => {
        totalQuantity += product.quantity || 0;
    });

    // 更新 cart-num
    document.querySelector('.cart-num').textContent = totalQuantity;
}