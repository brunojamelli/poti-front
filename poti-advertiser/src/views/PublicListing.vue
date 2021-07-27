<template>
  <div>
    <div>
      <v-row> {{ announcements }} </v-row>
    </div>
    <v-row> </v-row>
  </div>
</template>
<script>
import ApiService from "../utils/ApiService";
let http = {};
export default {
  name: "PublicListing",
  data: () => ({
    title: "",
    announcements: [],
  }),
  async created() {
    http = new ApiService("announcements/public");
    let result = await http.getList();
    this.announcements = result.data;
    window.console.log(this.announcements)
  },
};
</script>

<style scoped>
</style>