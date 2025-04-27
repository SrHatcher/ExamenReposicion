import { View, Text, useColorScheme } from 'react-native'
import { Calculator, History, ListCollapse } from 'lucide-react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { HapticTab } from '@/components/HapticTab'

const _layout = () => {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          height: 80,
          width: 374,
          marginBottom: 10,
          borderRadius: 16,
          alignSelf: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4, 
          marginBottom: 8, 
        },
        tabBarIconStyle: {
          marginTop: 8,
        }
      }}
    >
      <Tabs.Screen 
        name='index'
        options={{
          title: "Caculadora",
          tabBarIcon: ({color}) => <Calculator size={24} color={color}/>
        }}
      />
      <Tabs.Screen 
        name='history'
        options={{
          title: "Historial",
          tabBarIcon: ({color}) => <History size={24} color={color}/>
        }}
      />
    </Tabs>
  )
}

export default _layout