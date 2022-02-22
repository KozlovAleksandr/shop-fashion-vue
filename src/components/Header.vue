<template>
  <header class="header">
    <div class="header__container _container">
      <div class="header__menu menu">
        <ul class="menu__search">
          <li>
            <router-link to="/"
              ><img src="../assets/header/logo.svg" alt="logo"
            /></router-link>
          </li>
          <li>
            <img src="../assets/header/search.svg" alt="logo" />
          </li>
        </ul>
        <nav class="menu__nav">
          <input type="checkbox" id="burger" />
          <label for="burger" class="header__burger"
            ><img src="../assets/header/burger.svg" alt="burger"
          /></label>
          <nav class="header__nav nav">
            <div class="nav__container">
              <label for="burger" class="nav__close">&#10008;</label>
              <h2 class="nav__title">Menu</h2>
              <h3 class="nav__heading">Man</h3>
              <ul class="nav__list">
                <li class="nav__item">Accessories</li>
                <li class="nav__item">Bags</li>
                <li class="nav__item">Denim</li>
                <li class="nav__item">T-Shirts</li>
              </ul>
              <h3 class="nav__heading">Woman</h3>
              <ul class="nav__list">
                <li class="nav__item">Accessories</li>
                <li class="nav__item">Jackets & Coats</li>
                <li class="nav__item">Polos</li>
                <li class="nav__item">T-Shirts</li>
                <li class="nav__item">Shirts</li>
              </ul>
              <h3 class="nav__heading">Kids</h3>
              <ul class="nav__list">
                <li class="nav__item">Accessories</li>
                <li class="nav__item">Jackets & Coats</li>
                <li class="nav__item">Polos</li>
                <li class="nav__item">T-Shirts</li>
                <li class="nav__item">Shirts</li>
                <li class="nav__item">Bags</li>
              </ul>
            </div>
          </nav>
          <router-link to="/catalog"
            ><img src="../assets/header/store.svg" alt="store"
          /></router-link>
          <router-link to="/accaunt"
            ><img src="../assets/header/accaunt.svg" alt="accaunt"
          /></router-link>
          <router-link to="/cart"
            ><img src="../assets/header/cart.svg" alt="cart"
          /></router-link>
          <div class="item__amount"></div>
          <table class="cart_subtotal"></table>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["cart", "catalog"],
};
</script>


<style lang="scss">
.header {
  background: #222222;
  position: relative;

  &__menu {
    display: flex;
    justify-content: space-between;
    padding: 18px 0px;
  }

  &__nav {
    position: absolute;
    top: 78px;
    right: -29px;
    z-index: 2;
  }

  &__burger {
    cursor: pointer;
  }
}

.menu {
  &__search {
    display: flex;
    align-items: flex-end;

    & li {
      margin-right: 41px;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    position: relative;

    & *:not(:last-child) {
      margin-right: 33px;
    }

    & .item__amount {
      position: absolute;
      top: 0;
      right: -10px;
      height: 23px;
      width: 23px;
      border-radius: 50%;
      background-color: #f16d7f;
      color: #fbfbfb;
      font-size: 12px;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}

#burger {
  display: none;
}

#burger:checked ~ .header__nav {
  display: block;
}

#burger:not(:checked) ~ .header__nav {
  display: none;
}

// ---------- ВЫПАДАЮЩЕЕ МЕНЮ ----------

.nav {
  position: absolute;
  top: 60px;
  width: 232px;
  height: calc(100vh - 78px);
  overflow-y: scroll;
  padding-left: 41px;
  background: #ffffff;

  &__container {
    position: relative;
  }

  &__close {
    position: absolute;
    right: 5px;
    top: -32px;
    cursor: pointer;
  }

  &__title {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    font-weight: bold;
    margin: 37px 0 24px;
  }

  &__heading {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #f16d7f;
    margin-bottom: 12px;
  }

  &__list {
    margin-bottom: 11px;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    margin-left: 21px;
    cursor: pointer;

    & :not(:last-child) {
      margin-bottom: 11px;
    }

    & :last-child {
      margin-bottom: 20px;
    }

    & *:hover {
      font-size: 15px;
      transition: 0.3s;
    }
  }
}
</style>




