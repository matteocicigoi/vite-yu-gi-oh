<script>
export default {}
</script>
<template>
    <div class="logo">
        <img src="/public/logo.png" alt="logo">
        <h1>Yu-Gi-Oh Api</h1>
    </div>
</template>

<style scoped lang="scss">
@use '/src/style/partials/variables.scss' as *;
.logo {
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 25px;
    background-color: $bg-header;
    img {
        height: 100%;
        display: block;
        margin-right: 25px;
    }
    h1 {
        font-weight: 300;
    }
}
</style>