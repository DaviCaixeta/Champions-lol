<template>
  <div>
    <div class="pesquisaSite">
      <div class="container">
        <input
          v-model="filtro"
          id="filtro"
          type="text"
          class="inputPesquisa"
          placeholder="Pesquise aqui..."
        />
        <button @click="excluirPesquisa()" class="botaoExcluir">X</button>
      </div>
      <button @click="filtrarHerois()" class="buscarCampeao">Pesquisar</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FiltroBuscar",

  data() {
    return {
      filtro: "",
    };
  },

  methods: {
    filtrarHerois() {
      if (!this.filtro) {
        this.$emit("filtroBusca", null);
        return;
      } else {
        let filtroArrumado = this.filtro.toLowerCase();
        console.log(filtroArrumado);
        this.$emit("filtroBusca", filtroArrumado);
      }
    },
    excluirPesquisa() {
      this.$emit("filtroBusca", null);
      this.filtro = "";
    },
  },
};
</script>

<style scoped>
.pesquisaSite {
  display: flex;
  margin-left: 20px;
  margin-bottom: 50px;
}
.container {
  border: 2px solid #000000;
  padding: 5px;
}
.inputPesquisa {
  border: none;
}
.botaoExcluir {
  background-color: red;
  font-weight: bold;
  cursor: pointer;
}
.buscarCampeao {
  margin-left: 10px;
  background-color: rgb(75, 75, 255);
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
}
</style>
