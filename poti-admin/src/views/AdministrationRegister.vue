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
            label="Informe a senha"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
            error-count="2"
            required
          ></v-text-field>
          <v-text-field
            v-model="password2"
            label="Informe a senha novamente"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :rules="[passwordConfirmationRules]"
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
    password2: "",
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
      if (this.form.password === this.password2) {
        http.create(this.form);
        this.$alert(
          "Administrador cadastrado com sucesso",
          "Concluido",
          "success"
        );

        this.$router.push("/");
      } else {
        this.$alert(
          "A senha e a sua confirmação devem ser iguais",
          "Senhas diferentes",
          "warning"
        );
      }
    },
  },
  // computed: {
  //   checkPassword() {
  //     return this.form.password !== this.form.password2;
  //   },
  //   passwordConfirmationRules() {
  //     return [
  //       () => this.form.password === this.form.password2 || "Senhas não batem",
  //       (v) => {
  //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/.test(v) ||
  //           "Min. 8 caracteres com ao menos uma letra maiuscula, um número e um caractere especial.";
  //       },
  //       (v) => !!v || "Confirmação de senha é obrigatoria",
  //     ];
  //   },
  //   emailConfirmationRules() {
  //     return [
  //       () => (this.form.password === this.form.password2) || 'E-mail must match',
  //       v => !!v || 'Confirmation E-mail is required'
  //     ];
  //   },
  // },
};
</script>