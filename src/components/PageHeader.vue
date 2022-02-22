<template>
  <header class="products__nav">
    <div class="products__nav-block _container">
      <a href="#">New arrivals</a>
      <nav>
        <span>Home</span>
        <span>/</span>
        <span>Men</span>
        <span>/</span>
        <span>New arrivals</span>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>


<style lang="scss">
.products {
  &__nav {
    background: #f8f3f4;
  }

  &__nav-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 148px;

    & a {
      font-size: 24px;
      line-height: 29px;
      color: #f16d7f;
      text-transform: uppercase;
    }

    & nav {
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      color: #636363;
      font-size: 14px;

      & span {
        &:not(:last-child) {
          padding-right: 4px;
        }
      }
    }
  }
}
</style>