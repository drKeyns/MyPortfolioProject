const store = {
  namespaced: true,
  state: {
    ProductList: [
      // {
      //   id: 1,
      //   img: require("../assets/Images/Products Catalogue/Fish and sausages/Sausage.jpg"),
      //   title: "Ковбаса копчена",
      //   Trademark: "Глобіно",
      //   category: "fish-and-sausages",
      //   subcategory: "sausage",
      //   Price: 205.0,
      // },
      // {
      //   id: 2,
      //   img: require("../assets/Images/Products Catalogue/Fish and sausages/Sausages.jpg"),
      //   title: "Cардельки-Мортадельки",
      //   Trademark: "Глобіно",
      //   category: "fish-and-sausages",
      //   subcategory: "sausages",
      //   Price: 168.0,
      // },
      // {
      //   id: 3,
      //   img: require("../assets/Images/Products Catalogue/Fish and sausages/Fish.jpg"),
      //   title: "Замороженая рыба, селедка",
      //   Trademark: "",
      //   category: "fish-and-sausages",
      //   subcategory: "fish",
      //   Price: 71.0,
      // },
      // {
      //   id: 4,
      //   img: require("../assets/Images/Products Catalogue/Milk-Products/Milk.jpg"),
      //   title: "Молоко",
      //   Trademark: "Селянське",
      //   category: "milk-products",
      //   subcategory: "milk",
      //   Price: 36.0,
      // },
      // {
      //   id: 5,
      //   img: require("../assets/Images/Products Catalogue/Milk-Products/Sour-cream.jpg"),
      //   title: "Сметана",
      //   Trademark: "Селянське",
      //   category: "milk-products",
      //   subcategory: "sour-cream",
      //   Price: 39.0,
      // },
      // {
      //   id: 6,
      //   img: require("../assets/Images/Products Catalogue/Milk-Products/Yogurt.jpg"),
      //   title: "Йогурт",
      //   Trademark: "Дольче",
      //   category: "milk-products",
      //   subcategory: "yogurt",
      //   Price: 41.0,
      // },
      // {
      //   id: 7,
      //   img: require("../assets/Images/Products Catalogue/Grocery/Pasta.jpg"),
      //   title: "Макароны",
      //   Trademark: "Щедро",
      //   category: "grocery",
      //   subcategory: "pasta",
      //   Price: 47.0,
      // },
      // {
      //   id: 8,
      //   img: require("../assets/Images/Products Catalogue/Grocery/Buckwheat.jpg"),
      //   title: "Гречка",
      //   Trademark: "Националь",
      //   category: "grocery",
      //   subcategory: "buckwheat",
      //   Price: 85.0,
      // },
      // {
      //   id: 9,
      //   img: require("../assets/Images/Products Catalogue/Grocery/Rise.webp"),
      //   title: "Рис",
      //   Trademark: "Зерновита",
      //   category: "grocery",
      //   subcategory: "rise",
      //   Price: 77.0,
      // },
      // {
      //   id: 10,
      //   img: require("../assets/Images/Products Catalogue/Fruits/Bananas.jpg"),
      //   title: "Бананы",
      //   Trademark: "",
      //   category: "fruits",
      //   subcategory: "bananas",
      //   Price: 55.0,
      // },
      // {
      //   id: 11,
      //   img: require("../assets/Images/Products Catalogue/Fruits/Grapes.jpg"),
      //   title: "Виноград",
      //   Trademark: "",
      //   category: "fruits",
      //   subcategory: "grapes",
      //   Price: 135.0,
      // },
      // {
      //   id: 12,
      //   img: require("../assets/Images/Products Catalogue/Fruits/Apples.jpg"),
      //   title: "Яблоки",
      //   Trademark: "",
      //   category: "fruits",
      //   subcategory: "apples",
      //   Price: 41.0,
      // },
      // {
      //   id: 13,
      //   img: require("../assets/Images/Products Catalogue/Drinks/Beer.jpg"),
      //   title: "Пиво",
      //   Trademark: "Heineken",
      //   category: "drinks",
      //   subcategory: "beer",
      //   Price: 43.0,
      // },
      // {
      //   id: 14,
      //   img: require("../assets/Images/Products Catalogue/Drinks/Pepsi.jpg"),
      //   title: "Пепсі",
      //   Trademark: "Pepsi",
      //   category: "drinks",
      //   subcategory: "pepsi",
      //   Price: 38.0,
      // },
      // {
      //   id: 15,
      //   img: require("../assets/Images/Products Catalogue/Drinks/Juice.jpg"),
      //   title: "Нектар апельсиновий",
      //   Trademark: "Садочок",
      //   category: "drinks",
      //   subcategory: "juice",
      //   Price: 46.0,
      // },
      // {
      //   id: 16,
      //   img: require("../assets/Images/Products Catalogue/Waffles and cakes/Cake.jpg"),
      //   title: "Торт Ужгород",
      //   Trademark: "Штефаньо",
      //   category: "waffles-and-cakes",
      //   subcategory: "cake",
      //   Price: 230.0,
      // },
      // {
      //   id: 17,
      //   img: require("../assets/Images/Products Catalogue/Waffles and cakes/Roulets.jpg"),
      //   title: "Рулет",
      //   Trademark: "Своя лінія",
      //   category: "waffles-and-cakes",
      //   subcategory: "rolls",
      //   Price: 40.0,
      // },
      // {
      //   id: 18,
      //   img: require("../assets/Images/Products Catalogue/Waffles and cakes/Waffles.jpg"),
      //   title: "Вафлі",
      //   Trademark: "Артек",
      //   category: "waffles-and-cakes",
      //   subcategory: "waffles",
      //   Price: 40.0,
      // },
    ],
    cartList: [],
  },
  mutations: {
    incrementCartItemCount(state, CartItemId) {
      const item = state.cartList.find((item) => item.id === CartItemId);
      item.count += 1;
    },
    decrementCartItemCount(state, CartItemId) {
      const item = state.cartList.find((item) => item.id === CartItemId);
      if (item.count > 1) item.count -= 1;
    },
    deleteCartItemCount(state, CartItemId) {
      state.cartList = state.cartList.filter((item) => item.id !== CartItemId);
    },
    addProduct(state, productId) {
      const product = state.cartList.find(
        (item) => item.productId === productId
      );
      if (product) product.count++;
      else
        state.cartList.push({ id: new Date().getTime(), productId, count: 1 });
    },
  },
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
    addProduct({ commit }, productId) {
      commit("addProduct", productId);
    },
  },
  getters: {
    productList: (state) => state.ProductList,
    getProductById: (state) => (productId) =>
      state.ProductList.find((item) => item.id == productId),
    cartList: (state) => state.cartList,
    getTotalPrice: (state) =>
      state.cartList.reduce((prevSum, CartItem) => {
        const product = state.ProductList.find(
          (item) => item.id == CartItem.productId
        );
        return prevSum + product.Price * CartItem.count;
      }, 0),
  },
};

export default store;
