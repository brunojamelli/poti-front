<template>
    <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
        {{advertiser}}
    </v-card>

</template>
<script>
export default {
  name: "AdvertiserEdit",
  props: ["advertiser"],
};
</script>