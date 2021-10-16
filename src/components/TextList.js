import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from '../config/colors.json'

const TextList = ({ item, onPressHandler }) => {
    return (
        <TouchableOpacity style={styles.list} onPress={() => onPressHandler(item.key)}>
            <Text style={{ fontWeight: "700" }}>{item.todo}</Text>
        </TouchableOpacity>
    )
}

export default TextList

const styles = StyleSheet.create({
    list: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.mainColor,
        borderStyle: 'dashed',
        padding: 10,
        marginTop: 10,
        flex: 1,
        width: '100%'
    }
})