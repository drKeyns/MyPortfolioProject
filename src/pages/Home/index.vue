<template>
  <div>
    <second-master-page>
      <template v-slot:left>
        <div class="homepage">
          <img
            class="Home page"
            :src="require('@/assets/Images/Pages/Home.jpg')"
            alt=""
          />
        </div>
      </template>
      <template v-slot:right>
        <div class="text">
          <h1 class="big">Головна</h1>
          <h1 class="big">
            СУПЕРМАРКЕТ ViTA: НЕ СТІЙТЕ НА КАСІ - ПРОВОДИТЕ ЧАС З БЛИЗЬКИМИ
          </h1>
          <h2 class="small">
            Cупермаркет Vita - унікальний проект, мета якого - надати покупцям
            вибір нової і дійсно якісної продукції. У роботі ми дотримуємось
            європейських традицій сервісу. І все це для того, щоб ви проводили
            більше часу з сім'єю, а не в чергах на касах.
          </h2>
        </div>
      </template>
    </second-master-page>
  </div>
</template>

<script>
import SecondMasterPage from "@/Masterpages/SecondMasterPage.vue";

export default {
  name: "Home",
  components: {
    SecondMasterPage,
  },
};
</script>

<style lang="css" scoped>
.homepage {
  height: 450px;
}
.text {
  height: 450px;
}
.page {
  height: 380px;
  width: 600px;
}
.big {
  color: blue;
}
</style>
