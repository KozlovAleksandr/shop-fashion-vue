<template>
  <div class="products__filter _container">
    <div class="products__filter_search">
      <details>
        <summary>
          <span id="details__title">Fitter</span>
          <img src="../assets/header/01.svg" alt="" />
          <!-- <div id="lodo">
                  <div></div>
                  <div></div>
                  <div></div>
                </div> -->
        </summary>
        <div>
          <details>
            <summary>Category</summary>
            <ul>
              <li><a href="#">Accessories</a></li>
              <li>
                <a href="#">Bags</a>
              </li>
              <li>
                <a href="#">Denim</a>
              </li>
              <li>
                <a href="#">Hoodies & Sweatshirts</a>
              </li>
              <li>
                <a href="#">Jackets & Coats</a>
              </li>
              <li>
                <a href="#">Polos</a>
              </li>
              <li>
                <a href="#">Shirts</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
              <li>
                <a href="#">Sweaters & Knits</a>
              </li>
              <li>
                <a href="#">T-Shirts</a>
              </li>
              <li>
                <a href="#">Tanks</a>
              </li>
            </ul>
          </details>
          <details>
            <summary>Brand</summary>
            <ul>
              <li><a href="#">Accessories</a></li>
              <li>
                <a href="#">Bags</a>
              </li>
              <li>
                <a href="#">Denim</a>
              </li>
              <li>
                <a href="#">Hoodies & Sweatshirts</a>
              </li>
              <li>
                <a href="#">Jackets & Coats</a>
              </li>
              <li>
                <a href="#">Polos</a>
              </li>
              <li>
                <a href="#">Shirts</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
              <li>
                <a href="#">Sweaters & Knits</a>
              </li>
              <li>
                <a href="#">T-Shirts</a>
              </li>
              <li>
                <a href="#">Tanks</a>
              </li>
            </ul>
          </details>
          <details>
            <summary>Designer</summary>
            <ul>
              <li><a href="#">Accessories</a></li>
              <li>
                <a href="#">Bags</a>
              </li>
              <li>
                <a href="#">Denim</a>
              </li>
              <li>
                <a href="#">Hoodies & Sweatshirts</a>
              </li>
              <li>
                <a href="#">Jackets & Coats</a>
              </li>
              <li>
                <a href="#">Polos</a>
              </li>
              <li>
                <a href="#">Shirts</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
              <li>
                <a href="#">Sweaters & Knits</a>
              </li>
              <li>
                <a href="#">T-Shirts</a>
              </li>
              <li>
                <a href="#">Tanks</a>
              </li>
            </ul>
          </details>
        </div>
      </details>
    </div>

    <ul class="products__filter_category">
      <li>
        <div class="item">
          <span class="drop-title">Trending now</span>
          <span class="arrow arrow-down"></span>
          <div class="drop-item">
            <label><input type="checkbox" /> Winter</label>
            <label><input type="checkbox" /> Spring</label>
            <label><input type="checkbox" /> Summer</label>
            <label><input type="checkbox" /> Autumn</label>
          </div>
        </div>
      </li>
      <li>
        <div class="item">
          <span class="drop-title">Size</span>
          <span class="arrow arrow-down"></span>
          <div class="drop-item">
            <label><input type="checkbox" /> XL</label>
            <label><input type="checkbox" /> L</label>
            <label><input type="checkbox" /> M</label>
            <label><input type="checkbox" /> S</label>
            <label><input type="checkbox" /> XS</label>
          </div>
        </div>
      </li>
      <li>
        <div class="item">
          <span class="drop-title">Price</span>
          <span class="arrow arrow-down"></span>
          <div class="drop-item">
            <label><input type="checkbox" /> Under $10</label>
            <label><input type="checkbox" /> $10 to $15</label>
            <label><input type="checkbox" /> $15 to $35</label>
            <label><input type="checkbox" /> $35 to $100</label>
            <label><input type="checkbox" /> $100 & above</label>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.products {
  &__filter {
    display: flex;
    text-transform: uppercase;

    &_search {
      display: flex;
      margin: 51px 0px 17px;

      & details {
        box-sizing: border-box;
        position: relative;
        outline: none;
        border: none;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        cursor: pointer;

        & summary {
          display: flex;

          & img {
            margin-left: 7px;
          }
        }

        & ::-webkit-details-marker {
          display: none;
        }

        &[open] {
          & div {
            position: absolute;
            background-color: #ffffff;
            width: 360px;
            left: 0;
            box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
            z-index: 1;
            padding: 34px;

            & summary {
              color: #f16d7f;
              padding: 11px;
              margin: 16px 0;
              border-left: 5px solid #ef5b70;
              border-bottom: 1px solid #ebebeb;
            }
          }

          & li {
            padding: 10px 0;
          }

          & a {
            font-weight: 300;
            font-size: 14px;
            line-height: 17px;
            font-weight: 400;
            text-transform: capitalize;
            color: #6f6e6e;

            &:hover {
              color: #f16d7f;
            }
          }
        }
      }

      &_search {
        display: flex;
        margin: 51px 0px 17px;
      }
    }

    &_category {
      display: flex;
      align-items: center;
      color: #6f6e6e;
      font-size: 14px;
      margin: 51px 0px 17px 333px;

      & li {
        & .item {
          margin-right: 28px;
          display: flex;
          gap: 10px;
          position: relative;
        }

        & .drop-item {
          display: none;
          position: absolute;
          font-weight: 300;
          font-size: 14px;
          line-height: 17px;
          padding: 7px 9px;
          text-transform: capitalize;
          width: 120px;
          box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
          background: #ffffff;
          z-index: 2;
          top: 17px;

          & *:not(:last-child) {
            margin-bottom: 9px;
          }
        }

        & .item:hover {
          & .drop-item {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
}

.arrow {
  width: 10px;
  height: 10px;
  display: block;

  &-down {
    border-top: 2px solid #6f6e6e;
    border-right: 2px solid #6f6e6e;
    transform: rotate(135deg);
  }
}
</style>