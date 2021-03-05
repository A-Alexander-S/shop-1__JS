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

// Генерация карточек
class ProductList {
    constructor(container = '.fetured__flex') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this._sumOfGoods();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Men Jacket', price: 4000, img: "img/fetured__img-1.jpg" },
            { id: 2, title: 'Women Costume', price: 8000, img: "img/fetured__img-2.jpg" },
            { id: 3, title: 'Sweatshirt', price: 3000, img: "img/fetured__img-3.jpg" },
            { id: 4, title: 'Trousers', price: 2500, img: "img/fetured__img-4.jpg" },
            { id: 5, title: 'Women Jacket', price: 3500, img: "img/fetured__img-5.jpg" },
            { id: 6, title: 'Women Blouse', price: 2500, img: "img/fetured__img-6.jpg" },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
    _sumOfGoods() {
        let result = this.goods.reduce((sum, current) => sum + current.price, 0);
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



// const product = [
//     { id: 1, title: 'Men Jacket', price: 4000, path: "img/fetured__img-1.jpg" },
//     { id: 2, title: 'Women Costume', price: 8000, path: "img/fetured__img-2.jpg" },
//     { id: 3, title: 'Sweatshirt', price: 3000, path: "img/fetured__img-3.jpg" },
//     { id: 4, title: 'Trousers', price: 2500, path: "img/fetured__img-4.jpg" },
//     { id: 5, title: 'Women Jacket', price: 3500, path: "img/fetured__img-5.jpg" },
//     { id: 6, title: 'Women Blouse', price: 2500, path: "img/fetured__img-6.jpg" },
// ]
// // Функция для формирования верстки каждого товара
// const renderProduct = (item) => {
//     return `<li class="fetured__item">
//     <div class="fetured__item-hover">
//         <img src="${item.path}" class="fetured-img" width="360" height="420"
//             alt="Мужчина">
//         <div class="fetured__item-overlay"></div>
//         <button type="button" class="fetured__item-button"> <img src="img/fetured__btn-basket.svg"
//                 class="fetured__item-pic-basket" alt="Кнопка добавления в корзину"> Add to
//             Cart</button>
//     </div>
//     <div class="fetured__features">
//         <h3 class="fetured__h3">${item.title}</h3>
//         <p class="fetured__desc">Known for her sculptural takes on traditional tailoring,
//             Australian arbiter of cool
//             Kym
//             Ellery
//             teams up with Moda Operandi.</p>
//         <p class="fetured__price">${item.price} рублей</p>
//     </div>

// </li>`
// };

// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item));
//     console.log('productsList');
//     productsList.forEach(element => {
//         document.querySelector('.fetured__flex').insertAdjacentHTML('beforeend', element)
//     });
// }

// renderPage(product);