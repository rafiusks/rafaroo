import SanityClient from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url"

const client = SanityClient({
	projectId: "qwoxusny",
	dataset: "production",
	useCdn: true,
	apiVersion: "2022-02-01",
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client
