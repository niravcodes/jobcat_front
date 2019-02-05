<template>
    <div id = "navcontainer">
        <div id="logo"><img src="../assets/jobcat-navbar-logo.png"></div>
        <div id="search" class= "vertical-horizontal-center">
        </div>
        <div id ="icons" class="vertical-horizontal-center">
            <search-bar/>
            <i class="far fa-envelope"></i>
            <i class="far fa-bell"></i>
            <i class="far fa-user-circle"></i>
        </div>
    </div>    
</template>
<script>
import SearchBar from "./SearchBar.vue"
export default {
    components:{
        SearchBar
    }
}
</script>
<style lang = "scss" scoped>
.vertical-horizontal-center{
    display:flex;
    justify-content: center;
    align-items: center;
}
#navcontainer{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
}
#logo img{
    width:80px;
}
#search{
    position:relative;
}
#icons{
        justify-content: flex-end;
    i{
        padding:10px;
        font-size:20px;
    }
}
</style>

