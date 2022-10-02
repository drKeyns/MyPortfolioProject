<!-- eslint-disable no-undef -->
<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="submit">
      <div>Please log in</div>
      <div>
        email :
        <input type="text" v-model="email" name="email" placeholder="Email" />
      </div>
      <div class="form-group">
        password :
        <input
          type="password"
          v-model="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div class="form-group error" v-if="message">{{ message }}</div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
        <router-link to="/signup" class="btn btn-link">Sign up</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      admin: false,
      message: "",
    };
  },

  computed: {
    ...mapGetters("auth", ["isAdmin"]),
  },

  methods: {
    ...mapActions("auth", ["login", "logout"]),

    async submit() {
      try {
        const user = { email: this.email, password: this.password };
        const result = await this.login(user);

        if (result === true) {
          this.message = "User login successfully";

          this.$router.push({ path: "/" });
        } else {
          this.message = "Login error!";
        }
      } catch (err) {
        this.message = err.response.data.error;
      }
    },
    // test() {
    //   console.log(this.isAdmin);
    // },
  },
  mounted() {
    console.log(this.isAdmin);
  },

  created() {
    this.logout();
  },
};
</script>
