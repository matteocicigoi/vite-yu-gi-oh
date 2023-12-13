<script>
import { store } from '../../store';
export default {
    props : ['type'],
    data() {
        return {
            store,
        }
    },
    updated(){
        this.$emit('find');
    }
}
</script>
<template>
    <select name="type" id="type" v-model="store.type">
        <option value="">Select ArcheType</option>
        <option v-for="element in type">{{ element.archetype_name }}</option>
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