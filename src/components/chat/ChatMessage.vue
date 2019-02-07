<template>
  <div id="message">
    <div class="image">
      <img src="img/testhead.png">
    </div>
    <div class="text">
      {{ msg }} HHello There the angel from my nightmare the shadow in the
      nightmareHello There the angel from my nightmare the shadow in
      the nightmareHello There the angel from my nightmare the shadow in
      the nightmareello There the angel from my nightmare the shadow in
      the nightmare
    </div>
  </div>
</template>

<style lang="scss" scoped>
#message {
  display: grid;
  grid-template-columns: 50px 1fr;
  margin-bottom: 10px;

  .text {
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
}
.image {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  img {
    width: 50px;
  }
}
</style>


<script>
export default {
  props: ["msg"]
};
</script>

