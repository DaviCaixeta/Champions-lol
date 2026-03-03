<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import NameFilter from "@/components/NameFilter.vue";
import TagFilter from "@/components/TagFilter.vue";
import DifficultyFilter from "@/components/DifficultyFilter.vue";

const heroes = ref([]);
const filter = ref("");
const tag = ref("all");
const difficulty = ref("");

const getChampion = async () => {
  try {
    const response = await axios.get(
      "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"
    );
    heroes.value = response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getUrl = (id) => {
  const url = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
  const urlEnd = "_0.jpg";
  return url + id + urlEnd;
};

onMounted(() => {
  getChampion();
});

const displayChampions = computed(() => {
  const champions = Object.values(heroes.value);
  const search = filter.value.toLowerCase();
  const filterBySearch = (champion) =>
    champion.name.toLowerCase().includes(search);
  const filterByTag = (champion) => {
    if (tag.value === "all") {
      return champion;
    } else {
      const y = champion.tags.includes(tag.value);
      return y;
    }
  };
  const filterByDifficulty = (champion) => {
    if (difficulty.value === "easy") {
      if (champion.info.difficulty <= 3) {
        const z = true;
        return z;
      } else {
        return;
      }
    } else if (difficulty.value === "medium") {
      if (champion.info.difficulty >= 4 && champion.info.difficulty <= 7) {
        const z = true;
        return z;
      } else {
        return;
      }
    } else if (difficulty.value === "hard") {
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
});
</script>

<template>
  <div class="container mx-auto">
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
          <img :src="getUrl(champion.id)" class="champions-images" />
          <p class="champions-names text-white text-left cursor-pointer">
            {{ champion.name }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  margin-bottom: 50px;
  border: 4px solid rgba(0, 0, 0, 0.7);
  padding: 5px;
}
.heroes-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.heroe {
  margin-bottom: 20px;
}
.champions-images {
  aspect-ratio: 0.75 / 1;
  cursor: pointer;
  object-fit: cover;
  object-position: top;
}
.champions-names {
  font-size: 20px;
  font-weight: bold;
  background-color: rgb(10, 20, 40);
  margin: 0;
  padding: 10px;
  text-transform: uppercase;
  font-style: italic;
  border: none;
}
.button {
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>
