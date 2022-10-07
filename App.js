import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider } from "react-redux"
import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen"
import CartScreen from "./screens/CartScreen"
import { store } from "./store"

const Stack = createNativeStackNavigator()

function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Restaurant" component={RestaurantScreen} />
					<Stack.Screen
						name="Cart"
						component={CartScreen}
						options={{ presentation: "modal", headerShown: false }}
					/>
				</Stack.Navigator>
			</Provider>
		</NavigationContainer>
	)
}

export default App
