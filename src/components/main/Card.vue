<script>
export default {
    props: ['title', 'type', 'img']
}
</script>
<template>
    <div class="card">
        <img :src="img" alt="card">
        <h4>{{ title }}</h4>
        <span>{{ type }}</span>
    </div>
</template>

<style scoped lang="scss">
@use '/src/style/partials/variables.scss' as *;
    .card {
        background-color: $bg-body;
        text-align: center;
        margin-bottom: 15px;
        h4 {
            color: $text-title;
            margin-top: 20px;
            margin-bottom: 25px;
        }
        img{
            width: 100%;
            display: block;
        }
    }
</style>