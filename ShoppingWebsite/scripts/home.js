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

function addToCart() {
    // 获取 cart-num 元素
    var cartNumElement = document.querySelector('.cart-num');

    // 获取当前的购物车数量
    var currentCartNum = parseInt(cartNumElement.textContent);

    // 将购物车数量递增
    currentCartNum++;

    // 更新 cart-num 元素的文本内容
    cartNumElement.textContent = currentCartNum;
}

let html = "";

for (i = 0; i < products.length; i++) {
    html+= `<div class="product-block">
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

                        <img class="add-to-cart" src="images/icons/cart.png" onclick="addToCart()">
                    </div>
                </div>
            </div>
        </a>
    </div>`

}

document.querySelector(".product-grid").innerHTML = html;