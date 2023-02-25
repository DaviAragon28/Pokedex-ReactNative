import { View, Text, FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemons, loadPokemons, isNext }) {
    const loadMore = () => {
        loadPokemons()
    }

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            horizontal={false}
            showsVerticalScrollIndicator={true}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatList}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && 
                <ActivityIndicator
                    size='large'
                    style={styles.spinner}
                    color="#AEAEAE"
                />
            }
        />
    )
}

const styles = StyleSheet.create({
    flatList: {
        paddingHorizontal: 15,
        marginTop: Platform.OS === 'android' ? 30 : 0
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 90 : 60,
    }
})