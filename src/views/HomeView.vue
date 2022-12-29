<template>
  <div class="home">
    <ShowApi />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowApi from "@/components/ShowApi.vue";

export default {
  name: "HomeView",
  components: {
    ShowApi,
  },
};
</script>
