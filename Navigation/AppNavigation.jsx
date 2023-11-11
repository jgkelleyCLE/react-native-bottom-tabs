import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigator from './BottomNavigator'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomNavigation" component={BottomNavigator} />
        </Stack.Navigator>
    )
}


const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Navigator />
    </NavigationContainer>
  )
}

export default AppNavigation