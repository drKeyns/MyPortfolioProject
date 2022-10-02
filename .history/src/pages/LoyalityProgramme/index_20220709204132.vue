<template>
  <div>
    <div class="main">Loyality Programme</div>
  </div>
  <div>
    <second-master-page>
      <template v-slot:left>
        <div class="About">
          <img
            class="Foto"
            :src="require('@/assets/Images/Pages/loyality.png')"
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
  name: "LoyalityProgramme",
  components: {
    SecondMasterPage,
  },
};
</script>

<style lang="scss" scoped></style>
