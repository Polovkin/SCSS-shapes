<template>

    <div v-if="photos">
        <div class="card__wrap">
            <div v-for="items of photos"
                 class="card">
                <div class="card__header">
                    <h4 class="card__title">{{ items.title }}</h4>
                    <p class="card__id">{{ items.id }}</p>
                </div>
                <div class="card__photo">
                    <div class="img-wrap">
                        <img :src="items.url"
                             alt="photo">
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Photo",
    computed: {
        photos() {
            return this.$store.getters.GET_PHOTOS
        }
    },
    mounted() {
        this.$store.dispatch('GET_PHOTO');
    },
}
</script>

<style lang="scss">
.card {
    height: 100%;
    border: 1px solid rgba($color__dark, .2);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    &__header {
        height: 50px;
        max-height: 50px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
    }

    &__wrap {
        display: grid;
        width: 100%;
        grid-gap: 20px;

        grid: {
            template: {
                columns: repeat(4, 1fr);
            };
            auto-rows: 300px;
        }
    }

    &__photo {
        flex-grow: 1;
        img {
            object-fit: contain;
        }
    }
}
</style>
