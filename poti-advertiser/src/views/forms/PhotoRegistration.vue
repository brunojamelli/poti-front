<template>
  <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
    <v-card-text>
      <!-- :rules="rules" -->
      <v-file-input
        multiple
        v-model="form.files"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Adicione fotos ao seu anúncio"
        prepend-icon="mdi-camera"
        label="Foto"
      ></v-file-input>
      <v-card-actions class="justify-center">
        <v-btn
          style="width: 250px"
          large
          dark
          color="success"
          @click.prevent="submit"
        >
          Cadastrar
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
<script>
import ApiService from "../../utils/ApiService";
let http = {};
import apiConfig from "../../utils/config";
// import { getToken } from "../../utils/auth";
const headers = () => {
  return {
    headers: {
      // Authorization: `${getToken()}`,
      "Content-Type": "multipart/form-data",
    },
  };
};

export default {
  name: "PhotoRegistration",
  data: () => ({
    // rules: [
    //   (value) =>
    //     !value ||
    //     value.size < 2000000 ||
    //     "As fotos do anuncio não pode ter mais de 2MB",
    // ],
    form: {
      files: [],
      an_id: 25,
      last_id: 0,
    },
  }),
  async created() {
    this.$store.commit("setTitle", "Cadastro de Fotos");
    http = new ApiService("announcement");
    let allAds = [];
    let response2 = await http.getList();
    allAds = response2.data;
    window.console.log(allAds);
    //ordenando a lista de anúncios por id de forma crescente
    allAds.sort((a, b) =>
      a.id > b.id ? 1 : a.id === b.id ? (a.size > b.size ? 1 : -1) : -1
    );
    window.console.log(allAds[allAds.length - 1]);
    // pegando o ultimo id de anúncio cadastrado
    this.last_id = allAds[allAds.length - 1].id;
  },
  methods: {
    async submit(evt) {
      evt.preventDefault();
      const formData = new FormData();
      if (this.last_id != 0) {
        formData.append("an_id", this.last_id);

        for (const i of Object.keys(this.form.files)) {
          formData.append("photo", this.form.files[i]);
        }
        await apiConfig.post("photo", formData, headers);
        // this.$alert("Espaço Cadastrado.", "Sucesso", "success");
        alert("foto salva com sucesso !!");
        window.console.log(this.form.files);
        this.$router.push("/");
      } else {
        alert("foto de ID invalido");
      }
    },
  },
};
</script>

<style scoped>
</style>