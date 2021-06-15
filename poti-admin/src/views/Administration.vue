<template>
  <div>
    <h2>administradores por aqui</h2>
  </div>
</template>

<style scoped>
</style>

<script>
import ApiService from "../utils/ApiService";
const http = new ApiService("administrator");

export default {
  name: "Administration",
  components: {
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