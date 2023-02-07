<template>
  <div>
    <div class="container-select">
      <select
        name="difficulty"
        id="difficulty"
        class="select-difficulty"
        :value="difficulty"
        @change="$emit('input', $event.target.value)"
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
<script>
export default {
  name: "DifficultyFilter",

  props: ["difficulty"],
};
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
  width: 200px;
  height: 40px;
  margin-right: 5px;
}
.delete-button {
  background-color: red;
  font-weight: bold;
  cursor: pointer;
  height: 20px;
}
</style>
