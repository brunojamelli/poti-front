<template>
  <div>
    {{ contact.email }}
    <br>
    {{ contact.whatsapp }}
    
  </div>
</template>
<script>
import ApiService from "../utils/ApiService";
let http = {};

export default {
  name: "AnnouncementContact",
  data: () => ({
    whatsapp: '',
    contact: {}
  }),
  props: ["data"],
  async created() {
    http = new ApiService(
      `advertiser/public/${this.data.advertiser_id}`
    );
    let response = await http.getList();
    this.whatsapp = response.data[0].whatsapp;
    window.console.log(response.data[0]);
    this.contact = response.data[0];
  },
};
</script>