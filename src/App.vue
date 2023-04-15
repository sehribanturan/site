<template>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">
      <router-link to="/">Anasayfa</router-link>
      <router-link to="/Product">Ürünlerimiz</router-link>
      <router-link to="/about">Hakkımızda</router-link>
      <router-link to="/contact">İletişim</router-link>

      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <router-link to="/register">Üye Ol</router-link>
      <router-link to="/login">Giriş Yap</router-link>
      <router-link to="/pay">
        <div class="menu">
          <font-awesome-icon icon="shopping-cart" />
          <span class="cart-count">{{ cartItemCount }}</span>
        </div>
      </router-link>
    </a>
  </nav>

  <router-view> </router-view>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      cartItemCount: 0,
    };
  },
  methods: {
    addToCart() {
      // Sepete ürün ekleme kodu burada
      this.cartItemCount += 1;
    },
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;
}

.navbar-brand a {
  text-decoration: none;
  padding: 2px;
}
.navbar-brand a:hover {
  background: #345f4a;
  color: white;
}
.navbar-brand {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 18px;
}
.form-control {
  margin-left: 10px;
}
</style>
