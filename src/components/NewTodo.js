import React from 'react'
import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import Plus from '../svg/Plus.svg'

const NewTodo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textinput}>
                <TextInput
                    placeholder='Add new todo'
                />
            </View>
            <Pressable style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                <Plus style={{ borderWidth: 1, borderRadius: 100, padding: 10 }} width={30} height={30} />
            </Pressable>
        </View>
    )
}

export default NewTodo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: "12%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textinput: {
        width: "70%",
        borderRadius: 100,
        borderWidth: 1,
        padding: 10,
        margin: 20
    }
})
