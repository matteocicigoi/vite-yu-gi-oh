import { reactive } from "vue";

export const store = reactive ({
    url : 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cards : [],
    urlType : 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archeTypes : [],
    type : '',
    urlFilter : 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=',
    loading : true
})