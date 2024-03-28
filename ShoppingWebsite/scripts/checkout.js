const products = [
    {
        Img: "images/product_images/product_image1.jpg",
        name: "海底撈【自煮火鍋（麻辣嫩牛/番茄牛肉）】",
        discount: 6.3,
        originPrice: 300,
        discountPrice: 189
    },
    {
        Img: "images/product_images/product_image2.jpg",
        name: "桂格無糖養氣人蔘盒裝19瓶",
        discount: null,
        originPrice: null,
        discountPrice: 989
    },
    {
        Img: "images/product_images/product_image3.jpg",
        name: "平面伯爵茶醫療口罩口罩 台灣製造 雙鋼印 醫療口罩 MIT 成人口罩( 現貨供應)",
        discount: 4.9,
        originPrice: 100,
        discountPrice: 49
    }
];

document.addEventListener('DOMContentLoaded', function () {
    updateCartNumFromLocalStorage();
    showCartProducts();

    // 添加事件委托，监听删除按钮点击事件
    document.querySelector('.checkout-left').addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-from-cart')) {
            // 获取被点击删除按钮所在的商品行
            var productRow = event.target.closest('.product-row');

            // 获取商品名称
            var productName = productRow.querySelector('.product-name').textContent;

            // 从 localStorage 中移除对应商品
            removeProductFromLocalStorage(productName);

            // 重新显示购物车商品
            showCartProducts();
        }
    });
});

function removeProductFromLocalStorage(productName) {
    var cart = JSON.parse(localStorage.getItem('cart')) || { products: [] };

    // 查找购物车中对应产品的索引
    var productIndex = cart.products.findIndex(product => product.name === productName);

    if (productIndex !== -1) {
        // 如果找到，从数组中移除该产品
        cart.products.splice(productIndex, 1);

        // 更新 localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // 更新购物车数量
        updateCartNumFromLocalStorage();
    }
}

// 格式化货币
function formatCurrency(amount) {
    return '$' + amount;
  }

// 获取配送方式和价格
var deliveryOptionInputs = document.querySelectorAll('.delivery-option-input');
var selectedDeliveryOption = null;
var selectedDeliveryPrice = 0;

for (var i = 0; i < deliveryOptionInputs.length; i++) {
  if (deliveryOptionInputs[i].checked) {
    selectedDeliveryOption = deliveryOptionInputs[i].value;
    selectedDeliveryPrice = parseInt(deliveryOptionInputs[i].closest('.delivery-option').querySelector('.delivery-option-price').textContent);
    break;
  }
}

// 计算商品总金额
var totalAmount = 0;
var cart = JSON.parse(localStorage.getItem('cart')) || { products: [] };
for (var i = 0; i < cart.products.length; i++) {
  var product = cart.products[i];
  var productTotalAmount = product.price * product.quantity;
  totalAmount += productTotalAmount;
}

// 计算最终总金额
var finalTotalAmount = totalAmount + selectedDeliveryPrice;

// //计算金额
// // 从 localStorage 中获取购物车商品数据
// var cart = JSON.parse(localStorage.getItem('cart')) || { products: [] };

// // 计算总金额
// var totalAmount = 0;
// for (var i = 0; i < cart.products.length; i++) {
//     var product = cart.products[i];
//     var productTotalAmount = product.price * product.quantity;
//     totalAmount += productTotalAmount;
// }


function showCartProducts() {
    // 读取购物车数据
    var cart = JSON.parse(localStorage.getItem('cart')) || { products: [] };

    let html = "";

    for (let i = 0; i < cart.products.length; i++) {
        const cartProduct = cart.products[i];
        const productIndexInArray = products.findIndex(product => product.name === cartProduct.name);

        if (productIndexInArray !== -1) {
            const currentProduct = products[productIndexInArray];

            // 显示购物车商品信息
            html += `<div class="product-row">
                <img class="product-image" src="${cartProduct.Img}" />
                <div class="product-information">
                    <p class="product-name">${cartProduct.name}</p>
                    <div class="product-detail">
                        <div class="product-detail-left">
                            <div class="product-price">
                                <p class="origin-price">${cartProduct.originalPrice}</p>
                                <p class="discount-price">${cartProduct.price}</p>
                            </div>
                            <div class="buy-num-row">
                                <p class="num-p">數量</p>
                                <input class="buy-num" value="${cartProduct.quantity}">
                            </div>
                        </div>
                        <div class="product-detail-right">
                <button class="delete-from-cart">刪除</button>
            </div>
        </div>
        <hr class="product-information-hr">
        <div class="delivery-options">
            <p class="delivery-option-p">運送方式</p>
            <div class="delivery-option">
                <input type="radio" checked class="delivery-option-input" name="delivery-option-0">
                <p class="delivery-option-name">自行取貨</p>
                <p class="delivery-option-price">$0</p>
            </div>
            <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-0">
                <p class="delivery-option-name">超商取貨</p>
                <p class="delivery-option-price">$60</p>
            </div>
            <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-0">
                <p class="delivery-option-name">宅配到家</p>
                <p class="delivery-option-price">$120</p>
            </div>
        </div>
    </div>
</div>`;
        } else {
            console.error("无法找到匹配的商品信息");
        }
    }

    document.querySelector(".checkout-left").innerHTML = html;

    // 更新总商品数
    document.querySelector('.checkout-items').textContent = '總共 ' + cart.products.length + ' 樣商品';
    // 更新页面上的总金额
    document.querySelector('.items-price span:last-child').textContent = formatCurrency(totalAmount);
    document.querySelector('.delivery-price span:last-child').textContent = formatCurrency(selectedDeliveryPrice);
    document.querySelector('.total-price span:last-child').textContent = formatCurrency(finalTotalAmount);
}
