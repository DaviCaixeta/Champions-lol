<template>
  <div class="home">
    <FiltroBuscar @filtroBusca="buscaFiltro" />
    <ShowApi :filtro="filtroArrumado" />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowApi from "@/components/ShowApi.vue";
import FiltroBuscar from "@/components/FiltroBuscar.vue";

export default {
  name: "HomeView",
  components: {
    ShowApi,
    FiltroBuscar,
  },

  data() {
    return {
      heroes: [],
      filtroArrumado: "",
    };
  },

  methods: {
    heroesList(herois) {
      this.heroes = herois;
    },

    buscaFiltro(busca) {
      this.filtroArrumado = busca;
    },
  },
};
</script>
