import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import getColorByType from '../utils/getColorByType'
import React from 'react'
import { capitalize } from 'lodash'
import { useNavigation } from '@react-navigation/native'


export default function PokemonCard({ pokemon }) {
    const navigation = useNavigation()

    const pokemonColor = getColorByType(pokemon.type)
    const bg = { backgroundColor: pokemonColor, ...styles.bg}


    const goToPokemon = () => {
        navigation.navigate('Pokemon', { id: pokemon.id })
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bg}>
                        <Text style={styles.order}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image source={{ uri: pokemon.image }} style={styles.image} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bg: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    order: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10

    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    }

})