import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite'
import '../global.css'

const RootLayout = () => {

  const createDbIfNeeded = async (db: SQLiteDatabase) => {
    // console.log("eliminando la tabla si es necesario")
    // await db.execAsync(
    //   "DROP TABLE IF EXISTS operations;" // Esto elimina la tabla si ya existe
    // );
    //este codigo crea la tabla
    await db.execAsync(
      "CREATE TABLE IF NOT EXISTS operations (id INTEGER PRIMARY KEY AUTOINCREMENT, operation TEXT, result TEXT, date TEXT);"
    );
  }

  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <SQLiteProvider databaseName='operations-db' onInit={createDbIfNeeded}>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme: DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)"  options={{headerShown: false}}/>
            <Stack.Screen name="details/index"  options={{headerShown: false}}/>
          </Stack>
        </ThemeProvider>
        <StatusBar style='auto' />
      </SQLiteProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout