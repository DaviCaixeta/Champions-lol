<template>
  <div>
    <div class="container-tags">
      <ButtonTags
        :value="modelValue"
        @click="$emit('update:modelValue', 'all')"
      >
        TODOS
      </ButtonTags>
      <ButtonTags
        :value="modelValue"
        @click="$emit('update:modelValue', 'Assassin')"
      >
        ASSASSINOS
      </ButtonTags>
      <ButtonTags
        :value="modelValue"
        @click="$emit('update:modelValue', 'Fighter')"
      >
        LUTADORES
      </ButtonTags>
      <ButtonTags
        :value="modelValue"
        @click="$emit('update:modelValue', 'Mage')"
      >
        MAGOS
      </ButtonTags>
      <ButtonTags
        :value="modelValue"
        @click="$emit('update:modelValue', 'Marksman')"
      >
        ATIRADORES
      </ButtonTags>
      <ButtonTags
        :value="modelValue"
        @click="$emit('update:modelValue', 'Support')"
      >
        SUPORTES
      </ButtonTags>
      <ButtonTags
        :value="modelValue"
        @click="$emit('update:modelValue', 'Tank')"
      >
        TANQUES
      </ButtonTags>
    </div>
  </div>
</template>

<script setup>
import ButtonTags from "./ButtonTags.vue";

defineProps(["modelValue"]);
</script>

<style scoped>
.container-tags {
  display: flex;
  margin: 0px 20px;
  padding: 0 20px;
  border-right: 4px solid rgba(0, 0, 0, 0.6);
  border-left: 4px solid rgba(0, 0, 0, 0.6);
  height: 40px;
}
.buttons-tags:focus {
  background-color: green;
  padding: 0 10px;
}
</style>
