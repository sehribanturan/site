<template>
  <nav>
    <router-link to="/">Anasayfa</router-link> |
    <router-link to="/Product">Ürünlerimiz</router-link> |
    <router-link to="/about">Hakkımızda</router-link> |
    <router-link to="/login">Giriş Yap</router-link> |
    <router-link to="/register">Kayıt ol</router-link> |
    <router-link to="/contact">İletişim</router-link> |
    <router-link to="/pay">Ödemeler</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
