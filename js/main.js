let buttonBurger = document.getElementById('burger');
let navigation = document.getElementById('navigation');
let introOverlay = document.querySelector('.intro__overlay');

buttonBurger.addEventListener('click', function () {
    if (document.querySelector('.intro') == null) {
        navigation.classList.toggle('display-block');
    } else {
        navigation.classList.toggle('display-block');
        introOverlay.classList.toggle('display-block');
    }
});

let closeNavigation = document.querySelector('.navigation__button-cross');

closeNavigation.addEventListener('click', function () {
    if (document.querySelector('.intro') == null) {
        navigation.classList.toggle('display-block');
    } else {
        navigation.classList.toggle('display-block');
        introOverlay.classList.toggle('display-block');
    }
});

let searchImg = document.getElementById('search-img');
let headerSearch = document.getElementById('header-search');

searchImg.addEventListener('click', function () {
    headerSearch.classList.toggle('display-block');
});

const API = 'https://raw.githubusercontent.com/A-Alexander-S/online-api/main/responses';

// Генерация карточек
class ProductList {
    constructor(container = '.fetured__flex') {
        this.container = container;
        this.goods = []; // массив товаров из JSON документа
        this._getProducts()
            .then(data => { // data - объект js
                this.goods = [...data];
                this.render()
            });
    }
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(rezalt => rezalt.json())
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
    sumOfGoods() {
        let result = this.goods.reduce((sum, current) => sum += current.price, 0);
        console.log(result);
    }
}
//Класс товара
class ProductItem {
    constructor(product) { // img = 'https://placehold.it/200x150'
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = product.img;
    }
    render() {
        return `<li class="fetured__item">
                    <div class="fetured__item-hover">
                        <img src="${this.img}" class="fetured-img" width="360" height="420"
                            alt="Мужчина">
                        <div class="fetured__item-overlay"></div>
                        <button type="button" class="fetured__item-button"> <img src="img/fetured__btn-basket.svg"
                            class="fetured__item-pic-basket" alt="Кнопка добавления в корзину"> Add to
                            Cart</button>
                    </div>
                    <div class="fetured__features">
                        <h3 class="fetured__h3">${this.title}</h3>
                        <p class="fetured__desc">Known for her sculptural takes on traditional tailoring,
                         Australian arbiter of cool
                         Kym Ellery teams up with Moda Operandi.</p>
                        <p class="fetured__price">${this.price} рублей</p>
                    </div>
                </li>`
    }
}

let list = new ProductList();
list.render();
list.sumOfGoods();

class CartList {
    constructor(container = '.cart__list') {
        this.container = container;
        this.goodsInCart = [];
        this._getProducts()
            .then(data => {
                this.goodsInCart = [...data];
                this.render()
            });

    }
    _getProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(rezult => rezult.json())
            .catch(error => {
                console.log(error);
            })
    }
    addGoods() {

    }
    removeGoods() {

    }
    //Поменять кол-во товара в корзине
    changeGoods() {

    }
    //вывести все товары корзины
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goodsInCart) {
            const productObj = new CartItem(product);
            block.insertAdjacentHTML('afterbegin', productObj.render())
        }
    }
}

class CartItem {
    constructor(product, quantity = 1) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.color = product.color;
        this.size = product.size;
        this.img = product.img;
        this.quantity = product.quantity;
    }
    //верстка каждого товара
    render() {
        return `<li class="cart__list-item">
                    <img src="${this.img}" class="cart__item-img" alt="Мужчина">
                <div class="cart__features">
                    <h2 class="cart__h2">${this.title}</h2>
                    <p class="cart__text ">Price: <span class="cart__text-price">${this.price}</span></p>
                    <p class="cart__text cart__text--color">Color:${this.color}</p>
                    <p class="cart__text cart__text--size">Size:${this.size}</p>
                    <div class="cart-quantity">
                        <p class="cart__text cart__text--quantity">Quantity:</p>
                        <span class="cart-quantity__number">${this.quantity}</span>
                    </div>
                    <svg class="cart__features-cross" width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                            fill="#575757" />
                    </svg>
                </div>
            </li>`
    }
}

let cart = new CartList();
cart.render();