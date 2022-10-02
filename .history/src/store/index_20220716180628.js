import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  //Розділ, де описумєо глобальні змінні додатку
  state() {
    return {
      ProductList: [
        {
          id: 1,
          img: require("../assets/Images/Products Catalogue/Fish and sousages/Sausage.jpg"),
          Title: "Ковбаса копчена",
          Trademark: "Глобіно",
          Price: 205.0,
        },
        {
          id: 2,
          img: require("../assets/Images/Products Catalogue/Fish and sousages/Sausages.jpg"),
          Title: "Cардельки-Мортадельки",
          Trademark: "Глобіно",
          Price: 168.0,
        },
        {
          id: 3,
          img: require("../assets/Images/Products Catalogue/Fish and sousages/Fish.jpg"),
          Title: "Замороженая рыба, селедка",
          Trademark: "",
          Price: 71.0,
        },
        {
          id: 4,
          img: require("../assets/Images/Products Catalogue/Milk-Products/Milk.jpg"),
          Title: "Молоко",
          Trademark: "Селянське",
          Price: 36.0,
        },
        {
          id: 5,
          img: require("../assets/Images/Products Catalogue/Milk-Products/Sour-cream.jpg"),
          Title: "Сметана",
          Trademark: "Селянське",
          Price: 39.0,
        },
        {
          id: 6,
          img: require("../assets/Images/Products Catalogue/Milk-Products/Yogurt.jpg"),
          Title: "Йогурт",
          Trademark: "Дольче",
          Price: 41.0,
        },
        {
          id: 7,
          img: require("../assets/Images/Products Catalogue/Grocery/Pasta.jpg"),
          Title: "Макароны",
          Trademark: "Щедро",
          Price: 47.0,
        },
        {
          id: 8,
          img: require("../assets/Images/Products Catalogue/Grocery/Buckwheat.jpg"),
          Title: "Гречка",
          Trademark: "Националь",
          Price: 85.0,
        },
        {
          id: 9,
          img: require("../assets/Images/Products Catalogue/Grocery/Rise.webp"),
          Title: "Рис",
          Trademark: "Зерновита",
          Price: 77.0,
        },
        {
          id: 10,
          img: require("../assets/Images/Products Catalogue/Fruits/Bananas.jpg"),
          Title: "Бананы",
          Trademark: "",
          Price: 55.0,
        },
        {
          id: 11,
          img: require("../assets/Images/Products Catalogue/Fruits/Grapes.jpg"),
          Title: "Виноград",
          Trademark: "",
          Price: 135.0,
        },
        {
          id: 12,
          img: require("../assets/Images/Products Catalogue/Fruits/Apples.jpg"),
          Title: "Яблоки",
          Trademark: "",
          Price: 41.0,
        },
        {
          id: 13,
          img: require("../assets/Images/Products Catalogue/Drinks/Beer.jpg"),
          Title: "Пиво",
          Trademark: "Heineken",
          Price: 43.0,
        },
        {
          id: 14,
          img: require("../assets/Images/Products Catalogue/Drinks/Pepsi.jpg"),
          Title: "Пепсі",
          Trademark: "Pepsi",
          Price: 38.0,
        },
        {
          id: 15,
          img: require("../assets/Images/Products Catalogue/Drinks/Juice.jpg"),
          Title: "Нектар апельсиновий",
          Trademark: "Садочок",
          Price: 46.0,
        },
        {
          id: 16,
          img: require("../assets/Images/Products Catalogue/Wafels and cakes/Cake.jpg"),
          Title: "Торт Ужгород",
          Trademark: "Штефаньо",
          Price: 230.0,
        },
        {
          id: 17,
          img: require("../assets/Images/Products Catalogue/Wafels and cakes/Roulets.jpg"),
          Title: "Рулет",
          Trademark: "Своя лінія",
          Price: 40.0,
        },
        {
          id: 18,
          img: require("../assets/Images/Products Catalogue/Wafels and cakes/Waffles.jpg"),
          Title: "Вафлі",
          Trademark: "Артек",
          Price: 40.0,
        },
      ],
      cartList: [
        { id: "aaagfr", productId: "2", count: 3 },
        { id: "aaagfi", productId: "4", count: 2 },
      ],
    };
  },
  //Функції, які здійснюють зчитування значень з стейта і які ми можемо використати у компонентах
  getters: {
    //   getCount: {count} => count
    productList: (state) => state.ProductList,
    getProductbyId: (state) => (productId) =>
      state.ProductList.find((item) => item.Id === productId),
    cartList: (state) => state.cartList,
    getTotalPrice: (state) =>
      state.cartList.reduce((cartItem) => {
        const product = state.productList.find((item) => item.id === productId);
      }, 0),
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    incrementCartItemCount(state, cartItemId) {
      const item = state.cartList.find((item) => item.id === cartItemId);
      item.count += 1;
    },
    decrementCartItemCount(state, cartItemId) {
      const item = state.cartList.find((item) => item.id === cartItemId);
      if (item.count > 1) item.count -= 1;
    },
    deleteCartItemCount(state, cartItemId) {
      state.cartList = state.cartList.filter((item) => item.id !== cartItemId);
    },
    setMessage(state, newMessage) {
      state.message = newMessage;
    },
    setMyText(state, newText) {
      state.input_message = newText;
    },
  },
  //Розділ, де описуємо функції, які викликаємо у копонентах, якщо хочемо змінити стейт
  actions: {
    cartAction({ commit }, payload) {
      switch (payload.type) {
        case "increment":
          commit("incrementCartItemCount", payload.value);
          break;
        case "decrement":
          commit("decrementCartItemCount", payload.value);
          break;
        case "delete":
          commit("deleteCartItemCount", payload.value);
          break;
      }
    },
  },
});
export default store;
