<template>
    <el-form
            :model="controls"
            :rules="rules"
            ref="form"
            @submit.native.prevent="onSubmit"
    >
        <h1>Create new User</h1>
        <el-form-item label="You Login" prop="login">
            <el-input v-model.trim="controls.login"></el-input>
        </el-form-item>
        <div class="mb2">
            <el-form-item label="Password" prop="password">
                <el-input  v-model.trim="controls.password" type="password"></el-input>
            </el-form-item>
        </div>
        <el-form-item>
            <el-button type="primary"
                       round
                       native-type="submit"
                       :loading="loading"
            >Created</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "user",
        layout:'admin',
        middleware:['admin-auth'],
        data(){
            return{
                loading:false,
                controls:{
                    login:'',
                    password:''
                },
                rules: {
                    login: [
                        { required: true, message: 'Please enter login', trigger: 'blur' },
                    ],
                    password:[
                        { required: true, message: 'Please enter login', trigger: 'blur'},
                        { min:6,message:'Error length password',trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            onSubmit(){
                this.$refs.form.validate( async valid =>{
                    if(valid){
                        this.loading = true;
                        try {
                            const formData = {
                                login: this.controls.login,
                                password: this.controls.password
                            }
                            await this.$store.dispatch('auth/createdUser',formData)
                            this.$message.success('Created New User')
                            this.controls.login = ''
                            this.controls.password = ''
                            this.loading = false
                        } catch (e) {
                            this.loading = false;
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    form{
        width: 600px;
    }
</style>
