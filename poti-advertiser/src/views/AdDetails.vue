<template>
  <v-card class="mx-auto" max-width="800" style="margin-top: 20px">
    <!-- <h2 class="text-center">Detalhes Anúncio</h2> -->
    <div class="pa-2">
    </div>
    <p class="text-h3 text--primary align-center" align="center">{{ advertiser.title }}</p>
    <v-card v-if="photo_list.length != 0" elevation="5" max-width="666" class="mx-auto">
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in src_list"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-card>

    <br />
    <v-card-text > 
      <div class="text--primary">
        criado em: {{ formatDate(advertiser.createdAt) }}
      </div>

      <p v-if="photo_list.length == 0" class="text-h5 text--primary">
        {{ empty_ad }}
      </p>
      <!-- <div>criado em: {{ advertiser.createdAt }}</div> -->

      
      <p class="text-h4 text--primary">R$ {{ advertiser.value }}</p>
      <p v-if="advertiser.quantity == 0" class="text-h5 text--primary">
        Quantidade não Informada
      </p>
      <p v-else class="text-h5 text--primary">
        {{ advertiser.quantity }} Unidades
      </p>

      <div class="text-h5 text--primary">
        {{ advertiser.description }}
      </div>
    </v-card-text>
    <div class="text-center">
      <v-card-actions>
        <v-btn
          v-if="!advertiser.active"
          depressed
          outlined
          color="primary"
          @click="clickActivation(false)"
        >
          Ativar
        </v-btn>
        <v-btn
          v-else
          depressed
          outlined
          color="warning"
          @click="clickDesative(true)"
        >
          Desativar
        </v-btn>
        <v-btn outlined color="error" @click="clickDelete">
          <v-icon left>mdi-delete</v-icon> Apagar
        </v-btn>
        <v-btn
          class="ma-2"
          tile
          outlined
          color="cyan"
          @click="editionMode('cadastro-fotos', true, advertiser.id)"
        >
          <v-icon left>mdi-pencil</v-icon> Adicionar Fotos
        </v-btn>
      </v-card-actions>
    </div>
    <v-dialog v-model="dialogDelete" max-width="380">
      <v-card>
        <v-card-title class="text-h5">
          Tem certeja que deseja apagar esse anúncio?
        </v-card-title>

        <v-card-text>
          Tem certeza que deseja prosseguir? essa ação é irreversivel.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialogDelete = false">
            Voltar ao anúncio
          </v-btn>

          <v-btn color="green darken-1" text @click="clickAgreeDelete">
            Concordo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import ApiService from "../utils/ApiService";
let http = {};

export default {
  name: "AdDetails",
  props: ["advertiser"],
  data: () => ({
    photo_list: [],
    modified_list: [],
    photo_link: "",
    first_file: "",
    empty_ad: "O anúncio ainda não conta com fotos disponiveis",
    dialogDelete: false,
    src_list: [],
  }),
  methods: {
    editionMode(where, data, id) {
      this.$router.push({
        name: where,
        params: { edit: data, old_announcement_id: id },
      });
    },
    formatDate(date) {
      if (!date) return null;
      let part01 = date.slice(0, 10);
      const [year, month, day] = part01.split("-");
      let part02 = date.slice(11, 16);

      return `${day}/${month}/${year} as ${part02}`;
    },
    clickDelete() {
      this.dialogDelete = true;
    },
    async clickAgreeDelete() {
      http = new ApiService("announcement");
      // executando a requisição http do delete
      let response = await http.delete(this.advertiser.id);
      window.console.log(response);
      // fechando caixa de dialogo da exclusão
      this.dialogDelete = false;
      this.$alert("Anúncio Apagado", "Concluído", "warning");
      // voltando a tela inicial
      this.$router.push("/");
    },
    async clickDesative(status) {
      window.console.log(status);
      http = new ApiService("announcement/desativation");
      let response = await http.patch(this.advertiser.id);
      window.console.log(response);
      this.$alert("Anuncio desativado com sucesso", "Desativado", "success");
      this.advertiser.active = !status;
    },
    async clickActivation(status) {
      window.console.log(status);
      http = new ApiService("announcement/activation");
      let response = await http.patch(this.advertiser.id);
      window.console.log(response);
      this.$alert("Anuncio ativado com sucesso", "Ativado", "success");
      this.advertiser.active = !status;
    },
  },
  async created() {
    //buscando fotos do anuncio para a listagem nos cards
    this.photo_link = `photo/filenames/announcement/${this.advertiser.id}`;
    const http = new ApiService(this.photo_link);
    let response = await http.getList();
    this.photo_list = response.data;
    window.console.log("fotos dos detalhes");
    window.console.log(this.photo_list);
    window.console.log(this.photo_list[0].filename);
    this.$store.commit("setTitle", "");
    this.src_list = this.photo_list;
    
    // gerando a lista de urls das imagens para o carrousel
    for (let index = 0; index < this.src_list.length; index++) {
      this.src_list[
        index
      ].src = `http://localhost:3333/photo/${this.src_list[index].filename}`;
    }
    window.console.log(this.modified_list);
  },
};
</script>
<style scoped>
</style>