import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

const Map = () => {
  return (
    <View className="flex-1">
      <MapView
      initialRegion={{
        latitude: 41.500,
        longitude: -81.700,
        latitudeDelta: 0.2022,
        longitudeDelta: 0.0821
      }}
        className="w-[100%] h-[100%]"
      >

      </MapView>
    </View>
  )
}

export default Map