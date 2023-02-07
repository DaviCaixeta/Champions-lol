<template>
  <div>
    <div class="search">
      <NameFilter v-model="filter" />
      <TagFilter v-model="tag" />
      <DifficultyFilter
        v-model="difficulty"
        @difficulty-clear="difficulty = ''"
      />
    </div>
    <div class="heroes-list">
      <div
        v-for="champion in displayChampions"
        :key="champion.name"
        class="heroe"
      >
        <router-link :to="'champions/' + champion.id">
          <img :src="getUrl(champion.id)" class="championsImages" />
          <p class="championsNames">{{ champion.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NameFilter from "@/components/NameFilter.vue";
import TagFilter from "@/components/TagFilter.vue";
import DifficultyFilter from "@/components/DifficultyFilter.vue";

export default {
  name: "HomeView",
  components: {
    NameFilter,
    TagFilter,
    DifficultyFilter,
  },

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
      } catch (error) {
        console.log(error);
      }
    },
    getUrl(id) {
      const url =
        "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
      const urlEnd = "_0.jpg";
      return url + id + urlEnd;
    },
  },
  computed: {
    displayChampions() {
      const champions = Object.values(this.heroes);
      const search = this.filter.toLowerCase();
      const filterBySearch = (champion) =>
        champion.name.toLowerCase().includes(search);
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
      const all = champions
        .filter(filterBySearch)
        .filter(filterByTag)
        .filter(filterByDifficulty);
      console.log(all);
      return all;
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
.heroes-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.heroe {
  width: 250px;
  height: 350px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.championsImages {
  width: 250px;
  height: 300px;
}
.championsImages,
.championsNames {
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  margin-top: 4px;
  background-color: lightgray;
}
.button {
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>
