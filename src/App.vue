<template>
  <div class="page">
    <Header></Header>

    <router-view
      v-bind:catalog="catalog"
      v-bind:cart="cart"
      v-on:bought="addToCart"
      v-on:removed="removeFromCart"
      v-on:cleared="clearCart"
    />

    <Footer></Footer>
  </div>
</template>

// -----------------------------------------------------------

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      catalog: [],
      cart: [],
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    addToCart(id) {
      const product = this.catalog.find((item) => item.id == id);
      this.cart.push(product);
      window.localStorage.setItem("product", JSON.stringify(this.cart));
    },
    removeFromCart(id) {
      const indx = this.cart.findIndex((item) => item.id == id);
      this.cart.splice(indx, 1);
      window.localStorage.setItem("product", JSON.stringify(this.cart));
    },
    clearCart() {
      this.cart.splice(0, this.cart.length);
      window.localStorage.setItem("product", JSON.stringify(this.cart));
    },
  },
  mounted() {
    this.catalog = [
      {
        id: 1,
        title: "Blue jacket",
        img: "01.png",
        description:
          "Blue jacket for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        color: "blue",
        size: "L",
        price: 99.99,
      },
      {
        id: 2,
        title: "Red shirt",
        img: "02.png",
        description:
          "Red shirt on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        color: "red",
        size: "M",
        price: 47.01,
      },
      {
        id: 3,
        title: "Blue hoodie",
        img: "03.png",
        description:
          "Blue hoodie sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        color: "blue",
        size: "M",
        price: 55.01,
      },
      {
        id: 4,
        title: "Colored t-shirt",
        img: "04.png",
        description:
          "Colored t-shirt traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        color: "colourful",
        size: "S",
        price: 23.99,
      },
      {
        id: 5,
        title: "White T-shirt with long sleeves",
        img: "05.png",
        description:
          "White T-shirt with long sleeves sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        color: "white",
        size: "M",
        price: 26.99,
      },
      {
        id: 6,
        title: "White T-shirt with short sleeves",
        img: "06.png",
        description:
          "White T-shirt with short sleeves tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        color: "white",
        size: "S",
        price: 21.99,
      },
      {
        id: 7,
        title: "White shirt",
        img: "07.png",
        description:
          "White shirt Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        color: "white",
        size: "S",
        price: 33.99,
      },
      {
        id: 8,
        title: "Black leather jacket",
        img: "08.png",
        description:
          "Black leather jacket arbiter of cool Kym Ellery teams up with Moda Operandi.",
        color: "black",
        size: "M",
        price: 117.99,
      },
      {
        id: 9,
        title: "Green shirt",
        img: "09.png",
        description:
          "Green shirt tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        color: "green",
        size: "M",
        price: 31.99,
      },
    ];
    this.cart = JSON.parse(window.localStorage.getItem("product")) || [];
  },
};
</script>

// -----------------------------------------------------------

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: black;
}

ul li {
  list-style-type: none;
}

body,
html {
  font-family: Lato;
  overflow-x: hidden;
}

._container {
  max-width: 1160px;
  padding: 0 10px;
  width: 100%;
  margin: 0 auto;
}
</style>
