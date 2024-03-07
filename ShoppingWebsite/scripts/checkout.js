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

document.addEventListener('DOMContentLoaded', function () {
    updateCartNumFromLocalStorage();
});

let html = "";

for (let i = 0; i < products.length; i++) {
    html += `<div class="product-row">
    <img class="product-image" src="images/product_images/product_image1.jpg" />
    <div class="product-information">
        <p class="product-name">海底撈【自煮火鍋（麻辣嫩牛/番茄牛肉）】</p>
        <div class="product-detail">
            <div class="product-detail-left">
                <div class="product-price">
                    <p class="origin-price">$300</p>
                    <p class="discount-price">$189</p>
                </div>
                <div class="buy-num-row">
                    <p class="num-p">數量</p>
                    <input class="buy-num" value="1">
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
}

document.querySelector(".product-row").innerHTML = html;