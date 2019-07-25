<template>
    <el-container>
        <el-header>
             <Navigation></Navigation>
        </el-header>
       <el-main>
           <nuxt/>
       </el-main>
       <el-footer></el-footer>
    </el-container>
</template>

<script>
    import Navigation from '~/components/main/Navigation.vue'
    export default {
        components:{
            Navigation
        }
    }
</script>
