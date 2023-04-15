<template>
  <div class="form">
    <form>
      <label for="username">Kullanıcı Adı:</label>
      <input type="text" id="username" v-model="username" />
      <label for="password">Şifre:</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit" v-on:click="submitForm">Giriş Yap</button>
      <a class="a" href="#">Şifremi Unuttum</a>
      <a class="a" href="/register">Üye Ol</a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // kullanıcı adı ve şifre doğrulaması yapılır
      if (this.username === "kullanici_adi" && this.password === "sifre") {
        // giriş başarılı, yönlendirme yapılır
        this.$router.push("/anasayfa");
      } else {
        // giriş başarısız, hata mesajı gösterilir
        alert("Kullanıcı adı veya şifre yanlış!");
      }
    },
  },
};
</script>
<style  scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 35px;
}
.form-group {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
}

button[type="submit"] {
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 360px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.success-message {
  background-color: green;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
}
.a {
  margin: 40px;
}
</style >