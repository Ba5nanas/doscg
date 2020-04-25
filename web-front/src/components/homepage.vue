<template>
  <div class="homepage">
    <section class="jumbotron text-center">
      <div class="container">
        <h1>Hello</h1>
        <p class="lead text-muted">I'm Jasdaporn Chaitan i made this for testing and test tech dev assignment.</p>

      </div>
    </section>
    <section>
      <div class="container">
        <div class="row justify-content-md-center">
          <!-- Resume -->
          <div class="col-sm-4">
            <div class="card" style="width: 100%;">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#E68804"></rect><text x="40%" y="50%" fill="#eceeef" dy=".3em">My Resume</text></svg>
              <div class="card-body">
                <h5 class="card-title">Resume</h5>
                <p class="card-text">This's My Resume Static Page</p>
                <router-link to="/resume" class="btn btn-primary red-btn full-width">Readmore</router-link>
              </div>
            </div>
          </div>
          <!-- end card resume -->

          <!-- Object 1 -->
          <div class="col-sm-4">
            <div class="card" style="width: 100%;">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#EE2524"></rect><text x="40%" y="50%" fill="#eceeef" dy=".3em">Object 1</text></svg>
              <div class="card-body">
                <h5 class="card-title">Object 1</h5>
                <p class="card-text">X, Y, 5, 9, 15, 23, Z  - Please create a new function for finding X, Y, Z value.</p>
                <router-link to="/object-1" class="btn btn-primary ora-btn full-width">Readmore</router-link>
              </div>
            </div>
          </div>
          <!-- end card resume -->

          <!-- Object 2 -->
          <div class="col-sm-4">
            <div class="card" style="width: 100%;">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#E68804"></rect><text x="40%" y="50%" fill="#eceeef" dy=".3em">Object 2</text></svg>
              <div class="card-body">
                <h5 class="card-title">Object 2 </h5>
                <p class="card-text">If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding B and C value</p>
                <router-link to="/object-2" class="btn btn-primary red-btn full-width">Readmore</router-link>
              </div>
            </div>
          </div>
          <!-- end card resume -->

          <!-- Object 3 -->
          <div class="col-sm-4">
            <div class="card" style="width: 100%;">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#EE2524"></rect><text x="40%" y="50%" fill="#eceeef" dy=".3em">Object 3</text></svg>
              <div class="card-body">
                <h5 class="card-title">Object 3 </h5>
                <p class="card-text">Please use “Google API” for finding the best way to go to Central World from SCG Bangsue.</p>
                <router-link to="/object-3" class="btn btn-primary ora-btn full-width">Readmore</router-link>
              </div>
            </div>
          </div>
          <!-- end card resume -->

          <!-- Object 3 -->
          <div class="col-sm-4">
            <div class="card" style="width: 100%;">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#EE2524"></rect><text x="40%" y="50%" fill="#eceeef" dy=".3em">Line Project</text></svg>
              <div class="card-body">
                <h5 class="card-title">Project Line</h5>
                <p class="card-text">Please create a small project using Line messaging API for getting a notification when your Line Bot can not answer a question to the customer more than 10 second</p>
                <router-link to="/line-project" class="btn btn-primary ora-btn full-width">Readmore</router-link>
              </div>
            </div>
          </div>
          <!-- end card resume -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Homepage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-bottom:30px;
  box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.1);
}
.red-btn {
  background:#EE2524;
  border:0;
}
.ora-btn {
  background:#E68804;
  border:0;
}
.full-width {
  width:100%;
}
</style>
