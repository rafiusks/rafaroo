import { View, Text, TouchableOpacity, Image } from "react-native"
import React, { useState } from "react"
import ReactCurrencyFormatter from "react-currency-formatter-v2"
import { urlFor } from "../sanity"
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../features/cartSlice"
import { selectCartItemsWithId } from "../features/cartSlice"
import { removeFromCart } from "../features/cartSlice"

const DishRow = ({ id, name, description, price, image }) => {
	const [isPressed, setIsPressed] = useState(false)
	const dispatch = useDispatch()
	const item = useSelector((state) => selectCartItemsWithId(state, id))

	const addItemToCart = () => {
		dispatch(addToCart({ id, name, description, price, image }))
	}

	const removeItemFromCart = () => {
		if (!item.length > 0) return
		dispatch(removeFromCart({ id }))
	}

	return (
		<>
			<TouchableOpacity
				onPress={() => setIsPressed(!isPressed)}
				className={`bg-white border p-4 border-gray-200 ${
					isPressed && "border-b-0"
				}`}
			>
				<View className="flex-row">
					<View className="flex-1 pr-2">
						<View>
							<Text className="text-lg mb-1">{name}</Text>
							<Text className="text-gray-400">{description}</Text>
						</View>

						<Text className="text-gray-400 mt-2">
							<ReactCurrencyFormatter quantity={price} currency="AUD" />
						</Text>
					</View>
					<View>
						<Image
							style={{
								borderWidth: 1,
								borderColor: "#F3F3F4",
							}}
							source={{ uri: urlFor(image).url() }}
							className="h-20 w-20 bg-gray-300 p-4"
						/>
					</View>
				</View>
			</TouchableOpacity>

			{isPressed && (
				<View className="bg-white px-4">
					<View className="flex-row items-center space-x-2 pb-3">
						<TouchableOpacity
							disabled={!item.length}
							onPress={removeItemFromCart}
						>
							<MinusCircleIcon
								color={item.length > 0 ? "#F53783" : "gray"}
								size={40}
							/>
						</TouchableOpacity>
						<Text>{item.length}</Text>
						<TouchableOpacity onPress={addItemToCart}>
							<PlusCircleIcon size={40} color="#F53783" />
						</TouchableOpacity>
					</View>
				</View>
			)}
		</>
	)
}

export default DishRow
