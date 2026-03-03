<template>
  <div>
    <div class="container-name">
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        id="filter-name"
        type="text"
        class="search-name-input"
        placeholder="BUSCAR"
      />
    </div>
  </div>
</template>

<script setup>
defineProps(["modelValue"]);
</script>

<style scoped>
.container-name {
  padding: 5px;
}
.search-name-input {
  border: none;
  height: 30px;
  margin-right: 5px;
  padding: 10px;
}
</style>
