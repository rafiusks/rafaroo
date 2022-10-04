export default {
	name: "category",
	title: "Menu category",
	type: "document",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Category name",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "image",
			type: "image",
			Title: "Image of Category",
		},
	],
}
