<template>
    <el-form
            :model="controls"
            :rules="rules"
            ref="form"
            @submit.native.prevent="onSubmit"
    >
        <h1>New Comment</h1>
        <el-form-item label="You Name" prop="name">
            <el-input v-model.trim="controls.name"></el-input>
        </el-form-item>

        <el-form-item label="Text Comment" prop="text">
            <el-input type="textarea" resize="none" :rows="2" v-model.trim="controls.text"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary"
                       round
                       native-type="submit"
                       :loading="loading"
            >Create Comment</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "CommentForm",
        data(){
            return {
                loading:false,
                controls:{
                    name:'',
                    text:''
                },
                rules: {
                    name: [
                        { required: true, message: 'Please input Activity name', trigger: 'blur' },
                    ],
                    text:[
                        { required: true, message: 'Please text comment', trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            onSubmit(){
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        const formData = {
                            name: this.controls.name,
                            text: this.controls.text,
                            postId: ''
                        }
                        try {
                            this.$message.success('Comment Send')
                            this.$emit('created')

                        } catch (e) {
                            this.loading = false;
                        }
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
