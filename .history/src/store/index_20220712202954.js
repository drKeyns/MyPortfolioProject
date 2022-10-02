import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  //Розділ, де описумєо глобальні змінні додатку
  state() {
    return {
      ProductsCatalog: [
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
          id: 4,
          img: require("../assets/Images/Products Catalogue/Milk-Products/Milk.jpg"),
          Title: "Молоко",
          Trademark: "Селянське",
          Price: 36.0,
        },
        {
          id: 4,
          img: require("../assets/Images/Products Catalogue/Milk-Products/Milk.jpg"),
          Title: "Молоко",
          Trademark: "Селянське",
          Price: 36.0,
        },
      ],
    };
  },
  //Функції, які здійснюють зчитування значень з стейта і які ми можемо використати у компонентах
  getters: {
    //   getCount: {count} => count
    getProductsCatalog: (state) => state.ProductsCatalog,
    getSubCatalog: (state) => state.SubCatalog,
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    increment(state, val) {
      state.count += val;
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
    updateValue({ commit }, payload) {
      commit("increment", payload);
    },
    updateMessage({ commit }, newMsg) {
      commit("setMessage", newMsg);
    },
    updateMyText({ commit, dispatch }, newText) {
      commit("setMyText", newText);
      dispatch("updateValue", 5);
    },
  },
});
export default store;