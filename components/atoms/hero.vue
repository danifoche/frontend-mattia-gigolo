<template>
    <v-container fluid class="pa-0">
        <div 
            class="heroImage"
            :style="setHeroBackgroundImage"
        >
            <v-container fill-height fluid>
                <v-row align="center" justify="center">
                    <slot name="main-content"></slot>
                </v-row>
            </v-container>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "Hero",
    props: {
        backgroundImage: {
            type: String,
            required: true,
        },
    },
    computed: {
        setHeroBackgroundImage() { return `background-image: linear-gradient( rgba(25, 29, 36, 0.6), rgba(25, 29, 36, 0.6) ), url('${this.backgroundImage}')`; }
    }
}
</script>

<style scoped>
    html, body, #app {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    
    .heroImage {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .display-1, .subheading {
        margin: 0;
    }
</style>