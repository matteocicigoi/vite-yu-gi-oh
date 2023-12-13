<script>
import NumberCards from './NumberCards.vue';
import Card from './Card.vue';
import Loading from './Loading.vue';
import { store } from '/src/store';
export default {
    components : {
        NumberCards,
        Card,
        Loading
    },
    data(){
        return {
            store
        }
    }
}
</script>
<template>
    <div class="cards">
        <NumberCards />
        <Loading v-if="store.loading"/>
        <template v-else>
            <Card v-for="card in store.cards" :title="card.name" :type="card.archetype === undefined ? card.type : card.archetype" :img="card.card_images[0].image_url"/>
        </template>
    </div>
</template>
<style scoped lang="scss">
@use '/src/style/partials/variables.scss' as *;
    .cards{
        background-color: $bg-cards-container;
        padding: 50px;
        padding-bottom: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        :deep(.card){
            width: calc((100% - 100px) / 5);
        }
    }
</style>