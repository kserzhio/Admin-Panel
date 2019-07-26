<template>
    <el-table
            :data="posts"
            style="width: 100%"

    >
        <el-table-column
        prop="title"
        label="Name"
        >

        </el-table-column>
        <el-table-column
                label="Time"
                width="180">
            <template slot-scope="{row:{data}}">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ new Date(data).toLocaleString()}}</span>
            </template>
        </el-table-column>
        <el-table-column
                label="Action">
            <template slot-scope="{row}">

                <el-tooltip  effect="dark" content="Open Post" placement="top">
                    <el-button
                            icon="el-icon-edit"
                            type="primary"
                            circle
                            @click="open(row._id)">
                    </el-button>
                </el-tooltip>

                <el-tooltip effect="dark" content="Delete Post" placement="top">
                    <el-button
                            icon="el-icon-delete"
                            type="danger"
                            circle
                            @click="remove(row._id)">
                    </el-button>
                </el-tooltip>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "list",
        layout:'admin',
        middleware:['admin-auth'],
        async asyncData({store}){
            const posts = await store.dispatch('post/fetchAdmin')
            return {posts}
        },
        methods:{
            open(id){
                this.$router.push(`/admin/post/${id}`)
            },
          async remove(id){
                try {
                   await this.$confirm('Delete Post?','Attention',{
                        confirmButtonText:'Yes',
                        cancelButtonText:'Cancel',
                        type:'Warning'
                    })

                    await this.$store.dispatch('post/remove',id)
                    this.posts = this.posts.filter(p => p._id !== id)
                    this.$message.success('Post Delete')

                }catch (e) {

                }

            }
        }
    }
</script>

<style scoped>

</style>
