<template>
  <div class="products__paginator paginator">
    <ul>
      <li>
        <span>
          <div class="arrow arrow-left"></div>
        </span>
      </li>
      <li>
        <span>1</span>
      </li>
      <li>
        <span>2</span>
      </li>
      <li>
        <span>3</span>
      </li>
      <li>
        <span>4</span>
      </li>
      <li>
        <span>5</span>
      </li>
      <li>
        <span>6</span>
      </li>
      <li>
        <span>&hellip;</span>
      </li>
      <li>
        <span>20</span>
      </li>
      <li>
        <span>
          <div class="arrow arrow-right"></div>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.paginator {
  width: 284px;
  padding: 15px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  margin: 48px 0px 95px 0px;

  & ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;

    & span {
      color: #c4c4c4;
    }
  }
}

.arrow {
  &-left {
    border-top: 2px solid #000000;
    border-right: 2px solid #000000;
    transform: rotate(-135deg);
  }
  &-right {
    border-top: 2px solid #000000;
    border-right: 2px solid #000000;
    transform: rotate(45deg);
  }
}
</style>
