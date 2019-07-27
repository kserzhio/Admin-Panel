<template>
    <el-card
            shadow="always"
            :style="{width:'500px'}"
    >
        <el-form
                :model="controls"
                :rules="rules"
                ref="form"
                @submit.native.prevent="onSubmit"
        >
            <h1>Enter Admin Panel</h1>
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
                >Enter</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    export default {
        name: "login",
        layout:'empty',
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
        mounted(){
            const {message} = this.$route.query
            switch (message) {
                case 'login':
                    this.$message.info('Login to admin panel')
                    break
                case 'logout':
                    this.$message.success('Exit Admin')
                    break
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
                           await this.$store.dispatch('auth/login',formData)
                           this.$router.push('/admin')
                       } catch (e) {
                           this.loading = false;
                       }
                   }
               })
            }
        }
    }
</script>

<style scoped>

</style>
