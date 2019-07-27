<template>
    <el-form
            :model="controls"
            :rules="rules"
            ref="form"
            @submit.native.prevent="onSubmit"
    >
        <h1 class="mb">Create New Post</h1>
        <el-form-item label="Please title" prop="title">
            <el-input v-model="controls.title"></el-input>
        </el-form-item>
        <el-form-item label="Text Post" prop="text">
            <el-input type="textarea" resize="none" :rows="10" v-model="controls.text"></el-input>
        </el-form-item>
        <el-button class="mb" type="success" plain @click="previewDialog = true">
            Preview
        </el-button>
                <el-dialog title="Preview" :visible.sync="previewDialog">
                    <div :key="controls.text">
                        <vue-markdown>{{controls.text}}</vue-markdown>

                    </div>
                </el-dialog>
        <el-upload
                class="mb"
                drag
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleImageChange"
                :auto-upload="false"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <div class="el-upload__tip" slot="tip">jpg/png files</div>
        </el-upload>
        <el-form-item>
            <el-button type="primary"
                       round
                       native-type="submit"
                       :loading="loading"
            >Create post</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "create",
        layout:'admin',
        middleware:['admin-auth'],
        data(){
            return{
                loading:false,
                image:null,
                previewDialog:false,
                controls:{
                    text:'',
                    title:''
                },
                rules: {
                    text: [
                        { required: true, message: 'Please Text', trigger: 'blur' },
                    ],
                    title: [
                        { required: true, message: 'Please Text', trigger: 'blur' },
                    ]
                }
            }
        },
        methods:{
            onSubmit(){
                this.$refs.form.validate( async valid =>{
                    if(valid && this.image){
                        this.loading = true;

                        const formData = {
                            title: this.controls.title,
                            text: this.controls.text,
                            image: this.image
                        }
                        try {
                            await this.$store.dispatch('post/create',formData)
                            this.controls.text = ''
                            this.controls.title = ''
                            this.image = null
                            this.$refs.upload.clearFiles()
                            this.$message.success('Post create')
                            this.loading = false;
                        }catch (e) {
                            this.loading = false;
                        }

                    } else{
                        this.$message.warning('Not Valid Form')
                    }
                })
            },
            handleImageChange(file,fileList){
              this.image = file.raw
            }
        }
    }
</script>

<style lang="scss" scoped>
    form{
        width: 600px;
    }
</style>
