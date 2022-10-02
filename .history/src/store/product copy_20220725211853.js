// import { createStore } from "vuex";
// const store = createStore({
//   namespaced: true,
//   state() {
//     return {
//       ProductList: [
//         {
//           id: 1,
//           img: require("../assets/Images/Products Catalogue/Fish and sausages/Sausage.jpg"),
//           Title: "Ковбаса копчена",
//           Trademark: "Глобіно",
//           Price: 205.0,
//         },
//         {
//           id: 2,
//           img: require("../assets/Images/Products Catalogue/Fish and sausages/Sausages.jpg"),
//           Title: "Cардельки-Мортадельки",
//           Trademark: "Глобіно",
//           Price: 168.0,
//         },
//         {
//           id: 3,
//           img: require("../assets/Images/Products Catalogue/Fish and sausages/Fish.jpg"),
//           Title: "Замороженая рыба, селедка",
//           Trademark: "",
//           Price: 71.0,
//         },
//         {
//           id: 4,
//           img: require("../assets/Images/Products Catalogue/Milk-Products/Milk.jpg"),
//           Title: "Молоко",
//           Trademark: "Селянське",
//           Price: 36.0,
//         },
//         {
//           id: 5,
//           img: require("../assets/Images/Products Catalogue/Milk-Products/Sour-cream.jpg"),
//           Title: "Сметана",
//           Trademark: "Селянське",
//           Price: 39.0,
//         },
//         {
//           id: 6,
//           img: require("../assets/Images/Products Catalogue/Milk-Products/Yogurt.jpg"),
//           Title: "Йогурт",
//           Trademark: "Дольче",
//           Price: 41.0,
//         },
//         {
//           id: 7,
//           img: require("../assets/Images/Products Catalogue/Grocery/Pasta.jpg"),
//           Title: "Макароны",
//           Trademark: "Щедро",
//           Price: 47.0,
//         },
//         {
//           id: 8,
//           img: require("../assets/Images/Products Catalogue/Grocery/Buckwheat.jpg"),
//           Title: "Гречка",
//           Trademark: "Националь",
//           Price: 85.0,
//         },
//         {
//           id: 9,
//           img: require("../assets/Images/Products Catalogue/Grocery/Rise.webp"),
//           Title: "Рис",
//           Trademark: "Зерновита",
//           Price: 77.0,
//         },
//         {
//           id: 10,
//           img: require("../assets/Images/Products Catalogue/Fruits/Bananas.jpg"),
//           Title: "Бананы",
//           Trademark: "",
//           Price: 55.0,
//         },
//         {
//           id: 11,
//           img: require("../assets/Images/Products Catalogue/Fruits/Grapes.jpg"),
//           Title: "Виноград",
//           Trademark: "",
//           Price: 135.0,
//         },
//         {
//           id: 12,
//           img: require("../assets/Images/Products Catalogue/Fruits/Apples.jpg"),
//           Title: "Яблоки",
//           Trademark: "",
//           Price: 41.0,
//         },
//         {
//           id: 13,
//           img: require("../assets/Images/Products Catalogue/Drinks/Beer.jpg"),
//           Title: "Пиво",
//           Trademark: "Heineken",
//           Price: 43.0,
//         },
//         {
//           id: 14,
//           img: require("../assets/Images/Products Catalogue/Drinks/Pepsi.jpg"),
//           Title: "Пепсі",
//           Trademark: "Pepsi",
//           Price: 38.0,
//         },
//         {
//           id: 15,
//           img: require("../assets/Images/Products Catalogue/Drinks/Juice.jpg"),
//           Title: "Нектар апельсиновий",
//           Trademark: "Садочок",
//           Price: 46.0,
//         },
//         {
//           id: 16,
//           img: require("../assets/Images/Products Catalogue/Waffles and cakes/Cake.jpg"),
//           Title: "Торт Ужгород",
//           Trademark: "Штефаньо",
//           Price: 230.0,
//         },
//         {
//           id: 17,
//           img: require("../assets/Images/Products Catalogue/Waffles and cakes/Roulets.jpg"),
//           Title: "Рулет",
//           Trademark: "Своя лінія",
//           Price: 40.0,
//         },
//         {
//           id: 18,
//           img: require("../assets/Images/Products Catalogue/Waffles and cakes/Waffles.jpg"),
//           Title: "Вафлі",
//           Trademark: "Артек",
//           Price: 40.0,
//         },
//       ],
//       cartList: [
//         { id: 2, productId: 2, count: 3 },
//         { id: 4, productId: 2, count: 2 },
//       ],
//     };
//   },
//   getters: {
//     productList: (state) => state.ProductList,
//     getProductbyId: (state) => (productId) =>
//       state.ProductList.find((item) => item.id == productId),
//     cartList: (state) => state.cartList,
//     getTotalPrice: (state) =>
//       state.cartList.reduce((prevSum, cartItem) => {
//         const product = state.ProductList.find(
//           (item) => item.id == cartItem.productId
//         );
//         return prevSum + product.Price * cartItem.count;
//       }, 0),
//   },
//   mutations: {
//     incrementCartItemCount(state, cartItemId) {
//       const item = state.cartList.find((item) => item.id === cartItemId);
//       item.count += 1;
//     },
//     decrementCartItemCount(state, cartItemId) {
//       const item = state.cartList.find((item) => item.id === cartItemId);
//       if (item.count > 1) item.count -= 1;
//     },
//     deleteCartItemCount(state, cartItemId) {
//       state.cartList = state.cartList.filter((item) => item.id !== cartItemId);
//     },
//     addProduct(state, productId) {
//       const product = state.cartList.find(
//         (item) => item.productId === productId
//       );
//       if (product) product.count++;
//       else
//         state.cartList.push({ id: new Date().getTime(), productId, count: 1 });
//     },
//   },
//   actions: {
//     cartAction({ commit }, payload) {
//       switch (payload.type) {
//         case "increment":
//           commit("incrementCartItemCount", payload.value);
//           break;
//         case "decrement":
//           commit("decrementCartItemCount", payload.value);
//           break;
//         case "delete":
//           commit("deleteCartItemCount", payload.value);
//           break;
//       }
//     },
//     addProduct({ commit }, productId) {
//       commit("addProduct", productId);
//     },
//   },
// });
// export default store;
