<template>
    <h1>Admin page</h1>
</template>
<script>
    export default {
        name: "index",
        layout:'admin',
        middleware:['admin-auth']
    }
</script>

<style lang="scss" scoped>

</style>
