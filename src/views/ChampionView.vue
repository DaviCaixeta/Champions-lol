<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import axios from "axios";

const championSelected = ref({});

const getUrl = (id) => {
  const url = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
  const urlEnd = "_0.jpg";
  return url + id + urlEnd;
};

const getChampion = async (id) => {
  try {
    const response = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${id}.json`
    );
    championSelected.value = response.data.data[id];
    console.log(championSelected.value);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  const route = getCurrentInstance()?.proxy.$route;
  if (route && route.params.id) {
    getChampion(route.params.id);
  }
});
</script>

<template>
  <div class="champion flex flex-col items-center gap-10">
    <h1>{{ championSelected.name }}</h1>
    <img :src="getUrl($route.params.id)" class="champion-image" />
    <h3>HABILIDADES</h3>
    <div class="all-spells">
      <div v-for="attributes in championSelected.spells" :key="attributes.id">
        <p class="each-spell">{{ attributes.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.champion-image {
  width: auto;
  height: auto;
}
.all-spells {
  display: flex;
  justify-content: space-between;
  gap: 50px;
}
.each-spell {
  font-weight: bold;
}
</style>
