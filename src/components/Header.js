import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text}>i dont know</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 70,
        paddingTop: 38,
        backgroundColor: '#4138eb'
    },
    title: {
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }

})
