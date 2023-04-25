<template >
  <div class="dropdown">
    <div>
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        >Ürün Kategorileri
      </a>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#" @click="selectedCategory = ''"
            >Tüm Ürünler</a
          >
        </li>
        <li v-for="category in categories" :key="category">
          <a
            class="dropdown-item"
            href="#"
            @click="selectedCategory = category"
            >{{ category }}</a
          >
        </li>
      </ul>
    </div>
    <div>
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        >Fiyat Aralığı

        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="selectedPriceRange = '100-500'"
              >100-500</a
            >
          </li>

          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="selectedPriceRange = '500-1000'"
              >500-1000</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="selectedPriceRange = '1000-1500'"
              >1000-1500</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="selectedPriceRange = '1500-2000'"
              >1500-2000</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="selectedPriceRange = '2000-2500'"
              >2000-2500</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="selectedPriceRange = '2500-3000'"
              >2500-3000</a
            >
          </li>
          <li v-for="priceRange in priceRanges" :key="priceRange">
            <a
              class="dropdown-item"
              href="#"
              @click="selectedPriceRange = priceRange"
              >{{ priceRange }}</a
            >
          </li>
        </ul>
      </a>
    </div>
  </div>
  <div class="body">
    <div
      v-for="product in filteredProducts"
      :key="product.id"
      class="card"
      style="width: 18rem"
    >
      <img :src="product.url" class="card-img-top" alt="Product Image" />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Fiyat : {{ product.price }}</li>
        <li class="list-group-item">{{ product.stock }} Stokta</li>
      </ul>
      <div class="card-body">
        <a :href="product.url" class="card-link">Ürünü İncele</a>
        <a href="http://localhost:8080/pay" class="card-link">Sepete Ekle</a>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzFMiOtD1SRqS8W-rq_bw5JjnUhiF_Qvs",
  authDomain: "product-9e59b.firebaseapp.com",
  projectId: "product-9e59b",
  storageBucket: "product-9e59b.appspot.com",
  messagingSenderId: "266566178585",
  appId: "1:266566178585:web:06ce573859fa01ccea1788",
};

let app = firebase.initializeApp(firebaseConfig);
let db = getFirestore(app);
async function getProducts(db) {
  const productCollection = collection(db, "product");
  const productSnapshot = await getDocs(productCollection);
  const productList = productSnapshot.docs.map((doc) => doc.data());
  return productList;
}

export default {
  name: "UrunSayfasi",
  data() {
    return {
      selectedCategory: "",
      selectedPriceRange: "",
      products: [],
      realProds: [],
    };
  },
  async created() {
    // Firebase'den ürünleri al
    console.log("Ürün sayfasındayım");
    this.products = await getProducts(db);
    console.log(this.realProds);
    console.log(this.products);
  },
  computed: {
    categories() {
      // Firebase veritabanından kategorileri al
      let categories = [];
      this.products.forEach((product) => {
        if (!categories.includes(product.category)) {
          categories.push(product.category);
        }
      });
      return categories;
    },
    priceRanges() {
      // Firebase veritabanından fiyat aralıklarını al
      let priceRanges = [];
      this.products.forEach((product) => {
        let priceRange = Math.floor(product.price / 100) * 100;
        if (!priceRanges.includes(priceRange)) {
          priceRanges.push(priceRange);
        }
      });
      return priceRanges;
    },
    filteredProducts() {
      let filteredProducts = this.products.filter((product) => {
        if (
          this.selectedCategory &&
          product.category !== this.selectedCategory
        ) {
          return false;
        }
        if (this.selectedPriceRange) {
          let [minPrice, maxPrice] = this.selectedPriceRange.split("-");
          if (product.price < minPrice || product.price > maxPrice) {
            return false;
          }
        }
        return true;
      });
      return filteredProducts;
    },
  },
};
</script>

<style scoped>
.dropdown {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
}
.body {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
</style>