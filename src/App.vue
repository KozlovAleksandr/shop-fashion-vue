<template>
  <div class="page">
    <Header></Header>

    <router-view />

    <Footer></Footer>
  </div>
</template>

// -----------------------------------------------------------

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  methods: {},
  mounted() {
    this.$store.dispatch("loadCatalog");
    this.$store.dispatch("loadCart");
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
