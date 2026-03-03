<template>
  <div class="w-full">
    <div class="container-select">
      <select
        name="difficulty"
        id="difficulty"
        class="select-difficulty"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option value="" selected disabled hidden>TODAS AS DIFICULDADES</option>
        <option value="easy">FÁCIL</option>
        <option value="medium">MÉDIO</option>
        <option value="hard">DIFÍCIL</option>
      </select>
      <button @click="$emit('difficulty-clear')" class="delete-button">
        X
      </button>
    </div>
  </div>
</template>
<script setup>
defineProps(["modelValue"]);
</script>
<style scoped>
.container-select {
  display: flex;
  align-items: center;
}
.select-difficulty {
  border: none;
  vertical-align: bottom;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin-right: 15px;
}
.delete-button {
  background-color: red;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 10px;
}
</style>
