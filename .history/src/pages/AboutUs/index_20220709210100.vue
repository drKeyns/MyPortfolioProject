<template>
  <div class="main">About Us</div>
  <div>
    <second-master-page>
      <template v-slot:left>
        <div class="About">
          <img
            class="Foto"
            :src="require('@/assets/Images/Pages/About.png')"
            alt=""
          />
        </div>
      </template>
      <template v-slot:right>
        <div>
          <h1>Техт</h1>
        </div>
      </template>
    </second-master-page>
  </div>
</template>

<script>
import SecondMasterPage from "@/Masterpages/SecondMasterPage.vue";

export default {
  name: "AboutUs",
  components: {
    SecondMasterPage,
  },
};
</script>

<style lang="css" scoped>
.Foto {
  margin: 3px black solid;
  height: 380px;
  width: 500px;
}
</style>
