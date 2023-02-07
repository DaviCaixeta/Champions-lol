<template>
  <div>
    <div class="container-tags">
      <ButtonTags :value="tag" @click.native="$emit('input', 'all')">
        TODOS
      </ButtonTags>
      <ButtonTags :value="tag" @click.native="$emit('input', 'Assassin')">
        ASSASSINOS
      </ButtonTags>
      <ButtonTags :value="tag" @click.native="$emit('input', 'Fighter')">
        LUTADORES
      </ButtonTags>
      <ButtonTags :value="tag" @click.native="$emit('input', 'Mage')">
        MAGOS
      </ButtonTags>
      <ButtonTags :value="tag" @click.native="$emit('input', 'Marksman')">
        ATIRADORES
      </ButtonTags>
      <ButtonTags :value="tag" @click.native="$emit('input', 'Support')">
        SUPORTES
      </ButtonTags>
      <ButtonTags :value="tag" @click.native="$emit('input', 'Tank')">
        TANQUES
      </ButtonTags>
    </div>
  </div>
</template>

<script>
import ButtonTags from "./ButtonTags.vue";
export default {
  name: "TagFilter",
  components: {
    ButtonTags,
  },

  props: ["tag"],
};
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
}
</style>
