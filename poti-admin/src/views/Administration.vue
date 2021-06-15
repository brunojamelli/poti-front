<template>
  <div>
    <h2>administradores por aqui</h2>
    <div class="grid-container">
      <Card
        class="grid-item"
        v-for="item in adms"
        :key="item.id"
        style="width: 22rem; margin-bottom: 1em"
      >
        <template #title>
          <div class="item-title">
            {{ item.name }}
          </div>
        </template>
        <template #content>
          <p>
            {{ item.email }}
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import ApiService from "../utils/ApiService";
const http = new ApiService("administrator");
import Card from "primevue/card";

export default {
  name: "Administration",
  components: {
    Card,
  },
  data: () => ({
    adms: null,
  }),
  async created() {
    this.adms = [];
  },
  async mounted() {
    let response = await http.getList();
    this.adms = response.data;
  },
};
</script>