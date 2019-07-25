<template>
   <article class="post">
       <header class="post-header">
           <div class="post-title">
               <h1>Post title</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back"></i>
                </nuxt-link>
           </div>
           <div class="post-info">
               <small>
                   <i class="el-icon-time"></i>
                   {{new Date().toLocaleString()}}
               </small>
               <small>
                   <i class="el-icon-view">23</i>
               </small>
           </div>
           <div class="post-img">
               <img src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg" class="post-img" align="post image">
           </div>
       </header>
       <main class="post-content">
           <p>Lorem>Lorem >Lorem >Lorem >Lorem >Loremv</p>
       </main>
       <footer>
            <div class="comments" v-if="true">
            <app-comment
                    v-for="comment in 4"
                    :key="comment"
                    :comment="comment"
            >

            </app-comment>
            </div>
           <div v-else class="text-center">No Comment</div>
       </footer>
   </article>
</template>

<script>
    import AppComment from '~/components/main/Comment'
    export default {
        name: "_id",
        components:{
          AppComment
        },
        validate({params}){
            return Boolean(params.id)
        }
    }
</script>

<style lang="scss" scoped>
.post{
    max-width: 600px;
    margin: 0 auto;
}
    .post-title{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        align-items: center;
    }
    .post-info{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        align-items: center;
    }
    .post-img{
        img{
            width: 100%;
            height: auto;
        }
    }
    .post-header{
        margin-bottom: 1.5rem;
    }
    .post-content{
        margin-bottom: 2rem;
    }
</style>
