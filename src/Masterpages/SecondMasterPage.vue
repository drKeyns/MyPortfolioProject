<template>
  <div class="container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondMasterPage",
};
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  display: flex;
}
.right {
  width: 50%;
}
.left {
  width: 50%;
}
</style>
