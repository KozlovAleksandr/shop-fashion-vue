<template>
  <div class="cart-block__goods">
    <img
      class="cart-block__goods_present"
      :src="require(`../assets/products/${data.img}`)"
      alt="cart-block__goods"
    />
    <div class="cart-block__goods_info">
      <h2>{{ data.title }}</h2>
      <p>
        Price: <span>$ {{ data.price }}</span>
      </p>
      <p>Color: {{ data.color }}</p>
      <p>Size: {{ data.size }}</p>
      <p v-if="data.quantity">
        Quantity:
        <input type="number" min="1" value="1" v-model="quantity" />
      </p>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInCart",

  computed: {
    quantity: {
      get() {
        return this.data.quantity;
      },
      set(value) {
        this.$store.dispatch("setQuantity", {
          id: this.data.id,
          quantity: +value,
        });
      },
    },
  },
  props: ["data"],
};
</script>


<style lang="scss">
.cart-block {
  display: flex;
  justify-content: space-between;

  &__goods {
    display: flex;
    box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
    width: 652px;
    margin-bottom: 43px;
    position: relative;

    &:first-child {
      margin-top: 97px;
    }

    &_present {
      height: 306px;
    }

    &_info {
      margin-left: 31px;

      & h2 {
        font-size: 24px;
        font-weight: 400;
        line-height: 29px;
        color: #222222;
        width: 262px;
        margin: 22px 0 42px;
      }

      & p {
        font-size: 22px;
        line-height: 26px;
        color: #575757;

        & span {
          color: #ef5b70;
        }
      }

      & input {
        margin-left: 24px;
        width: 50px;
        height: 25px;
        text-align: center;
        font-size: 18px;
        color: #656565;
      }

      & img {
        position: absolute;
        top: 28px;
        right: 22px;
        cursor: pointer;
      }
    }
  }

  &__buttons {
    display: flex;

    justify-content: space-between;
    margin: 72px 0 128px;
    width: 652px;

    & span {
      padding: 17px 40px;
      cursor: pointer;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      border: 1px solid #a4a4a4;
      transition: 0.6s;

      &:hover {
        background: #4a4a4a;
        color: #ffffff;
      }
    }
  }
}
</style>
