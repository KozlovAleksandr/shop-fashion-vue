<template>
  <div class="cart-block__adress">
    <form action="#" class="cart-block__form">
      <h4>SHIPPING ADRESS</h4>
      <input
        type="text"
        required="required"
        placeholder="Bangladesh"
        name="Contry"
      />
      <input type="text" required="required" placeholder="State" name="State" />
      <input
        type="number"
        required="required"
        placeholder="Postcode / Zip"
        name="State"
      />
      <input id="button" type="submit" value="GET A QUOTE" />
    </form>

    <div class="cart-block__count">
      <div class="cart-block__count_top">
        <p>Sub total <span>$900</span></p>
        <p>Grad total <span class="decor">$900</span></p>
      </div>
      <div class="cart-block__count_bottom">
        <button>Proceed to checkout</button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "CartFilling",
};
</script>


<style lang="scss">
.cart-block {
  &__adress {
    display: flex;
    flex-direction: column;
    margin-bottom: 128px;
  }

  &__form {
    display: flex;
    flex-direction: column;

    & h4 {
      font-size: 16px;
      line-height: 19px;
      font-weight: 300;
      margin-top: 97px;
    }

    & input {
      width: 360px;
      border: 1px solid #a4a4a4;
      padding: 13px 0 16px 17px;
      margin-top: 20px;

      &:last-child {
        width: 101px;
        padding: 11px 0 15px;
        margin-bottom: 69px;
        background: none;
        color: #4a4a4a;
        font-weight: 300;
        cursor: pointer;
        transition: 0.6s;

        &:hover {
          background: #4a4a4a;
          color: #ffffff;
        }
      }
    }
  }

  &__count {
    background: #f5f3f3;

    &_top {
      margin: 0 43px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-transform: uppercase;

      & p:first-child {
        font-size: 11px;
        line-height: 13px;
        font-weight: 400;
        color: #4a4a4a;
        margin-top: 39px;
      }

      & p:last-child {
        font-size: 16px;
        line-height: 19px;
        font-weight: 300;
        color: #4a4a4a;
        margin: 12px 0 23px;

        & span {
          color: #f16d7f;
          font-weight: 700;
        }
      }
    }

    &_bottom {
      border-top: 1px solid #e2e2e2;
      margin: 0 43px;

      & button {
        width: 100%;
        padding: 16px 42px;
        margin: 17px 0 42px;
        background: #f16d7f;
        border: 2px solid #f16d7f;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 100;
        color: #ffffff;
        transition: 0.6s;
        cursor: pointer;

        &:hover {
          color: #f16d7f;
          background: #ffffff;
        }
      }
    }
  }
}
</style>