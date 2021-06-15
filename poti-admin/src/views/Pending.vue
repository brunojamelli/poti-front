<template>
  <div>
    <h2>Anúncios Pendentes</h2>
    <div class="grid-container">
      <Card
        class="grid-item"
        v-for="item in pendings"
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

export default {
  name: "Pending",
  components: {
    Card,
  },
  data: () => ({
    pendings: null,
  }),
  async created() {
    this.pendings = [];
  },
  async mounted() {
    const params = new URLSearchParams({
      isValid: 0,
    }).toString();

    const response = await http.getListWithParams(params);
    this.pendings = response.data;
  },
};
</script>