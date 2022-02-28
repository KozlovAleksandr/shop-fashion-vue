<template>
  <div class="wrapper">
    <PageHeader></PageHeader>

    <section class="cart">
      <div class="cart-block _container">
        <div class="cart-block__content">
          <ProductInCart
            v-for="item of cart"
            v-bind:key="item.id"
            v-bind:data="item"
          >
            <img
              src="../assets/cart/x.svg"
              alt="close"
              v-on:click="() => remove(item.id)"
            />
          </ProductInCart>
          <div class="cart-block__buttons">
            <span v-on:click="() => clearCart()">CLEAR SHOPPING CART</span>
            <span
              ><router-link to="/catalog">CONTINUE SHOPPING</router-link></span
            >
          </div>
        </div>
        <CartFilling> </CartFilling>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import ProductInCart from "../components/ProductInCart.vue";
import CartFilling from "../components/CartFilling.vue";

export default {
  name: "Cart",
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },

  components: {
    ProductInCart,
    PageHeader,
    CartFilling,
  },
  methods: {
    remove(id) {
      this.$store.dispatch("removeFromCart", id);
    },
    clearCart() {
      this.cart.forEach((item) => {
        this.$store.dispatch("removeFromCart", item.id);
      });
    },
  },
};
</script>


<style>
</style>
