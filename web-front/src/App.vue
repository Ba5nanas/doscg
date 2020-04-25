<template>
  <div id="app">

    <header id="main-header">
      <!-- start container header -->
      <div class="container">
        <!-- start row -->
        <div class="row">
          <!-- Column 1 (Logo) -->
          <div class="col-sm-4 justify-content-center align-self-center">
            <div class="logo "><router-link to="/homepage" class="nav-link active text-white" href="#">DOSCG</router-link></div>
          </div>
          <!-- Enc Column 1 -->
          <!-- Column 2 (Navbar) -->
          <div class="col-sm-8">
            <nav class="navbar justify-content-end ">
              <ul class="nav">
                <li class="nav-item">
                  <router-link to="/homepage" class="nav-link active text-white" href="#">Homepage</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/resume" class="nav-link text-white" href="#">My Profile</router-link>
                </li>
              </ul>
            </nav>
          </div>
          <!-- End column 2 (Navbar) -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container header -->
    </header>

    <div class="content-wrapper">
      <router-view></router-view>
    </div>

   <!-- WHERE I AM HAVING THE ISSUE -->
    <footer id="main-footer">
      <div class="text-center text-white">Make By Jasdaporn Chaitan</div>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    if(this.$router.currentRoute.name == null || this.$router.currentRoute.name == "homepage"){
      this.init();
    }
  },
  components: {
  },
  methods: {
    init() {
      this.$router.push('/homepage');
    }
  }
}
</script>

<style>
 footer {
    background-color: #333;
    height: 65px;
    padding: 20px;
  }

  footer > p {
    margin: 0;
  }
#main-header {

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
