<template>
  <div>
    <h2>Administradores</h2>
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

    <Button
      label="Cadastrar Novo"
      @click="navegateTo('registro-administradores')"
    />
  </div>
</template>

<style scoped>
</style>

<script>
import ApiService from "../utils/ApiService";
const http = new ApiService("administrator");
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "Administration",
  components: {
    Card,
    Button,
  },
  data: () => ({
    adms: null,
  }),
  methods: {
    navegateTo(where) {
      this.$router.push({ name: where });
    },
  },

  async created() {
    this.adms = [];
    let response = await http.getList();
    this.adms = response.data;
  },
  async mounted() {
    let response = await http.getList();
    this.adms = response.data;
  },
};
</script>