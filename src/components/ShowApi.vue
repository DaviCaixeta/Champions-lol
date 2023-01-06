<template>
  <div>
    <div class="listagemHerois">
      <div class="heroi" v-for="heroi in filtragemHerois" :key="heroi">
        <p>{{ heroi }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowApi",

  props: {
    filtro: {
      type: String,
    },
  },

  data() {
    return {
      herois: [],
    };
  },
  mounted() {
    this.getChampion();
  },
  methods: {
    async getChampion() {
      try {
        const response = await axios.get(
          "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"
        );
        console.log(response.data.data);
        this.herois = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed: {
    filtragemHerois() {
      let heroisFiltrados = Object.keys(this.herois); //OBJECT.VALUES
      if (!this.filtro) {
        return heroisFiltrados;
      } else {
        heroisFiltrados = heroisFiltrados.filter((heroi) => {
          var champion;
          var item = heroi.toLowerCase();
          champion = item.includes(this.filtro);
          return champion;
        });
        console.log(heroisFiltrados);
        return heroisFiltrados;
      }
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
