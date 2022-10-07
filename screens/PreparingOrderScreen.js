import { View, Text } from "react-native"
import React, { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from "@react-navigation/native"

const PreparingOrder = () => {
	const navigation = useNavigation()

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate("Delivery")
		}, 4000)
	})

	return (
		<SafeAreaView className="bg-[#F53783] flex-1 justify-center items-center">
			<Animatable.Image
				source={require("../assets/chef.gif")}
				animation="slideInUp"
				interactionCount={1}
				className="h-100 w-auto"
			/>
			<Animatable.Text
				animation="slideInUp"
				iterationCount={1}
				className="text-lg my-10 text-white font-bold text-center"
			>
				Chef is getting ready to cook up a storm!
			</Animatable.Text>

			<Progress.Circle size={60} indeterminate={true} color="white" />
		</SafeAreaView>
	)
}

export default PreparingOrder
