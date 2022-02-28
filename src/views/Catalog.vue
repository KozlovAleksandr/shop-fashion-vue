<template>
  <div class="wrapper">
    <PageHeader></PageHeader>
    <CatalogFilter></CatalogFilter>
    <div class="products__container _container">
      <div class="products__body">
        <ProductCard
          v-for="item of catalog"
          v-bind:key="item.id"
          v-bind:data="item"
        >
          <div class="products__item_button" v-on:click="() => buy(item)">
            <span>
              <img
                src="../assets/product_page/03.svg"
                alt="ordering__button-icon"
              />
              Add to Cart
            </span>
          </div>
        </ProductCard>
      </div>
      <CatalogPaginator></CatalogPaginator>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import PageHeader from "../components/PageHeader.vue";
import CatalogFilter from "../components/CatalogFilter.vue";
import CatalogPaginator from "../components/CatalogPaginator.vue";

export default {
  name: "Catalog",
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    },
  },
  components: {
    ProductCard,
    PageHeader,
    CatalogFilter,
    CatalogPaginator,
  },
  methods: {
    buy(item) {
      this.$store.dispatch("addToCart", item);
    },
  },
};
</script>


<style lang="scss">
.products {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__body {
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    &_product {
      padding-bottom: 128px; // отступ для блока products на странице product
    }
  }
}
</style>

