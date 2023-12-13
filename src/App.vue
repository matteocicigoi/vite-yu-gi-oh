<script>
import Logo from './components/header/Logo.vue';
import Search from './components/main/Search.vue';
import Cards from './components/main/Cards.vue';
import axios from 'axios';
import { store } from './store';
export default {
    components : {
        Logo,
        Search,
        Cards
    },
    data() {
        return {
            store,
        }
    },
    methods : {
        getCard(){
            store.loading = true;
            axios.get(store.url).then((response) => {
            store.cards = response.data.data;
            store.loading = false;
            });
        },
        getArcheTypes(){
            store.loading = true;
            axios.get(store.urlType).then((response) => {
            store.archeTypes = response.data;
            store.loading = false;
            });
        },
        getFilteredTypes(){
            store.loading = true;
            axios.get(store.urlFilter + store.type).then((response) => {
            store.cards = response.data.data;
            store.loading = false;
            });
        },
        searchType(){
            if(store.type === ''){
                this.getCard();
            }else{
                this.getFilteredTypes();
            }
        }
    },
    created() {
        this.getCard();
        this.getArcheTypes();
    }
}
</script>

<template>
    <header>
        <Logo />
    </header>
    <main>
        <Search :type="store.archeTypes" @find="searchType"/>
        <Cards />
    </main>
</template>

<style scoped lang="scss">
main{
    width: 1140px;
    margin: 0 auto;
}
</style>