<template>
  <div>
    <Hero
      v-if="images.length > 0"
      :backgroundImage="getImageByName('heroImage')"
    >
      <template v-slot:main-content>
        <div>
          <v-row>
            <h1 class="font-weight-bold text-h2 white--text">Mattia Gigolo</h1>
          </v-row>
          <v-row class="mt-5" justify="center" align="center">
            <v-btn
              class="py-3"
              style="
                backdrop-filter: blur(10px);
                background-color: #0000;
                color: #a6acba;
              "
              @click="scrollTo('startContent')"
            >
              SCOPRI CHI SONO!
            </v-btn>
          </v-row>
        </div>
      </template>
    </Hero>
    <span ref="startContent"></span>
    <div :class="divClass">
      <v-card
        class="rounded-lg"
        v-if="blocks.length > 0"
        v-for="(block, index) in blocks"
        :key="index"
      >
        <div v-if="block.title === 'Immagini'" class="pb-4 mb-4">
          <h1 class="text-center mb-2 py-2" v-html="block.title" />
          <v-carousel cycle hide-delimiters interval="3000">
            <v-carousel-item
              v-for="(image, i) in carouselImages"
              :key="i"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }"
            />
          </v-carousel>
        </div>
        <div v-else>
          <h1 class="text-center mb-2 py-2" v-html="block.title" />
          <p class="pb-4" v-html="block.content" />
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
		await this.getBlocks();
		await this.getImages();
  },
  components: {
    Hero: () => import("@/components/atoms/hero.vue"),
  },
  data() {
    return {
      primary: "#191D24",
      page: "Home",
      blocks: [],
      images: [],
      imagePlacholder: require("@/static/placeHolderImage.jpg"),
    };
  },
  computed: {
    divClass() {
      return "py-5 " + (this.$vuetify.breakpoint.name !== "xs" ? "px-5" : "");
    },
    carouselImages() {
      console.log(
        this.images
          .filter((image) => image.name.includes("carouselImage"))
          .map((image) => image.src)
      );
      return this.images
        .filter((image) => image.name.includes("carouselImage"))
        .map((image) => image.src);
    },
  },
  methods: {
    scrollTo(ref) {
      const element = this.$refs[ref];
      const top = element.offsetTop;
      window.scrollTo(0, top);
    },
    async getBlocks() {
      const response = await this.$api.utils.getBlocks(this.page);
      if (!response.success) this.$toast.error(response.error);

      this.blocks = response.blocks;
    },
    async getImages() {
      const response = await this.$api.utils.getImages();
      if (!response.success) this.$toast.error(response.error);

      this.images = response.images;
    },
    getImageByName(name) {
      return (
        this.images.find((image) => image.name === name)?.src ??
        this.imagePlacholder
      );
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
