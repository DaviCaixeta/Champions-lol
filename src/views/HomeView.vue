<template>
  <div>
    <div class="search">
      <div class="container-name">
        <input
          v-model="filter"
          id="filter-name"
          type="text"
          class="searchName-input"
          placeholder="BUSCAR"
        />
        <button @click="clearName()" class="delete-button">X</button>
      </div>
      <div class="container-tags">
        <button value="todos" type="button" @click="allChampions('all')">
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
      <div class="select-difficulty">
        <select
          name="difficulty"
          id="difficulty"
          @change="setDifficulty($event)"
        >
          <option value="" selected disabled hidden>
            TODAS AS DIFICULDADES
          </option>
          <option value="easy">FÁCIL</option>
          <option value="medium">MÉDIO</option>
          <option value="hard">DIFÍCIL</option>
        </select>
      </div>
    </div>
    <div class="heroes-list">
      <div class="heroe" v-for="heroe in displayChampions" :key="heroe.name">
        <p>{{ heroe.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",

  data() {
    return {
      heroes: [],
      filter: "",
      tag: "all",
      difficulty: "",
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
        this.heroes = response.data.data;
        console.log(this.heroes);
      } catch (error) {
        console.log(error);
      }
    },
    clearName() {
      this.filter = "";
      this.tag = "all";
    },
    allChampions(value) {
      this.tag = value;
      console.log(this.tag);
    },
    setDifficulty(event) {
      this.difficulty = event.target.value;
    },
  },
  computed: {
    displayChampions() {
      const champions = Object.values(this.heroes);
      const search = this.filter.toLowerCase();
      const filterBySearch = (champion) => {
        const x = champion.name.toLowerCase().includes(search);
        return x;
      };
      const filterByTag = (champion) => {
        if (this.tag === "all") {
          return champion;
        } else {
          const y = champion.tags.includes(this.tag);
          return y;
        }
      };
      const z = champions.filter(filterBySearch).filter(filterByTag);
      console.log(z);
      return champions.filter(filterBySearch).filter(filterByTag);
    },
  },
};
</script>

<style scoped>
.search {
  display: flex;
  margin-left: 20px;
  margin-bottom: 50px;
}
.container-name {
  border: 2px solid #000000;
  padding: 5px;
}
.searchName-input {
  border: none;
}
.delete-button {
  background-color: red;
  font-weight: bold;
  cursor: pointer;
}
.heroes-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
.heroe {
  margin: 0 20px;
}
.container-tags {
  display: flex;
  margin: 0px 20px;
}
.buttons-tags {
  margin-left: 15px;
}
</style>
