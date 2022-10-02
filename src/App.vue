<template>
  <main-master-page>
    <router-view></router-view>
  </main-master-page>
</template>

<script>
import MainMasterPage from "./Masterpages/MainMasterPage.vue";

export default {
  name: "App",
  components: {
    MainMasterPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  text-align: center;
}
.container {
  display: flex;
  text-align: center;
}
.container div {
  margin: 10px;
  border-radius: 10px;
}
</style>
