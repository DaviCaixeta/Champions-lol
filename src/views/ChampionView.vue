<template>
  <div class="champion">
    <h1>{{ id }}</h1>
    <img :src="url + id + urlEnd" class="championImage" />
  </div>
</template>

<script>
export default {
  name: "ChampionView",

  data() {
    return {
      id: this.$route.params.id,
      url: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/",
      urlEnd: "_0.jpg",
    };
  },
};
</script>

<style scoped>
.championImage {
  width: auto;
  height: auto;
}
</style>
