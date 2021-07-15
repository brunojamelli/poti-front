<template>
  <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
    <!-- <div class="title">Registro Anuncio</div> -->
    <h2 class="text-center">Cadastro de Anúncio</h2>
    <v-card-text>
      <v-form class="m-3" v-model="isValid">
        <v-text-field
          v-model="form.title"
          label="Titulo"
          :rules="[(v) => !!v || 'Titulo é de preenchimento obrigatório']"
          required
          outlined
        ></v-text-field>

        <v-textarea
          v-model="form.description"
          label="Descrição"
          :rules="[(v) => !!v || 'Descrição é de preenchimento obrigatório']"
          required
          auto-grow
          outlined
          rows="3"
          row-height="25"
        ></v-textarea>

        <v-select
          v-model="form.category"
          :items="options"
          item-text="label"
          item-value="value"
          label="Categoria"
          :rules="[(v) => !!v || 'Categoria é de preenchimento obrigatório']"
          required
          outlined
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select>

        <v-text-field
          v-model="form.value"
          label="Valor"
          :rules="[(v) => !!v || 'Valor é de preenchimento obrigatório']"
          required
          value="0.00"
          prefix="$"
          outlined
        ></v-text-field>

        <v-text-field
          v-model="form.quantity"
          label="Quantidade"
          :rules="[(v) => !!v || 'Quantidade é de preenchimento obrigatório']"
          required
          type="number"
          outlined
        ></v-text-field>

        <v-card-actions class="justify-center">
          <v-btn
            style="width: 250px"
            large
            rounded
            dark
            color="success"
            @click.prevent="submit"
          >
            Cadastrar
          </v-btn>
        </v-card-actions>
      </v-form>
      <v-dialog v-model="dialog" max-width="320">
        <v-card>
          <v-card-title class="text-h5">
            Deseja prosseguir ao cadastro das fotos do anúncio?
          </v-card-title>

          <v-card-text>
            Caso queira prosseguir no cadastro das fotos do anúncio, clique em Concordo, 
            mas, caso queira voltar a tela inicial, clique em Voltar aos Anúncios
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="clickDisagree">
              Voltar aos Anúncios
            </v-btn>

            <v-btn color="green darken-1" text @click="clickAgree">
              Concordo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script>
import ApiService from "../../utils/ApiService";
const http = new ApiService("announcement");

export default {
  name: "AdRegistration",
  data() {
    return {
      dialog: false,
      form: {
        title: "",
        description: "",
        category: null,
        quantity: 0,
        value: 0.0,
      },
      options: [
        { label: "Venda", value: "Venda" },
        { label: "Serviço", value: "Serviço" },
      ],
      options2: [
        { label: "Sim", value: "true" },
        { label: "Não", value: "false" },
      ],
      show: true,
      isValid: true,
    };
  },
  methods: {
    async submit(evt) {
      evt.preventDefault();
      this.dialog = true;
      window.console.log(this.form);
      http.create(this.form);
    },
    onReset(evt) {
      evt.preventDefault();
      (this.form.name = ""),
        (this.form.description = ""),
        (this.form.localization = ""),
        (this.form.responsible = ""),
        (this.form.special = null),
        (this.form.justification = ""),
        (this.form.disabled = false),
        (this.form.computers = null),
        (this.form.quantityPeople = ""),
        (this.form.extension = ""),
        (this.show = false);
      this.$nextTick(() => {
        this.show = true;
      });
    },
    clickDisagree() {
      this.dialog = false;
      this.$router.push("/");
    },
    clickAgree() {
      this.dialog = false;
      this.$router.push("/cadastro-fotos");
    },
  },
  components: {},
  created() {
    this.$store.commit("setTitle", "");
  },
};
</script>
<style scoped>
#formSpace {
  width: 400px;
  margin: auto;
}
#btnRegister {
  margin-right: 11em;
}
</style>