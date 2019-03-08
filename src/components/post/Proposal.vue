<template>
  <div class="proposal">
    <textarea></textarea>
    <button>Submit Proposal</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.proposal {
  width: 100%;
  grid-column: 2/3;

  margin-top: 20px;

  textarea {
    height: 100px;
    resize: vertical;
    display: block;
    width: 100%;

    padding: 10px;
    font-family: serif;
  }
  button {
    padding: 5px 50px;
    width: 100%;
  }
}
</style>
