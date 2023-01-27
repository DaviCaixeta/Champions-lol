<template>
  <div>
    <div class="container-name">
      <input
        :value="filter"
        @input="$emit('input', $event.target.value)"
        id="filter-name"
        type="text"
        class="searchName-input"
        placeholder="BUSCAR"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "NameFilter",
  props: ["filter"],
};
</script>

<style scoped>
.container-name {
  padding: 5px;
}
.searchName-input {
  border: none;
  height: 30px;
  margin-right: 5px;
}
</style>
