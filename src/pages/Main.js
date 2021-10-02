import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Main({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>page 2</Text>
            <Button
                title='Go Back'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});