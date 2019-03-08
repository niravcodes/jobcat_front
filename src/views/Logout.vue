<template>
  <div>Bye Bye dear friend</div>
</template>
<script>
export default {
  created() {
    localStorage.removeItem("credentials");
  }
};
</script>
