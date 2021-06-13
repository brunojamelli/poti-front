<template>
  <div class="home">
    <h2>Bem Vindo</h2>
    <h3>Lista de Anuncios</h3>
    <div class="grid-container">
      <Card
        class="grid-item"
        v-for="item in an_list"
        :key="item.title"
        style="width: 22rem; margin-bottom: 1em"
      >
        <template #title>
          <div class="item-title">
            {{ item.title }}
          </div>
        </template>
        <template #content>
          <p>
            {{ item.description }}
          </p>
        </template>
        <template #subtitle> {{ item.value }} <b>R$</b> </template>
      </Card>
    </div>

    <!-- {{ an_list }} -->
  </div>
</template>

<style scoped>
</style>

<script>
// @ is an alias to /src
import Card from "primevue/card";
import ApiService from "../utils/ApiService";
const http = new ApiService("announcement");
export default {
  name: "Home",
  components: {
    Card,
  },
  data: () => ({
    an_list: null,
  }),
  async created() {
    this.an_list = [];
  },
  async mounted() {
    let response = await http.getList();
    this.an_list = response.data;
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: left;
}
</style>
