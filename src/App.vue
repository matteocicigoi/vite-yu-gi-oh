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
            store
        }
    }
}
axios.get(store.url).then((response) => {
    store.cards = response.data.data;
})
</script>

<template>
    <header>
        <Logo />
    </header>
    <main>
        <Search />
        <Cards />
    </main>
</template>

<style scoped lang="scss">
main{
    width: 1140px;
    margin: 0 auto;
}
</style>