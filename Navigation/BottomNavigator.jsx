import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Map, Settings } from '../Screens'
import { useColorScheme } from 'nativewind'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()


const BottomNavigator = () => {

  const { colorScheme } = useColorScheme()

  return (
   <Tab.Navigator screenOptions={{ tabBarStyle: {
      backgroundColor: colorScheme === 'dark' ? 'black' : 'white'
   },
      headerShown: false,
      tabBarActiveTintColor: colorScheme === 'dark' ? 'lightgreen' : 'violet'
    }}>
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{ 
              tabBarIcon: ({ focused, color }) => {
                return <Ionicons name={focused ? "home" : "home-outline"} size={30} color={focused ? color : color} />
              }
           }}
        />

        <Tab.Screen 
          name="Map" 
          component={Map}
          options={{
            tabBarIcon: ({ focused, color }) => {
              return <Ionicons name={focused ? "map" : "map-outline"} size={30} color={focused ? color : color} />
            }

          }}
        />

        <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{ 
            tabBarIcon: ({ focused, color }) => {
              return <Ionicons name={focused ? "settings-sharp" : "settings-outline"} size={30} color={focused ? color : color} />
            }
           }}
        />

   </Tab.Navigator>
  )
}

export default BottomNavigator