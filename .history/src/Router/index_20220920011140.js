import { createRouter, createWebHashHistory } from "vue-router";
// 1. Define route components.
// These can be imported from other files
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Promotions from "@/pages/Promotions";
import ProductsCatalogue from "@/pages/ProductsCatalogue";
import LoyalityProgramme from "@/pages/LoyalityProgramme";
import Payment from "@/pages/Payment";
import Order from "@/pages/Order";
import Contacts from "@/pages/Contacts";
import Cart from "@/pages/Cart";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import AddNewProduct from "@/pages/AddNewProduct";
import EditPage from "@/pages/EditPage";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: AboutUs, name: "aboutUs" },
  {
    path: "/products/:category?",
    component: ProductsCatalogue,
    name: "productsCatalogue",
  },
  {
    path: "/products/add_new_product",
    component: AddNewProduct,
    name: "addnewproduct",
  },
  {
    path: "/promo",
    component: Promotions,
    name: "promotion",
  },
  {
    path: "/loyality",
    component: LoyalityProgramme,
    name: "loyalityProgramme",
  },
  {
    path: "/payment",
    component: Payment,
    name: "payment",
  },
  {
    path: "/order",
    component: Order,
    name: "order",
  },
  { path: "/contacts", component: Contacts, name: "contacts" },
  { path: "/cart", component: Cart, name: "cart" },
  { path: "/login", component: Login, name: "login" },
  { path: "/signup", component: Signup, name: "signup" },
];
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
export default router;
