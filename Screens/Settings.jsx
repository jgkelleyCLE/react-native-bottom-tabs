import { View, Text, Switch } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'

const Settings = () => {

    const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View className="bg-red-300 dark:bg-red-900 flex-1 items-center justify-center">
      <Text className="text-3xl text-neutral-700 dark:text-gray-200">Settings</Text>
      <View className="flex-row items-center">
        <Text className="text-xl pr-2">Dark Mode</Text>
        <Switch value={ colorScheme === 'dark' } onChange={toggleColorScheme} />
      </View>
    </View>
  )
}

export default Settings