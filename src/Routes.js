import React from 'react'
import Home from './pages/Home'
import Main from './pages/Main'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
