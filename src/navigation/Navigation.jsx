import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import AccountScreen from '../screens/Account.Screen';
import PokedexScreen from '../screens/PokedexScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ImagePokeBall from '../components/ImagePokeBall';
import FavoritesNavigation from './FavoritesNavigation';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigations';

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name="Favorites" component={FavoritesNavigation} options={{
                tabBarBadge: '1',
                tabBarIcon: ({ color, size }) => (
                    <Icon name='heart' color={color} size={size} />
                )
            }}
            />
            <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
                tabBarLabel: "",
                tabBarIcon: () => ImagePokeBall()


            }}
            />

            <Tab.Screen name="Account" component={AccountNavigation} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name='user' color={color} size={size} />
                )
            }}
            />
        </Tab.Navigator>
    )
}
