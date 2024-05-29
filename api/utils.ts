export default ($axios: any) => ({
    async getBlocks(page: string) {
        try {
            const response = await $axios.get(`/blocks?filters[pageId][name][$eq]=${page}`);
            const blocks: [] = response.data.data.map((block: any) => {
                return {
                    id: block.id,
                    title: block.attributes.title,
                    content: block.attributes.content,
                    sequence: block.attributes.sequence,
                }
            }).sort((a: any, b: any) => a.sequence - b.sequence);;

            return { 
                success: true, 
                blocks: blocks
            }
        } catch (_) { return { success: false, error: "Si è verificato un errore!"} }
    },

    async getImages() {
        try {
            const strapiUrl = $axios.defaults.baseURL.split("/api")[0];
            const response = await $axios.get(`/upload/files`);
            return { 
                success: true, 
                images: response.data.map((image: any) => {
                    return {
                        name: image.name,
                        mime: image.mime,
                        src: strapiUrl + image.url
                    }
                }).filter((image: any) => image.mime.includes("image"))
            }
        } catch (_) { return { success: false, error: "Si è verificato un errore!"} }
    }
})