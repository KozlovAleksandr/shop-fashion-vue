<template>
  <div class="products__column">
    <div class="products__item">
      <div class="products__item_top">
        <img
          :src="require(`../assets/products/${data.img}`)"
          alt="products__icon"
        />
        <slot></slot>
      </div>
      <div class="products__item_info">
        <a href="product.html" class="item__name">{{ data.title }}</a>
        <p class="item__description">
          {{ data.description }}
        </p>
        <span>$</span><span class="item__price">{{ data.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["data"],
};
</script>


<style lang="scss">
.products {
  &__column {
    width: 360px;
    // height: 420px;
    background: #f8f8f8;
  }

  &__item {
    &_top {
      position: relative;
      overflow: hidden;

      &:hover .products__item_button {
        opacity: 1;
      }

      &:hover .products__item_button a {
        transform: translate(-50%, -50%) scale(1);
      }
    }

    &_button {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(58, 56, 56, 0.86);
      opacity: 0;
      transition: 0.3s ease-in-out;

      & span {
        display: flex;
        color: #ffffff;
        cursor: pointer;
        border: 2px solid #ffffff;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        height: 50px;
        width: 140px;
        align-items: center;
        position: absolute;
        top: calc(50% - 25px);
        left: calc(50% - 70px);
        transition: 0.3s ease-in-out;

        &:hover {
          background: black;
        }

        & img {
          margin: 11px 11px 11px 13px;
        }
      }
    }

    &_info {
      width: 314px;
      margin: 24px 0 20px 17px;

      & a {
        font-size: 13px;
        line-height: 16px;
        text-transform: uppercase;
      }

      & p {
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        margin: 12px 0px 18px;
        color: #5d5d5d;
      }

      & span {
        font-size: 16px;
        line-height: 19px;
        color: #f16d7f;
      }
    }
  }
}
</style>
