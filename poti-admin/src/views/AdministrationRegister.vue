<template>
  <div>
    <p class="font-weight-black"></p>
    <h2>Cadastre um novo Administrador</h2>
    <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
      <v-card-text>
        <v-form ref="form" v-model="isValid">
          <v-text-field
            v-model="form.name"
            :rules="rules.nameRules"
            label="Nome"
            required
            error-count="2"
          ></v-text-field>

          <v-text-field
            v-model="form.email"
            :rules="rules.emailRules"
            label="E-mail"
            required
            error-count="2"
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            label="Senha"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
            error-count="2"
            required
          ></v-text-field>
          <v-btn
            large
            color="success"
            @click.prevent="submit"
            :disabled="!isValid"
          >
            Cadastrar
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
</style>

<script>
import ApiService from "../utils/ApiService";
const http = new ApiService("administrator");
export default {
  name: "AdministrationRegister",
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
    },
    isValid: true,
    value: true,
    rules: {
      password: (value) => {
        const pattern =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;
        return (
          pattern.test(value) ||
          "Min. 8 caracteres com ao menos uma letra maiuscula, um número e um caractere especial."
        );
      },
      nameRules: [
        (v) => !!v || "O nome é obrigatório",
        (v) => (v && v.length >= 10) || "o nome tem que ter 10 letras ou mais",
      ],
      emailRules: [
        (v) => !!v || "Email é obrigatório",
        (v) => /.+@.+/.test(v) || "Email tem que ser válido",
      ],
    },
  }),

  methods: {
    async submit(evt) {
      evt.preventDefault();
      http.create(this.form);
      alert("cadastrado com sucesso");
      this.$router.push("/");
    },
  },
};
</script>