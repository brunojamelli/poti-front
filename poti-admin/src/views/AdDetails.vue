<template>
  <div>
    <div class="detail-box">
      <v-card
        v-if="photo_list.length != 0"
        elevation="5"
        max-width="666"
        class="mx-auto"
      >
        <v-carousel>
          <v-carousel-item
            v-for="(item, i) in src_list"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
      <br />
      <Card>
        <template #title>
          <div id="ad-title">{{ advertiser.title }}</div>
        </template>
        <template #subtitle>
          <div id="ad-value">
            {{ advertiser.value }} R$ - {{ advertiser.category }}
          </div>
        </template>
        <template #content>
          <div id="ad-description">
            <b>Descrição: </b>{{ advertiser.description }}
          </div>
          <div id="ad-quantity" v-show="advertiser.quantity != 0">
            <b>Quantidade: </b> {{ advertiser.quantity }}
          </div>
          <div id="contact-box">
            <h4>Contato Anunciante</h4>
            <div id="concact-email"><b>email: </b>{{ concact_info.email }}</div>
            <div id="contact-whatsapp" v-if="concact_info.whatsapp != null">
              <div><b>whatsapp:</b> {{ concact_info.whatsapp }}</div>
            </div>
            <div v-else id="contact-whatsapp">
              <div>Whatsapp não informado</div>
            </div>
          </div>
        </template>

        <template #footer>
          <Button
            v-if="!advertiser.valid"
            class="p-button-warning"
            icon="pi pi-check"
            label="Validar"
            @click="adValitation(advertiser)"
          />
          <div v-else>
            <h3>Anúncio Válido</h3>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import Card from "primevue/card";
import ApiService from "../utils/ApiService";
import Button from "primevue/button";

export default {
  name: "AdDetails",
  data: () => ({
    photo_list: [],
    photo_link: "",
    first_file: "",
    concact_info: {},
    src_list: [],
  }),
  props: ["advertiser"],
  components: {
    Card,
    Button,
  },
  async created() {
    this.photo_link = `photo/filenames/announcement/${this.advertiser.id}`;
    const http = new ApiService(this.photo_link);
    let response = await http.getList();
    this.photo_list = response.data;

    window.console.log(this.photo_list[0].filename);
    // pegando as informações de contato do anunciante do anuncio clicado
    const http2 = new ApiService(`advertiser/${this.advertiser.advertiser_id}`);
    let response2 = await http2.getList();
    this.concact_info = response2.data[0];
    this.src_list = this.photo_list;
    for (let index = 0; index < this.src_list.length; index++) {
      this.src_list[
        index
      ].src = `http://localhost:3333/photo/${this.src_list[index].filename}`;
    }
  },
  methods: {
    async adValitation(object) {
      const service = new ApiService("announcement/validation");
      let response = service.patch(object.id);
      window.console.log(response);
      this.$alert("Anúncio validado com sucesso", "Concluido", "success");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.ads-reader {
  width: 40%;
  height: 40%;
  margin-top: 10px;
}
.detail-box {
  margin-top: 3%;
  margin-left: 25%;
  margin-right: 25%;
}
#ad-title {
  text-align: left;
}

#ad-value {
  text-align: left;
}
#ad-description {
  text-align: left;
}
#contact-box {
  text-align: left;
}
#ad-quantity {
  text-align: left;
}
</style>