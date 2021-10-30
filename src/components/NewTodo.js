import React, { useState } from 'react'
import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import Plus from '../svg/Plus.svg'

const NewTodo = () => {

    const [text, setText] = useState('')

    const onChangeTextHandler = (val) => {
        setText(val)
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", minWidth: "70%", marginHorizontal: 10 }}>
                <TextInput
                    style={{ borderWidth: 1, borderRadius: 100, padding: 15, width: "100%" }}
                    placeholder="Add new todo"
                    onChangeText={onChangeTextHandler}
                />
            </View>
            <Pressable style={{ flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 20 }}>
                <View style={{ borderWidth: 1, borderRadius: 100, padding: 15 }}>
                    <Plus width={30} height={30} />
                </View>
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
        padding: 10,
        borderRadius: 100,
        borderWidth: 1,
        minHeight: "12%"
    },
    text: {
        width: "70%",
    }
})
