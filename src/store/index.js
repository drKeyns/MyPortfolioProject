import { createStore } from "vuex";

import product from "./product";
import auth from "./auth";

const store = createStore({
  modules: {
    product,
    auth,
  },
});

export default store;
