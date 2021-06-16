<template>
  <div>
    <h2>Anúncios Validos</h2>
    <div class="grid-container">
      <Card
        class="grid-item"
        v-for="item in valids"
        :key="item.id"
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
  </div>
</template>
<style scoped>
</style>

<script>
import ApiService from "../utils/ApiService";
const http = new ApiService("announcement/by_validation");
import Card from "primevue/card";
// import Button from "primevue/button";

export default {
  name: "Valids",
  components: {
    Card,
    // Button,
  },
  data: () => ({
    valids: null,
  }),
  async created() {
    this.valids = [];
  },
  async mounted() {
    const params = new URLSearchParams({
      isValid: 1,
    }).toString();

    const response = await http.getListWithParams(params);
    this.valids = response.data;
  },
};
</script>