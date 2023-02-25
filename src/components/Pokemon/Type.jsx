import { View, Text, StyleSheet } from 'react-native'
import { capitalize } from "lodash"
import getColorByType from '../../utils/getColorByType'
import React from 'react'

export default function Type({ types }) {
    const bg = (type) => {
        return getColorByType(type)
    }
    return (
        <View style={styles.content}>
            {
                types.map(item => (
                    <View key={item.type.name} style={{backgroundColor: bg(item.type.name), ...styles.pill}}>
                        <Text style={styles.type}>
                            {capitalize(item.type.name)}
                        </Text>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"

    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    type: {
        fontWeight: "bold",
        color: "#fff"
    }
})