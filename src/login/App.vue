<template>
  <div class="body">
    <div class="grid">
      <div class="nav">
        <div class="logo">
          <img src="@/assets/jobcat-navbar-logo.png">
        </div>
        <div class="name">Jobcat</div>
        <div class="tagline">The paragdim shift in
          <br>freelancing frenzy
        </div>
      </div>
      <router-view/>

      <div class="footer">Made with magic and ninjitsu by Nirav</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.body {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  width: 500px;
  height: 400px;
}
.nav {
  .logo {
    img {
      width: 160px;
    }
  }
  .name {
    font-size: 63px;
  }
  .tagline {
    font-size: 20px;
  }
}

.footer {
  grid-column: 1 / span 2;
  font-size: 20px;
  padding: 10px 0;
  margin-top: 20px;
  color: gray;
  text-align: center;
}
</style>

>