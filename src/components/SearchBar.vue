<template>
    <div id = "search">
        <i class="fas fa-search" ></i>
        <input type = "text" v-if = "activated">
    </div>
</template>
<script>
export default {
   data:function(){
       return{
            activated:false
       }
   } 
}
</script>
<style lang="scss" scoped>
#search{
    position:absolute;
}
</style>
