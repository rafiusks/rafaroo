import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import { selectCartItems, selectCartTotal } from "../features/cartSlice"
import { useNavigation } from "@react-navigation/native"
import ReactCurrencyFormatter from "react-currency-formatter-v2"

const CartIcon = () => {
	const items = useSelector(selectCartItems)
	const navigation = useNavigation()
	const cartTotal = useSelector(selectCartTotal)

	if (!items.length) return null

	return (
		<View className="absolute bottom-10 w-full z-50 drop-shadow-sm">
			<TouchableOpacity
				onPress={() => navigation.navigate("Cart")}
				className="bg-[#F53783] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
			>
				<Text className="text-white font-extrabold text-lg bg-[#f06ba0] py-1 px-2">
					{items.length}
				</Text>
				<Text className="flex-1 text-white font-extrabold text-lg text-center">
					View Cart
				</Text>
				<Text className="text-lg text-white font-extrabold">
					<ReactCurrencyFormatter quantity={cartTotal} currency="AUD" />
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default CartIcon
