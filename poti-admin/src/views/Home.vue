<template>
  <div class="home">
    <h2>Inicio</h2>
    {{ list }}
  </div>
</template>

<style scoped>
</style>

<script>
// @ is an alias to /src
import ApiService from "../utils/ApiService";
const http = new ApiService("announcement");
export default {
  name: "Home",
  components: {},
  data: () => ({
    list: null,
  }),
  async created() {
    let response = await http.getList();
    this.list = response.data;
  },
};
</script>
