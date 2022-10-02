<template>
  <div>
    <h2>Sign up</h2>
    <form @submit.prevent="submit">
      <div>
        Name :
        <input type="text" v-model="userMame" name="name" placeholder="Name" />
      </div>
      <div>
        email :
        <input type="text" v-model="email" name="email" placeholder="Email" />
      </div>
      <div class="form-group">
        Password :
        <input
          type="password"
          v-model="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div v-if="message">{{ message }}</div>
      <div>
        <button type="submit">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Signup',
  data() {
    return {
      userMame: '',
      email: '',
      password: '',
      message: '',
    }
  },

  methods: {
    ...mapActions('auth', ['signup', 'logout']),

    async submit() {
      try {
        const user = {
          name: this.userMame,
          email: this.email,
          password: this.password,
        }
        const result = await this.signup(user)
        if (result === true) {
          this.message = ''
          this.$router.push({
            path: '/login',
            query: { signedup: 'true' },
          })
        } else {
          this.message = result //'SignUp error!';
        }
      } catch (err) {
        this.message = err.message
      }
    },
  },

  created() {
    this.logout()
  },
}
</script>
