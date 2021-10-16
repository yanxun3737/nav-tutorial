import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, Pressable } from 'react-native';
import { Colors } from '../config/colors.json'
import TextList from '../components/TextList';

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
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', paddingTop: 30 }}>Todos</Text>
            <View style={{ flex: 1, alignItems: 'flex-start', minWidth: "100%", padding: 10 }}>
                <FlatList
                    style={{ minWidth: "100%" }}
                    data={list}
                    keyExtractor={(item) => item.key.toString()}
                    renderItem={({ item }) => <TextList item={item} onPressHandler={pressHandler} />} />
            </View>
            <Pressable
                style={styles.button}
                color={Colors.mainColor}
                onPress={() => navigation.navigate('NewTodo')}
            >
                <Text style={{ color: Colors.white, fontSize: 22, fontWeight: "700", fontFamily: "Roboto" }}>
                    Add a new todo
                </Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: "100%",
        alignItems: 'center'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        width: "100%"
    },
    button: {
        width: "100%",
        maxHeight: "7%",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.mainColor,
    },
    list: {
        marginTop: 20
    }
});
