import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

const store = {
  namespaced: true,
  state: {
    ProductList: [],
    cartList: [],

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
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
    addProductToCart(state, productData) {
      const product = state.cartList.find(
        (item) => item._id === productData._id
      );
      if (product) productData.count++;
      // state.cartList.push({ id: new Date().getTime(), productId, count: 1 });
      else state.cartList.push(productData);
    },
    setProducts(state, products) {
      state.ProductList = products;
    },
    addProductToList(state, product) {
      state.products.push(product);
    },
    deleteProductFromList(state, productId) {
      state.products = state.products.filter(
        (product) => product._id !== productId
      );
    },

    setLoading(state, data) {
      state.loading = data;
    },
    setError(state, data) {
      state.error = data;
    },
  },
  actions: {
    loadProducts({ commit }) {
      console.log(123);
      commit("setLoading", true);
      commit("setError", null);
      //Запит на сервер
      axios
        .get(apiEndpoints.product.readList) //Асинхронна дія
        .then(
          //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) commit("setProducts", resData.data);
          else throw new Error("Fatch failed!");
        })
        .catch((err) => {
          //Якщо погано
          commit("setError", err);
        })
        .finally(
          //Завжди
          () => commit("setLoading", false)
        );
    },
    addProduct({ commit }, product) {
      commit("setLoading", true);
      commit("setError", null);

      const formData = new FormData();
      for (const key in product) {
        formData.append(key, product[key]);
      }
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.product.add, formData)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },
    updateProduct({ commit }, product) {
      commit("setLoading", true);
      commit("setError", null);

      const formData = new FormData();
      for (const key in product) {
        formData.append(key, product[key]);
      }
      return new Promise((resolve, reject) => {
        axios
          .put(apiEndpoints.product.update, formData)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },

    getProductById({ commit }, id) {
      commit("setLoading", true);
      commit("setError", null);
      return new Promise((resolve, reject) => {
        axios
          .get(apiEndpoints.product.getProductById(id))
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(resData.data);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },
    deleteProduct({ commit }, id) {
      commit("setLoading", true);
      commit("setError", null);
      new Promise((resolve, reject) => {
        axios
          .delete(apiEndpoints.product.delete, { data: { id } })
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            console.log("-resData");
            console.log(resData);
            if (resData.success) {
              commit("deleteProductFromList", id);
              resolve(true);
            } else throw new Error("Delete failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },
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
    addProductToCart({ commit }, product) {
      commit("addProductToCart", product);
    },
  },
  getters: {
    // products: (state) => state.productListAfterMistake,
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
    // isLoading: (state) => state.loading,
    // isError: (state) => state.error,
  },
};

export default store;
