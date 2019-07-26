<template>
        <el-menu
                router
                :style="{height:'100%'}"
                :default-active="$route.path">
                <el-menu-item index="/admin">
                    <i class="el-icon-menu"></i>
                    <span>Analitica</span>
                </el-menu-item>
            <el-menu-item index="/admin/create">
                <i class="el-icon-edit-outline"></i>
                <span>Create</span>
            </el-menu-item>
                    <el-menu-item index="/admin/list">
                    <i class="el-icon-tickets"></i>
                    <span>Post</span>
                </el-menu-item>
            <el-menu-item index="/admin/user">
                <i class="el-icon-service"></i>
                <span>User</span>
            </el-menu-item>
            <el-menu-item index="/admin/logout">
                <i class="el-icon-setting"></i>
                <span>Logout</span>
            </el-menu-item>
        </el-menu>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>

</style>
