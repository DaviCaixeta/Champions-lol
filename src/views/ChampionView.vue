<template>
  <div class="champion">
    <h1>{{ championSelected.name }}</h1>
    <img :src="getUrl(this.$route.params.id)" class="championImage" />
    <h3>HABILIDADES</h3>
    <div class="allSpells">
      <div v-for="attributes in championSelected.spells" :key="attributes.id">
        <p class="eachSpell">{{ attributes.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ChampionView",

  data() {
    return {
      championSelected: {},
    };
  },
  mounted() {
    this.getChampion(this.$route.params.id);
  },
  methods: {
    getUrl(id) {
      const url =
        "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
      const urlEnd = "_0.jpg";
      return url + id + urlEnd;
    },
    async getChampion(id) {
      try {
        const response = await axios.get(
          `http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${id}.json`
        );
        this.championSelected = response.data.data[id];
        console.log(this.championSelected);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.championImage {
  width: auto;
  height: auto;
}
.allSpells {
  display: flex;
  justify-content: space-between;
}
.eachSpell {
  font-weight: bold;
}
</style>
