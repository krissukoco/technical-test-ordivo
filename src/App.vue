<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
  </nav> -->
  <UserIcon />
  <div class="container">
<router-view/>
  </div>
  
</template>

<script>
import UserIcon from './components/UserIcon.vue'

export default {
  name: "App",
  components: {
    UserIcon
  },
  created() {
    document.title = "Twitter | Robertus Kristianto Sukoco"
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  margin: 1rem auto;
  max-width: 48rem;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
