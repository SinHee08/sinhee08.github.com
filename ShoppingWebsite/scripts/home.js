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
]

function addToCart(event, index) {
    // 阻止默认行为，即阻止跳转到product.html
    event.preventDefault();

    var cartNumElement = document.querySelector('.cart-num'); // 获取 cart-num 元素
    var currentCartNum = parseInt(cartNumElement.textContent); // 获取当前的购物车数量
    currentCartNum++; // 将购物车数量递增
    cartNumElement.textContent = currentCartNum; // 更新 cart-num 元素的文本内容

    var clickedProduct = products[index]; // 在这里可以通过索引或其他唯一标识符找到被点击的商品
    console.log("Clicked Product:", clickedProduct); // 在这里可以执行其他加入购物车的逻辑，比如将商品信息添加到购物车数组中

    // 查找与点击产品相关的成功元素
    var productBlock = event.target.closest('.product-block');
    var successElement = productBlock.querySelector('.add-success');

    successElement.classList.remove('hidden-element');
    void successElement.offsetWidth;
    successElement.classList.add('visible-element');

    setTimeout(function() {
        successElement.classList.add('hidden-element');
        void successElement.offsetWidth;
        successElement.classList.remove('visible-element');
    }, 2000);
}


let html = "";

for (let i = 0; i < products.length; i++) {
    html += `<div class="product-block">
        <a href="product.html">
            <div class="product-image-row">
                <img class="product-image" src="${products[i].Img}">
                    <p class="product-discount">${products[i].discount}折</p>
            </div>
            <div class="product-information">
                <div class="product-text">
                    <p class="product-name">${products[i].name}</p>
                    <div class="add-success hidden-element">
                        <img class="check-icon" src="images/icons/check.png">
                            <p class="add-success-p">加入購物車</p>
                    </div>
                    <div class="product-price-row">
                        <div class="product-price">
                            <p class="discount-price">${products[i].discountPrice}</p>
                            <p class="origin-price">${products[i].originPrice}</p>
                        </div>

                        <!-- 将商品索引传递给addToCart函数 -->
                        <img class="add-to-cart" src="images/icons/cart.png" onclick="addToCart(event, ${i})">
                    </div>
                </div>
            </div>
        </a>
    </div>`;
}

document.querySelector(".product-grid").innerHTML = html;
