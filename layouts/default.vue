<template>
	<v-app>
		<Header />
		<Nuxt />
		<Footer />
	</v-app>
</template>

<script>
export default {
	components: {
		Header: () => import('@/components/atoms/header.vue'),
		Footer: () => import('@/components/atoms/footer.vue'),
	},
}
</script>