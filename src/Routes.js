import React from 'react'
import Home from './pages/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import NewTodo from './pages/NewTodo'

const Stack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='NewTodo' component={NewTodo} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
