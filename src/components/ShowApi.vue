<template>
  <div>
    <div class="listagemHerois">
      <div class="heroi" v-for="heroi in herois" :key="heroi.id">
        <p>{{ heroi.id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js";
export default {
  name: "ShowApi",
  data() {
    return {
      herois: [],
    };
  },
  mounted() {
    this.getChampion();
  },
  methods: {
    getChampion() {
      api
        .get(
          "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"
        )
        .then((response) => {
          console.log(response.data.data);
          this.herois = response.data.data;
        });
    },
  },
};
</script>

<style scoped>
.listagemHerois {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
.heroi {
  margin: 0 20px;
}
</style>
