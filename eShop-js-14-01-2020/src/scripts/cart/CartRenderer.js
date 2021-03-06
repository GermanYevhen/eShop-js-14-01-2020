export default class CartRenderer {
    constructor(cart, {
        headerCartSelect = '.header-cart'
                } = {}) {
        this.cart = cart;
        this.headerCartEl = document.querySelector(headerCartSelect);
    }

    updateHeaderCart() {
        this.headerCartEl.querySelector('.header-cart-count').innerHTML = this.cart.cartItems.length;
    }
}