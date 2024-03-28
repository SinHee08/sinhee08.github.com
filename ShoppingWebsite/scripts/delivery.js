const deliveryPrices = {
    '自行取貨': 0,
    '超商取貨': 60,
    '宅配到家': 120,
};

// 在 delivery.js 文件中，修改事件监听器以立即确认价格并记录到本地存储中

const deliveryOptionInputsCheckout = document.querySelectorAll('.delivery-option-input');

for (const deliveryOptionInput of deliveryOptionInputsCheckout) {
    deliveryOptionInput.addEventListener('click', (event) => {
        const selectedDeliveryOption = event.target.value;
        const selectedDeliveryPrice = deliveryPrices[selectedDeliveryOption];
        
        // 找到当前被选中的商品行
        const productRow = event.target.closest('.product-row');
        
        // 找到当前商品行对应的商品对象索引
        const index = Array.from(productRow.parentNode.children).indexOf(productRow);
        
        // 更新商品对象的运输方式价格属性
        const cart = JSON.parse(localStorage.getItem('cart')) || { products: [] };
        cart.products[index].delivery = selectedDeliveryPrice;
        
        // 更新本地存储中的数据
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // 更新页面显示
        showCartProducts();
        
        // 提示用户价格已确认
        alert('价格已确认');
    });
}
