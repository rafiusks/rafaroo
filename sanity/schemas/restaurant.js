export default {
	name: "restaurant",
	title: "Restaurant",
	type: "document",
	fields: [
		{
			name: "name",
			tile: "Restaurant Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "short_description",
			tile: "Short description",
			type: "string",
			validation: (Rule) => Rule.max(200),
		},
		{
			name: "image",
			tile: "Image of the Restaurant",
			type: "image",
		},
		{
			name: "lat",
			tile: "Latitude",
			type: "number",
		},
		{
			name: "long",
			tile: "Longitude",
			type: "number",
		},
		{
			name: "address",
			tile: "Address",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "rating",
			type: "number",
			tile: "Enter a Rating from (1-5 Stars)",
			validation: (Rule) =>
				Rule.required()
					.min(1)
					.max(5)
					.error("Please enter a value between 1 and 5"),
		},
		{
			name: "type",
			title: "Category",
			validation: (Rule) => Rule.required(),
			type: "reference",
			to: [{ type: "category" }],
		},
		{
			name: "dishes",
			type: "array",
			title: "Dishes",
			of: [{ type: "reference", to: [{ type: "dish" }] }],
		},
	],
}
