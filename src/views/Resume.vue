<template>
  <div id="resume">
    <div class="image">
      <img src="img/testhead2.jpg">
    </div>
    <div class="details">
      <div class="name">Name : Jenifer Lopez</div>
      <br>Boobies : Great
      <br>Something else : Yeah whatever
      <br>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#resume {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 300px 1fr;
}
.image {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 300px;
  }
}
</style>

