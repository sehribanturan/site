<template>
  <form @submit.prevent="submitForm">
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        v-model="password"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        required
      />
      <div class="password-requirements">
        Password must contain at least:
        <ul>
          <li>8 characters</li>
          <li>1 uppercase letter</li>
          <li>1 lowercase letter</li>
          <li>1 number</li>
          <li>1 special character</li>
        </ul>
      </div>
    </div>
    <button type="submit">Üye Ol</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      successMessage: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.successMessage = "Registration successful!";
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
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
}

.success-message {
  background-color: green;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
}
</style>