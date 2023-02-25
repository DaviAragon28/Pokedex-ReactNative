
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AccountScreen from '../screens/Account.Screen'

const Stack = createNativeStackNavigator()

export default function AccountNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='MyAccount' component={AccountScreen} options={{ title: "My Account"}} />
        </Stack.Navigator>
    )
}