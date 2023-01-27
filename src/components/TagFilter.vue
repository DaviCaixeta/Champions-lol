<template>
  <div>
    <div class="container-tags">
      <button
        value="todos"
        type="button"
        class="buttons-tags"
        @click="allChampions('all')"
      >
        TODOS
      </button>
      <button
        value="assassinos"
        type="button"
        class="buttons-tags"
        @click="allChampions('Assassin')"
      >
        ASSASSINOS
      </button>
      <button
        value="lutadores"
        type="button"
        class="buttons-tags"
        @click="allChampions('Fighter')"
      >
        LUTADORES
      </button>
      <button
        value="magos"
        type="button"
        class="buttons-tags"
        @click="allChampions('Mage')"
      >
        MAGOS
      </button>
      <button
        value="atiradores"
        type="button"
        class="buttons-tags"
        @click="allChampions('Marksman')"
      >
        ATIRADORES
      </button>
      <button
        value="suportes"
        type="button"
        class="buttons-tags"
        @click="allChampions('Support')"
      >
        SUPORTES
      </button>
      <button
        value="tanques"
        type="button"
        class="buttons-tags"
        @click="allChampions('Tank')"
      >
        TANQUES
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagFilter",

  data() {
    return {
      tag: "",
    };
  },
  methods: {
    allChampions(value) {
      this.tag = value;
      this.$emit("tagButton", this.tag);
    },
  },
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
.buttons-tags {
  margin-left: 15px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}
.buttons-tags:focus {
  background-color: green;
}
</style>
