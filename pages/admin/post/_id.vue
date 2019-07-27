<template>
    <div class="page-wrap">
        <el-breadcrumb separator="/" class="mb">
            <el-breadcrumb-item :to="{ path: '/admin/list' }">Posts</el-breadcrumb-item>
            <el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form
                :model="controls"
                :rules="rules"
                ref="form"
                @submit.native.prevent="onSubmit"
        >
            <h1>Enter Admin Panel</h1>
            <el-form-item label="Text in format .md and .html" prop="text">
                <el-input type="textarea" resize="none" :rows="10" v-model.trim="controls.text"></el-input>
            </el-form-item>
            <div class="mb">
                <small class="mr">
                    <i class="el-icon-time"></i>
                    <span>{{post.time}}</span>
                </small>
                <small>
                    <i class="el-icon-view"></i>
                    <span>{{ post.view}}</span>
                </small>
            </div>
            <el-form-item>
                <el-button type="primary"
                           round
                           native-type="submit"
                           :loading="loading"
                >Update</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "_id",
        layout:'admin',
        middleware:['admin-auth'],
        head(){
            return {
             title:`Post | ${this.post.title}`
            }
        },
        validate({params}){
            return Boolean(params.id)
        },
        data(){
            return{
                loading:false,
                controls:{
                    text:'',
                },
                rules: {
                    text: [
                        { required: true, message: 'Please Text', trigger: 'blur' },
                    ]
                }
            }
        },
        async asyncData({store,params}){
            const post = await store.dispatch('post/fetchAdminById',params.id)
            return {post}
        },
        methods:{
            onSubmit(){
                this.$refs.form.validate(async valid =>{
                    if(valid){
                        this.loading = true;
                        const formData = {
                                text: this.controls.text,
                                id: this.post_id
                        }
                        try {
                            await  this.$store.dispatch('post/update',formData)
                            this.$message.success('Post Update')
                            this.loading = false
                        } catch (e) {
                            this.loading = false
                        }

                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page-wrap{
        width: 600px;
    }
    .mr{
        margin-right: 2rem;
    }
</style>
