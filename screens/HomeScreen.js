import { Text, View } from "react-native"
import React, { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"

function HomeScreen() {
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

	return (
		<View>
			<Text className="text-red-500">Home Screen</Text>
		</View>
	)
}

export default HomeScreen
