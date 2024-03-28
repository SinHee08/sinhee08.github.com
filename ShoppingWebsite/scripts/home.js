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

document.addEventListener('DOMContentLoaded', function() {
    updateCartNumFromLocalStorage();
});

function addToCart(event, index) {
    event.preventDefault();

    var cartNumElement = document.querySelector('.cart-num');
    var currentCartNum = parseInt(cartNumElement.textContent);
    currentCartNum++;
    cartNumElement.textContent = currentCartNum;

    var clickedProduct = products[index];

    console.log("Clicked Product:", clickedProduct);

    // 更新购物车信息
    updateCart(clickedProduct);

    var productBlock = event.target.closest('.product-block');
    var successElement = productBlock.querySelector('.add-success');

    successElement.classList.remove('hidden-element');
    void successElement.offsetWidth;
    successElement.classList.add('visible-element');

    setTimeout(function () {
        successElement.classList.add('hidden-element');
        void successElement.offsetWidth;
        successElement.classList.remove('visible-element');
    }, 2000);
}

function updateCart(product) {
    var cart = JSON.parse(localStorage.getItem('cart')) || { products: [] };

    if (!cart.hasOwnProperty('products')) {
        cart.products = [];
    }

    var existingProduct = cart.products.find(p => p.name === product.name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.products.push({
            name: product.name,
            price: product.discountPrice,
            quantity: 1,
            Img: product.Img,  // 新添加的字段
            originalPrice: product.originPrice  // 新添加的字段
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

let html = "";

for (let i = 0; i < products.length; i++) {
    html += `<div class="product-block">
        <a href="product.html?product=${encodeURIComponent(products[i].name)}">
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

                        <img class="add-to-cart" src="images/icons/cart.png" onclick="addToCart(event, ${i})">
                    </div>
                </div>
            </div>
        </a>
    </div>`;
}

document.querySelector(".product-grid").innerHTML = html;
