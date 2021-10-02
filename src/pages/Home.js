import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import Header from '../components/Header';


export default function Home({ navigation }) {
    const [list, setList] = useState([
        { todo: 'Something1', key: 1 },
        { todo: 'Something2', key: 2 },
        { todo: 'Something3', key: 3 },
    ])
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.content}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <Text>{item.todo}</Text>} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40
    },
    list: {
        marginTop: 20
    }
});
