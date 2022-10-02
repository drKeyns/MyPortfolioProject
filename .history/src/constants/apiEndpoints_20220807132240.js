export default {
  product: {
    readList: `${process.env.VUE_APP_API_URL}/product`,
    add: `${process.env.VUE_APP_API_URL}/product`,
    update: `${process.env.VUE_APP_API_URL}/product`,
    getProductById: (id) => `${process.env.VUE_APP_API_URL}/product/${id}`,
    delete: `${process.env.VUE_APP_API_URL}/product`,
  },
  user: {
    usersList: `${process.env.VUE_APP_API_URL}/users`,
    signup: `${process.env.VUE_APP_API_URL}/users/signup`,
    login: `${process.env.VUE_APP_API_URL}/users/login`,
  },
};
