<template>
  <div>
    <div class="main">Loyality Programme</div>
    <menu-block @select="onSelect" />
    <content :content-data="selectedData" />
  </div>
</template>

<script>
import MenuBlock from "@/components/MenuBlock";
import SelectedData from "@/components/SelectedData";
export default {
  name: "LoyalityProgramme",
  components: {
    MenuBlock,
    SelectedData,
  },

  data() {
    return {
      selectedData: null,
    };
  },

  methods: {
    onSelect(SecondMenuData) {
      this.selectedData = SecondMenuData;
    },
  },
};
</script>

<style lang="scss" scoped></style>
