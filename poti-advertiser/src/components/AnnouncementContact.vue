<template>
  <div>
    <!-- <h4>Contato:</h4> -->
    <p>{{ contact.email }}</p>
    <a
      class="whatsapp-link"
      href="https://web.whatsapp.com/send?phone=5584981069624"
      target="_blank"
    >
      <i class="fa fa-whatsapp">
        {{ contact.whatsapp }}
      </i>
    </a>
  </div>
</template>
<script>
import ApiService from "../utils/ApiService";
let http = {};

export default {
  name: "AnnouncementContact",
  data: () => ({
    whatsapp: "",
    contact: {},
  }),
  props: ["data"],
  async created() {
    http = new ApiService(`advertiser/public/${this.data.advertiser_id}`);
    let response = await http.getList();
    this.whatsapp = response.data[0].whatsapp;
    window.console.log(response.data[0]);
    this.contact = response.data[0];
  },
};
</script>
<style scoped>
.whatsapp-link {
  background-color: #25d366;
  color: #fff;
}
</style>