<template>
  <div>
    {{ whatsapp }}
  </div>
</template>
<script>
import ApiService from "../utils/ApiService";
let http = {};

export default {
  name: "AnnouncementContact",
  data: () => ({
    whatsapp: '',
  }),
  props: ["data"],
  async created() {
    http = new ApiService(
      `advertiser/${this.data.advertiser_id}`
    );
    let response = await http.getList();
    this.whatsapp = response.data[0].whatsapp;
    window.console.log(response.data[0]);
  },
};
</script>