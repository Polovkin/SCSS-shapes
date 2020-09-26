<template lang="pug">
    include ./pug/utils/mixins
    #app
        .container
            h1 test pug
            h1 test pug
            +Img('picture/1.png','pic')
            +Img('picture/2.jpg','pic')

</template>
<script>
import Photo from "./project/components/Photo";

export default {
    name: 'App',
    components: {Photo},
    data() {
        return {}
    },
    mounted() {
        console.log(1)
    },
    methods: {

    },

}
</script>
<style lang="scss">


</style>
