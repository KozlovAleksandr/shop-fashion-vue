<template>
  <div>
    <header>
      <h1>{{ name }}</h1>
    </header>
    <main>
      <div class="showcase">
        <div class="card" v-for="(item, idx) in products" v-bind:key="idx">
          <h4>{{ item.title }}</h4>
          <p>{{ item.price }}</p>
        </div>
      </div>
    </main>
    <footer>
      <p>2022 &copy;</p>
    </footer>
  </div>
</template>

// -----------------------------------------------------------

<script>
export default {
  data() {
    return {
      name: "GeekShop",
      products: [
        { id: 1, title: "Jacket white", price: 336 },
        { id: 2, title: "Hat red", price: 116 },
        { id: 3, title: "Socks orange", price: 970 },
        { id: 4, title: "Jacket white", price: 386 },
        { id: 5, title: "Shirt black", price: 262 },
        { id: 6, title: "Jacket white", price: 482 },
        { id: 7, title: "Shoes black", price: 237 },
        { id: 8, title: "Hat orange", price: 570 },
      ],
    };
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getJson(`catalog.json`)
      .then((data) => {
        for (item in data) {
          this.products.push(item);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

// -----------------------------------------------------------

<style lang="scss">
header {
  text-align: center;
}

.showcase {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.showcase .card {
  border: 3px solid black;
  border-radius: 15px;
  width: 23%;
  margin-bottom: 30px;
  text-align: center;
}
.showcase .card h4 {
  color: blue;
}
.showcase .card p {
  color: red;
}

footer {
  width: 80%;
  margin: 0 auto;
  border-top: 1px solid black;
}
</style>
