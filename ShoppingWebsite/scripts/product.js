const products = [
    {
        Img: "images/product_images/product_image1.jpg",
        name: "海底撈【自煮火鍋（麻辣嫩牛/番茄牛肉）】",
        rating: 4.5,
        star: "images/ratings/rating_45.png",
        comment: "87 則評論",
        sell: "已出售 278",
        discount: 6.3,
        originPrice: 300,
        discountPrice: 189,
        discription: `麻辣嫩牛自煮火鍋套餐】<br>
        成分：<br>
        －清油麻辣火鍋湯底：食用大豆油、豆瓣醬(辣椒、蠶豆、水、碘鹽(食鹽、碘化鉀)、小麥麵粉)、辣椒、碘鹽(食鹽、碘化鉀)、花椒、薑、蒜、蔗糖、蔥、胡椒、5′ -鳥嘌呤核苷磷酸二鈉、5′-次黃嘌呤核苷酸磷酸二鈉、酵母萃取物(酵母萃取物、碘鹽(食鹽、碘化鉀))、小茴香、八角、桂皮、花椒抽出物、陳皮、甘草、香料(肉豆蔻油、丁香花蕾油)<br>
        －綜合蔬菜包：馬鈴薯、花椰菜、毛木耳、胡蘿蔔、甘磷酸二鈉、5′-次黃嘌呤核苷酸磷酸二鈉<br>                
        －牛肉調理包：牛肉(澳洲)、清油麻辣火鍋湯底[食用大豆油、豆瓣醬(辣椒、蠶豆、水、碘鹽(食鹽、碘化鉀)、小麥麵粉)、辣椒、碘鹽(食鹽、碘化鉀)、花椒、薑、蒜、蔗糖、蔥、胡椒、5′ -鳥嘌呤核苷磷酸二鈉、5′-次黃嘌呤核苷酸磷酸二鈉、酵母萃取物(酵母萃取物、碘鹽(食鹽、碘化鉀))、小茴香、八角、桂皮、花椒抽出物、陳皮、甘草、香料(肉豆蔻油、丁香花蕾油)]、食用葵花籽油、食鹽、麥芽糖漿、薑、八角、小茴香粉、月桂葉、花椒、白胡椒<br>
        －粉絲：馬鈴薯澱粉、綠豆澱粉<br>
        ※過敏原：本產品含大豆、蠶豆、小麥及桂皮製品<br>
        產地：綜合蔬菜包(中國)、清油麻辣火鍋湯底(中國)、牛肉調理包(台灣)、粉絲(台灣)<br>
        (牛肉調理包內之牛肉產地為澳洲牛肉)<br>
        保存期限：9個月<br>
        重量：淨重 370 公克<br>`
    },
    {
        Img: "images/product_images/product_image2.jpg",
        name: "桂格無糖養氣人蔘盒裝19瓶",
        rating: 5,
        star: "images/ratings/rating_50.png",
        comment: "69 則評論",
        sell: "已出售 300",
        discount: null,
        originPrice: null,
        discountPrice: 989,
        discription: `【桂格無糖養氣人蔘盒裝19瓶】<br>
        產品描述：<br>
        - 本產品是一款健康飲品，不含糖分，適合追求無糖飲食的消費者。<br>
        - 含有人蔘成分，有助於養氣補血，增強體力。<br>
        - 一盒裝有19瓶，方便攜帶，隨時享受美味又有益健康的飲品。<br>
        - 適用人群：適合所有追求健康生活的消費者，特別適合需要提升體力的人士。<br>
        原材料：<br>
        - 人蔘、清水。<br>
        飲用方式：<br>
        - 搖勻後直接飲用，可加入冰塊享受冰涼口感。<br>
        注意事項：<br>
        - 請放置陰涼處，避免陽光直射。<br>
        - 本產品不適合孕婦及兒童飲用。<br>
        保存期限：12個月<br>
        淨重：每瓶淨重 250 毫升<br>`
    },
    {
        Img: "images/product_images/product_image3.jpg",
        name: "平面伯爵茶醫療口罩口罩 台灣製造 雙鋼印 醫療口罩 MIT 成人口罩( 現貨供應)",
        rating: 3.5,
        star: "images/ratings/rating_35.png",
        comment: "400 則評論",
        sell: "已出售 2330",
        discount: 4.9,
        originPrice: 100,
        discountPrice: 49,
        discription:`【平面伯爵茶醫療口罩 台灣製造 雙鋼印 醫療口罩 MIT 成人口罩( 現貨供應)】<br>
        產品特色：<br>
        - 台灣製造，保證品質，符合醫療口罩標準。<br>
        - 伯爵茶色設計，簡約又不失時尚感。<br>
        - 配有雙鋼印，提供更好的密封性和過濾效果。<br>
        - MIT（Made in Taiwan）認證，為台灣製造感到自豪。<br>
        - 成人口罩，適用於各個年齡層使用。<br>
        - 現貨供應，隨時提供給需要的消費者。<br>
        產品規格：<br>
        - 材質：三層不織布，中間過濾層提供高效過濾。<br>
        - 尺寸：成人口罩，適用於一般面部大小。<br>
        使用方法：<br>
        - 洗手後，確保口罩無損後穿戴於鼻子和口部，調整鼻夾確保密合。<br>
        - 避免觸摸口罩表面，避免污染。<br>
        注意事項：<br>
        - 請避免長時間使用同一片口罩，建議每4小時更換一次。<br>
        - 使用後請正確丟棄，不可重複使用。<br>
        - 儲存於陰涼乾燥處，避免陽光直射。<br>
        保存期限：2年<br>
    `
    }
]

