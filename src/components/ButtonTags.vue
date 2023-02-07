<template>
  <button class="buttons-tags" type="button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonTags",
};
</script>
<style scoped>
.buttons-tags {
  margin-left: 15px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}
</style>
