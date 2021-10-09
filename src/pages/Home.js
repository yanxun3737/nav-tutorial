import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, Pressable } from 'react-native';

export default function Home({ navigation }) {
    const [list, setList] = useState([
        { todo: 'Something1', key: 1 },
        { todo: 'Something2', key: 2 },
        { todo: 'Something3', key: 3 },
    ])
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', paddingTop: 30 }}>Todos</Text>
            <View style={{ flex: 1, alignItems: 'flex-start', minWidth: "100%", paddingLeft: 10 }}>
                <FlatList
                    data={list}
                    keyExtractor={(item) => item.key.toString()}
                    renderItem={({ item }) => <Text>{item.todo}</Text>} />
            </View>
            <Pressable
                onPress={() => navigation.navigate('NewTodo')}
            >
                <Text>
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
    list: {
        marginTop: 20
    }
});