// 在 product.html 的 JavaScript 中获取查询参数
var urlParams = new URLSearchParams(window.location.search);
var productName = urlParams.get('product');

// 根据查询参数的值决定显示哪个商品的信息
var productIndex = products.findIndex(product => product.name === productName);

// 获取加入购物车按钮
var addToCartButton = document.querySelector('.add-to-cart');

// 获取选择购买数量的 select 元素
var buyNumSelect = document.querySelector('.buy-num');

// 获取加入成功提示的元素
var addSuccessElement;

// 初始化购物车数量
var cartQuantity = 0;

// 在这里定义一个变量，表示当前要显示的商品的索引
var currentProductIndex = productIndex !== -1 ? productIndex : 0;

// 如果找到匹配的商品，显示该商品的信息
if (productIndex !== -1) {
    showProductInfo(productIndex);
} else {
    console.error("无法找到匹配的商品信息");
}

// 加入购物车的功能
function addToCart() {
    // Ensure that addSuccessElement is initialized before using it
    if (!addSuccessElement) {
        addSuccessElement = document.querySelector('.add-success');
    }

    // 获取选择购买数量的 select 元素
    var buyNumSelect = document.querySelector('.buy-num');

    // 获取选择的购买数量
    var selectedQuantity = parseInt(buyNumSelect.value);

    // 更新购物车数量
    cartQuantity += selectedQuantity;

    // 更新页面上的购物车数量显示
    updateCartDisplay();

    // 显示加入成功提示
    addSuccessElement.classList.remove('hidden-element');

    // 触发浏览器的重新渲染，确保动画效果生效
    void addSuccessElement.offsetWidth;

    // 添加 visible-element 类，显示动画效果
    addSuccessElement.classList.add('visible-element');

    // 2秒后隐藏成功提示
    setTimeout(function () {
        addSuccessElement.classList.add('hidden-element');

        // 触发浏览器的重新渲染，确保动画效果生效
        void addSuccessElement.offsetWidth;

        // 移除 visible-element 类，隐藏动画效果
        addSuccessElement.classList.remove('visible-element');
    }, 2000);
}

// 更新页面上的购物车数量显示
function updateCartDisplay() {
    var cartNumElement = document.querySelector('.cart-num');
    cartNumElement.textContent = cartQuantity;
}

// 显示特定商品的信息
function showProductInfo(index) {
    // 获取当前商品的信息
    var currentProduct = products[index];

    // Initialize addSuccessElement here
    addSuccessElement = document.querySelector('.add-success');

    // 初始化一个空的 HTML 字符串
    var html = '';

    // 将当前商品的信息添加到 HTML 字符串中
    html += `
        <div class="product-block">
            <img class="product-image" src="${currentProduct.Img}" />
            <div class="product-information">
                <h1 class="product-name">${currentProduct.name}</h1>
                <div class="product-rating">
                    <p class="rating-count">${currentProduct.rating}</p>
                    <img class="rating-stars" src="${currentProduct.star}">
                    <p class="comment-num">${currentProduct.comment}</p>
                </div>
                <div class="sell-information">
                    <p class="product-discount">${currentProduct.discount}折</p>
                    <p class="sell-num">${currentProduct.sell}</p>
                </div>
                <div class="product-price">
                    <p class="origin-price">${currentProduct.originPrice}</p>
                    <p class="discount-price">${currentProduct.discountPrice}</p>
                </div>
                
                <div class="buy-num-row">
                    <p class="num-p">數量</p>
                    <select class="buy-num">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>
                <button class="add-to-cart" onclick="addToCart()">加入購物車</button>
                <div class="add-success hidden-element">
                    <img class="check-icon" src="images/icons/check.png">
                    <p class="add-success-p">加入購物車</p>
                </div>
            </div>
        </div>
        <div class="description-block">
            <p class="description-p">商品描述</p>
            <p class="product-description">${currentProduct.discription}</p>
        </div>`;

    // 将 HTML 字符串设置为 .js-product-info 元素的 innerHTML
    document.querySelector(".js-product-info").innerHTML = html;
}