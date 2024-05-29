<template>
  <div :class="divClass">
    <v-card class="rounded-lg pb-4 mt-8">
      <h1 class="text-center mb-2 py-2">Immagini</h1>
      <v-carousel cycle hide-delimiters interval="3000">
        <v-carousel-item
          v-for="(image, i) in galleryImages"
          :key="i"
          :style="{
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }"
        />
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  async mounted() {
    await this.getImages();
  },
  computed: {
    imagePlaceholder() {
      return require("@/static/placeHolderImage.jpg");
    },
    galleryImages() {
      return this.images
        .filter((image) => image.name.includes("galleryImage"))
        .map((image) => image.src);
    },
    divClass() {
      return "py-5 " + (this.$vuetify.breakpoint.name !== "xs" ? "px-5" : "");
    },
  },
  methods: {
    async getImages() {
      const response = await this.$api.utils.getImages();
      if (!response.success) this.$toast.error(response.error);

      this.images = response.images;
    },
  },
};
</script>
