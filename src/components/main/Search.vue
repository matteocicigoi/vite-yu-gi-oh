<script>
export default {}
</script>
<template>
    <select name="type" id="type">
        <option value="alien">Alien</option>
    </select>
</template>
<style scoped lang="scss">
@use '/src/style/partials/variables.scss' as *;
    select {
        width: 163px;
        height: 38px;
        border-radius: 5px;
        border-color: $br-select;
        margin: 25px 0 25px 12px;
    }
</style>