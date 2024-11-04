import react from "react"
// import {} from "@react-navigation/native"
import{ createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import HomeScreen from "../Screens/HomeScreen"
import RestaurantScreen from "../Screens/RestaurantScreen"





export type RootStackParams = {
    
    home:undefined

    restaurantDisplay:{
        foodItemParams:{
            _id?:string;
            name:string;
            imageUrl:string;
            description:string;
            price?:number;
            quantity?:number;
            deliveryTimeFrom?: number;
            deliveryTimeTo?:number;
            length?:number;
            ratingCount?:number
        }
    }
}


const RootStack = createNativeStackNavigator<RootStackParams>();


export type RootStackScreenProps<T extends keyof RootStackParams>= NativeStackScreenProps<RootStackParams, T>;


const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="home" component={HomeScreen} options={{headerShown:false}} />
            <RootStack.Screen name="restaurantDisplay" component={RestaurantScreen} options={{headerShown:false}} />
        </RootStack.Navigator>
    )
}


export default RootNavigator