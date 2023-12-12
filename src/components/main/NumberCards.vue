<script>
import { store } from '/src/store';
export default {
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="numbers">
        <h4>Found {{ store.cards.length }} cards</h4>
    </div>
</template>
<style scoped lang="scss">
@use '/src/style/partials/variables.scss' as *;
    .numbers{
        background-color: $bg-number-cards;
        padding: 23px 17px;
        width: 100%;
        h4 {
            color: $text-title;
        }
    }
</style>