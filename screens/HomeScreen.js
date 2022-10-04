import { ScrollView, Text, TextInput, View } from "react-native"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image } from "react-native"
import {
	UserIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
	AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline"
import Categories from "../components/Categories"
import FeaturedRow from "../components/FeaturedRow"
import sanityClient from "../sanity"

function HomeScreen() {
	const navigation = useNavigation()
	const [featuredCategories, setFeaturedCategories] = useState([])

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

	useEffect(() => {
		sanityClient
			.fetch(
				`
		*[_type == "featured"]{
			...,
			restaurants[]->{
				...,
				dishes[]->
			}
		}`
			)
			.then((data) => {
				setFeaturedCategories(data)
			})
	}, [])

	return (
		<SafeAreaView className="bg-white pt-5">
			{/* Header */}
			<View className="flex-row pb-3 items-center space-x-2 px-4">
				<Image
					source={{ uri: "https://links.papareact.com/wru" }}
					className="h-7 w-7 bg-gray-300 p-4 rounded-full"
				/>
				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
					<Text className="font-bold text-xl">
						Current Location
						<ChevronDownIcon size={20} color="#00CCBB" />
					</Text>
				</View>
				<UserIcon size={35} color="#00CCBB" />
			</View>
			{/* Search */}
			<View className="flex-row items-center space-x-2 pb-2 px-4">
				<View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
					<MagnifyingGlassIcon color="gray" size={20} />
					<TextInput
						placeholder="Restaurants and Cuisines"
						keyboardType="default"
					/>
				</View>
				<View>
					<AdjustmentsVerticalIcon
						color="#00CCBB"
						contentContainerStyle={{
							paddingBottom: 100,
						}}
					/>
				</View>
			</View>
			{/* Body */}
			<ScrollView className="bg-gray-100">
				{/* Categories */}
				<Categories />

				{/* Featured rows */}
				<FeaturedRow
					id="1"
					title="Featured"
					description="Paid placements from our partners"
					featuredCategory="featured"
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen
