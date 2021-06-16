<template>
  <div>
    <!-- <div>
      <h2>registro de administradores é aqui</h2>
    </div> -->
    <div class="p-formgroup-inline">
      <div class="p-field">
        <label for="firstname" class="p-sr-only">Firstname</label>
        <InputText id="firstname" type="text" placeholder="Firstname" />
      </div>
      <div class="p-field">
        <label for="lastname" class="p-sr-only">Lastname</label>
        <InputText id="lastname" type="text" placeholder="Lastname" />
      </div>
      <Button type="button" label="Submit" />
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";

export default {
  name: "AdministrationRegister",
  components:{
    Button,
    InputText
  },
  methods:{
    
  }
};
</script>