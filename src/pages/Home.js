import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, Alert } from 'react-native';
import { Colors } from '../config/colors.json'
import TextList from '../components/TextList';
import NewTodo from '../components/NewTodo';

export default function Home({ navigation }) {
    const [list, setList] = useState([
        { todo: 'Something1', key: 1 },
        { todo: 'Something2', key: 2 },
        { todo: 'Something3', key: 3 },
    ])

    const pressHandler = (key) => {
        setList((prevTodos) => {
            return prevTodos.filter((list) => list.key != key)
        })
    }

    const onSubmitHandler = (text) => {

        if (text.length > 0) {
            setList((prevTodos) => {
                return [{ todo: text, key: Math.random().toString() }, ...prevTodos]
            })
        } else {
            Alert.alert("Fuck You", "Pls enter something before you submit", [{ text: "ok, fine" }])
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Todos</Text>
                <View style={{ flex: 1, alignItems: "flex-start", minWidth: '100%' }}>
                    <FlatList
                        style={{ minWidth: '100%' }}
                        data={list}
                        keyExtractor={(list) => list.key.toString()}
                        renderItem={({ item }) => <TextList item={item} onPressHandler={pressHandler} />} />
                </View>
            </View>
            <NewTodo submitHandler={onSubmitHandler} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
        flex: 1,
        alignItems: 'center'
    },
    textinput: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.mainColor,
        padding: 10
    },
    list: {
        marginTop: 20
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    button: {
        maxHeight: "7%",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.mainColor,

    },
    text: {
        fontSize: 20,
        fontWeight: "600",
    }
});
