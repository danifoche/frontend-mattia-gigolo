<template>
    <v-app-bar fixed class="primary">
        <v-spacer />
        <div class="py-1">
            <v-btn color="#FFFFFF" text to="/">Home</v-btn>
            <v-btn color="#FFFFFF" text to="/gallery">Immagini</v-btn>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header"
}
</script>