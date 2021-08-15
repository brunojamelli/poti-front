<template>
  <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
    {{advertiser}}
    <v-card-text>
      <h2 class="text-center">Atualização Informações de Contato</h2>

      <v-form ref="form" v-model="isValid">
        <v-text-field
          v-model="form.name"
          :rules="rules.nameRules"
          label="Nome"
          required
          error-count="2"
        ></v-text-field>

        <v-text-field
          v-model="form.whatsapp"
          :rules="rules.whatsRules"
          label="Whatsapp"
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
          v-model="form.address"
          label="Endereço"
          required
        ></v-text-field>
        <v-card-actions class="justify-center">
          <v-btn
            style="width: 250px"
            large
            color="success"
          >
            Atualizar
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "AdvertiserEdit",
  props: ["advertiser"],
  data: () => ({
    form: {
      name: "",
      whatsapp: "",
      email: "",
      address: "",
    },
    isValid: true,
    value: true,
    rules: {
      required: (value) => !!value || "Required.",
      nameRules: [
        (v) => !!v || "Nome é Obrigatório",
        (v) => (v && v.length >= 10) || "O nome tem que ter 10 letras ou mais",
      ],
      whatsRules: [
        (v) => !!v || "Whatsapp é obrigatorio",
        (v) =>
          (v && v.length >= 8) ||
          "O número de whats tem que ter 9 digitos ou mais",
      ],
      emailRules: [
        (v) => !!v || "Email é obrigatório",
        (v) => /.+@.+/.test(v) || "Email tem que ser válido",
      ],
      password: (value) => {
        const pattern =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;
        return (
          pattern.test(value) ||
          "Min. 8 caracteres com ao menos uma letra maiuscula, um número e um caractere especial."
        );
      },
    },
  }),
  methods:{

  },
  created(){
    this.form.name = this.advertiser.name;
    this.form.whatsapp = this.advertiser.whatsapp;
    this.form.email = this.advertiser.email;
    this.form.address = this.advertiser.address;
  }
};
</script>