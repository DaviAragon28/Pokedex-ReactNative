import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonDetailsAPI } from '../api/pokemon'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'

export default function PokemonScreen({ navigation, route: { params } }) {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon
                    name='heart'
                    color="white"
                    size={20}
                />
            ),
            headerLeft: () => (
                <Icon
                    name="arrow-left"
                    color="#fff"
                    size={20}
                    style={{ marginLeft: 10 }}
                    onPress={navigation.goBack}
                />
            )
        })
    }, [navigation, params])

    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonDetailsAPI(params.id)
                setPokemon(response);
            } catch (e) {
                navigation.goBack()
            }
        })()
    }, [params])

    if (!pokemon) return null


    return (
        <ScrollView>
            <Header
                name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.other["official-artwork"].front_default}
                type={pokemon.types[0].type.name}
            />
            <Type types={pokemon.types} />
            <Stats stats={pokemon.stats} />
        </ScrollView>
    )
}