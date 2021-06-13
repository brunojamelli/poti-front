<template>
  <div id="app">
    <div id="menu">
      <TabMenu :model="items" />
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2%;
}

#menu {
  width: 70%;
  margin: auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        { label: "Inicio", icon: "pi pi-fw pi-home", to: "/" },
        {
          label: "Pendentes",
          icon: "pi pi-exclamation-circle",
          to: "/pendentes",
        },
        {
          label: "Administradores",
          icon: "pi pi-shield",
          to: "/administradores",
        },
        {
          label: "Anunciantes",
          icon: "pi pi-calendar",
          to: "/anunciantes",
        }
      ],
    };
  },
};
</script>