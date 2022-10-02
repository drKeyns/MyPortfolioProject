<template>
  <div class="ads">
    <div class="xs">
      <slot name="header">
        <div class="header_wraper">
          <div class="logo"><span>Vita.</span> Супермаркет</div>
          <div class="search">
            <img
              class="icon"
              :src="require('../assets/Images/Icon/search_icon.svg')"
              alt=""
            />
            <input type="text" v-model="searchProductTitle" />
            <button @click="onSearchProducts">ok</button>
          </div>
          <div v-if="productList">
            <product-cart
              v-for="product in filteredProductList"
              :key="product.id"
              :product="product"
            ></product-cart>
          </div>
          <div class="callback">
            <div>
              <img
                class="phone icon"
                :src="require('../assets/Images/Icon/phone_icon.svg')"
                alt=""
              />
            </div>
            <div class="Popup" @click="showPopup">
              <phone-popup v-if="isPopupVisible" @closePopup="closePopup" />
              <div>0954667184</div>
              <button>Передзвони мені</button>
            </div>
          </div>
          <div class="registration">
            <div>
              <img
                class="user icon"
                :src="require('../assets/Images/Icon/user_icon.svg')"
                alt=""
              />
            </div>
            <div>
              <div>Особистий кабінет</div>
              <button>Увійти/Реєстрація</button>
            </div>
          </div>
          <button class="Shopcart">
            <span>
              <img
                class="cart icon"
                :src="require('../assets/Images/Icon/cart_icon.svg')"
                alt=""
              />
            </span>
            <span @click="goToCart">Корзина</span>
            <div><router-link to="/">Home</router-link></div>
          </button>
        </div>
        <div class="container">
          <div id="app">
            <nav>
              <transition name="fade" mode="out-in">
                <div
                  class="material-icon menu"
                  v-if="!show"
                  @click="show = !show"
                  key="menu"
                >
                  Меню товарів
                </div>
                <div
                  class="material-icon clear"
                  v-else
                  @click="show = !show"
                  key="clear"
                >
                  Меню товарів
                </div>
              </transition>
              <transition name="fade">
                <div v-if="show" class="item-container">
                  <div
                    v-for="menuItem in MenuSettings"
                    :key="menuItem.id"
                    @mouseover="getSecondMenu(menuItem.id)"
                    @click="getFilteredCategory(menuItem.category)"
                  >
                    <img :src="menuItem.img" alt="" />
                    {{ menuItem.title }}
                    <div class="sx1">
                      <div v-if="menuItem.secondMenuData !== null">
                        <second-menu
                          :data="menuItem.secondMenuData"
                        ></second-menu>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </nav>
          </div>
          <div>
            <router-link to="/">Головна</router-link>
          </div>
          <div>
            <router-link to="/about">Про нас</router-link>
          </div>
          <div>
            <router-link to="/products">Список товарів</router-link>
          </div>
          <div>
            <router-link to="/loyality">Программа лояльності</router-link>
          </div>
          <div>
            <router-link to="/payment">Оплата і доставка</router-link>
          </div>
          <div>
            <router-link to="/order">Як зробити замовлення</router-link>
          </div>
          <div>
            <router-link to="/contacts">Контакти</router-link>
          </div>
        </div>
        <div><MenuBlock></MenuBlock>,</div>
      </slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer">
        <div class="footer-container">
          <div class="cashback az1">
            <div>
              <img
                class="phone icon"
                :src="require('../assets/Images/Icon/cashback_icon.svg')"
                alt=""
              />
            </div>
            <div>
              <div>Кешбек 3%</div>
              <div>
                Повертається 3% від покупок, зроблених в супермаркеті Vita
              </div>
            </div>
          </div>
          <div class="delivery az1">
            <div>
              <img
                class="phone icon"
                :src="require('../assets/Images/Icon/delivery_icon.svg')"
                alt=""
              />
            </div>
            <div>
              <div>Доставка по Ужгороду</div>
              <div>Доставка в любу точку міста.</div>
            </div>
          </div>
          <div class="new-post az1">
            <div>
              <img
                class="phone icon"
                :src="require('../assets/Images/Icon/nova-poshta_icon.png')"
                alt=""
              />
            </div>
            <div>
              <div>Доставка Новою Поштою</div>
              <div>Адресна і до відділення, в будь-яку точку України</div>
            </div>
          </div>
          <div class="eazy az1">
            <div>
              <img
                class="phone icon"
                :src="require('../assets/Images/Icon/easy-shoping_icon.svg')"
                alt=""
              />
            </div>
            <div>
              <div>Зручність</div>
              <div>З нами вам не доведеться стояти у чергах.</div>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PhonePopup from "@/components/PhonePopup";
import MenuBlock from "@/components/MenuBlock";

export default {
  name: "MainMasterPage",

  components: {
    PhonePopup,
    MenuBlock,
  },
  data() {
    return {
      show: false,
      isPopupVisible: false,
      searchProductTitle: null,
    };
  },
  computed: {
    ...mapGetters("product", ["getProductsCatalog", "productList"]),
    ...mapGetters("product", ["getSubCatalog"]),
    filteredProductList() {
      if (this.searchProductTitle)
        return this.productList.filter((product) =>
          product.title
            .toLowerCase()
            .includes(this.searchProductTitle.toLowerCase())
        );
      else return this.productList;
    },
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
    goToCart() {
      this.$router.push({ name: "cart" });
    },
    onSearchProducts() {
      console.log(this.searchProductTitle);
      console.log(this.searchProductTitle);
      if (this.searchProductTitle) {
        console.log(
          this.productList.filter((product) =>
            product.title
              .toLowerCase()
              .includes(this.searchProductTitle.toLowerCase())
          )
        );
        this.productList.filter((product) =>
          product.title
            .toLowerCase()
            .includes(this.searchProductTitle.toLowerCase())
        );
      } else return this.productList;
    },
  },
};
</script>

<style lang="css" scoped>
.logo {
  text-align: left;
  font-size: 30px;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.az1 {
  text-align: center;
  display: flex;
  align-items: center;
  background-color: green;
  color: white;
  border: 3px solid black;
  border-radius: 20px;
  width: 25%;
  height: 70px;
}
.icon {
  height: 30px;
  width: 30px;
}
.header_wraper {
  display: flex;
  justify-content: space-between;
  background-color: coral;
  margin: 0px;
}
.ads {
  position: relative;
}
.container {
  background-color: aqua;
  align-items: center;
  height: 50px;
}
button {
  border: none;
  background-color: coral;
}
.callback,
.registration,
.Shopcart {
  display: flex;
  align-items: center;
}
.body {
  /* height: 438px; */
  border: 3px solid black;
}
.footer-container {
  display: flex;
  justify-content: space-between;
}
.getProductsCatalog {
  height: 20px;
  width: 20px;
}
.sx1 {
  display: flex;
  align-items: center;
  border: 3px solid black;
  height: 40px;
  margin: 0px;
}
.item-container {
  position: absolute;
  background-color: #fff;
}
.Popup {
  position: relative;
}
.search {
  display: flex;
  justify-content: stretch;
  border: 3px solid black;
  width: 300px;
  height: 30px;
}
img.search {
  width: 30px;
  left: 0px;
}
.Shopcart {
  cursor: pointer;
}
.Shopcart:hover {
  color: blue;
}
</style>
