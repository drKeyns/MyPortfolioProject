<template>
  <div>
    <second-master-page>
      <template v-slot:left>
        <div class="Contacts">
          <img
            class="Foto"
            :src="require('@/assets/Images/Pages/Home.jpg')"
            alt=""
          />
        </div>
      </template>
      <template v-slot:right>
        <div class="text"></div>
      </template>
    </second-master-page>
  </div>
</template>

<script>
import SecondMasterPage from "@/Masterpages/SecondMasterPage.vue";

export default {
  name: "Contacts",
  components: {
    SecondMasterPage,
  },
};
</script>

<script>
export default {
  name: "Contacts",
};
</script>

<style lang="css" scoped>
.main {
  height: 40px;
  color: blue;
}
</style>
