import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import '../global.css'

const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme: DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)"  options={{headerShown: false}}/>
          <Stack.Screen name="details/index"  options={{headerShown: false}}/>
        </Stack>
      </ThemeProvider>
      <StatusBar style='auto' />
    </GestureHandlerRootView>
  )
}

export default RootLayout