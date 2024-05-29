<template>
    <v-footer color="primary">
        <v-container fluid class="pa-5">
            <v-row align="center" justify="center" class="white--text font-weight-bold">
                Mattia Gigolo
            </v-row>
            <v-row align="center" justify="center" class="white--text font-weight-bold">
                prix_88@hotmail.it
            </v-row>
            <v-row align="center" justify="center" class="white--text pt-2">
                +39 340 2385582
            </v-row>
            <v-row align="center" justify="center" class="white--text pt-2">
                <v-btn icon :href="getWhatsappUrl" target="_blank" class="mx-1">
                    <v-icon size="40" color="white">bx bxl-whatsapp</v-icon>
                </v-btn>
                <v-btn icon :href="getTelegramUrl" target="_blank" class="mx-1">
                    <v-icon size="40" color="white">bx bxl-telegram</v-icon>
                </v-btn>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: "Footer",
    computed: {
		getWhatsappUrl() { return "https://wa.me/3402385582" },
		getTelegramUrl() { return "https://telegram.me/matthewprix" },
	}
}
</script>