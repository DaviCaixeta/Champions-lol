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
        <button v-if="filter !== ''" @click="clearName()" class="delete-button">
          X
        </button>
      </div>
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
      <div class="container-select">
        <select
          name="difficulty"
          id="difficulty"
          class="select-difficulty"
          @change="setDifficulty($event)"
        >
          <option value="" selected disabled hidden v-if="difficulty === ''">
            TODAS AS DIFICULDADES
          </option>
          <option value="easy">FÁCIL</option>
          <option value="medium">MÉDIO</option>
          <option value="hard">DIFÍCIL</option>
        </select>
        <button
          v-if="difficulty !== ''"
          @click="clearSelect()"
          class="delete-button"
        >
          X
        </button>
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
    allChampions(value) {
      this.tag = value;
      console.log(this.tag);
    },
    setDifficulty(event) {
      this.difficulty = event.target.value;
    },
    clearName() {
      this.filter = "";
      // this.tag = "all";
    },
    clearSelect() {
      this.difficulty = "";
    },
  },
  computed: {
    displayChampions() {
      const champions = Object.values(this.heroes);
      console.log(champions);
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
      const filterByDifficulty = (champion) => {
        if (this.difficulty === "easy") {
          if (champion.info.difficulty <= 3) {
            const z = true;
            return z;
          } else {
            return;
          }
        } else if (this.difficulty === "medium") {
          if (champion.info.difficulty >= 4 && champion.info.difficulty <= 7) {
            const z = true;
            return z;
          } else {
            return;
          }
        } else if (this.difficulty === "hard") {
          if (champion.info.difficulty > 7) {
            const z = true;
            return z;
          } else {
            return;
          }
        } else {
          return champion;
        }
      };
      const a = champions
        .filter(filterBySearch)
        .filter(filterByTag)
        .filter(filterByDifficulty);
      console.log(a);
      return a;
    },
  },
};
</script>

<style scoped>
.search {
  display: flex;
  margin-left: 20px;
  margin-bottom: 50px;
  border: 4px solid rgba(0, 0, 0, 0.7);
  padding: 5px;
}
.container-name {
  padding: 5px;
}
.searchName-input {
  border: none;
  height: 30px;
  margin-right: 5px;
}
.delete-button {
  background-color: red;
  font-weight: bold;
  cursor: pointer;
  height: 20px;
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
  padding: 0 20px;
  border-right: 4px solid rgba(0, 0, 0, 0.6);
  border-left: 4px solid rgba(0, 0, 0, 0.6);
}
.buttons-tags {
  margin-left: 15px;
  cursor: pointer;
  border: none;
}
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
</style>
