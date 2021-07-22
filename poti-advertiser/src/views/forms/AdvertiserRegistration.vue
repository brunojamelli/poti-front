<template>
  <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
    <v-card-text>
      <h2 class="text-center">Cadastro</h2>

      <v-form ref="form" v-model="isValid">
        <v-text-field
          v-model="form.name"
          :rules="nameRules"
          label="Nome"
          required
          error-count="2"
        ></v-text-field>

        <v-text-field
          v-model="form.whatsapp"
          :rules="whatsRules"
          label="Whatsapp"
          required
          error-count="2"
        ></v-text-field>

        <v-text-field
          v-model="form.email"
          :rules="[(v) => !!v || 'Email é de preenchimento obrigatório']"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          label="Senha"
          :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="() => (value = !value)"
          :type="value ? 'password' : 'text'"
          :rules="[rules.password]"
          required
        ></v-text-field>
        <v-text-field
          v-model="form.address"
          label="Endereço"
          required
        ></v-text-field>
        <v-card-actions class="justify-center">
          <v-btn
            style="width: 250px"
            large
            color="success"
            @click.prevent="submit"
            :disabled="!isValid"
          >
            Cadastrar
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import ApiService from "../../utils/ApiService";
const http = new ApiService("advertiser");

export default {
  name: "AdvertiserRegistration",
  components: {},
  data: () => ({
    form: {
      name: "",
      whatsapp: "",
      email: "",
      password: "",
      address: "",
    },
    isValid: true,
    value: true,
    rules: {
      required: (value) => !!value || "Required.",
      password: (value) => {
        const pattern =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;
        return (
          pattern.test(value) ||
          "Min. 8 characters with at least one capital letter, a number and a special character."
        );
      },
    },
    whatsRules: [
      (v) => !!v || "Whatsapp é obrigatorio",
      (v) =>
        (v && v.length >= 8) ||
        "O número de whats tem que ter 9 digitos ou mais",
    ],
    nameRules: [
      (v) => !!v || "O nome é Obrigatório",
      (v) =>
        (v && v.length >= 10) ||
        "O número de whats tem que ter 10 letras ou mais",
    ],
  }),
  methods: {
    async submit(evt) {
      evt.preventDefault();
      http.create(this.form);
      alert("cadastrado com sucesso");
      this.$router.push("/");
    },
  },
  created() {
    this.$store.commit("setTitle", "Cadastro de Anunciante");
  },
};
</script>
<style scoped>
</style>