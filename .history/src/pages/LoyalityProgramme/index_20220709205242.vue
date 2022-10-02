<template>
  <div>
    <div class="main">Loyality Programme</div>
  </div>
  <div>
    <second-master-page>
      <template v-slot:left>
        <div class="loyality">
          <img
            class="Foto"
            :src="require('@/assets/Images/Pages/loyality.png')"
            alt=""
          />
        </div>
      </template>
      <template v-slot:right>
        <div>
          <h1>НАКОПИЧУЙТЕ БОНУСИ І ЕКОНОМТЕ РАЗОМ З VITA</h1>
        </div>
      </template>
    </second-master-page>
  </div>
</template>

<script>
import SecondMasterPage from "@/Masterpages/SecondMasterPage.vue";

export default {
  name: "LoyalityProgramme",
  components: {
    SecondMasterPage,
  },
};
</script>

<style lang="css" scoped>
.Foto {
  margin: 0px;
  height: 380px;
  width: 500px;
}
</style>
