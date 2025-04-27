import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import ThemedButton from '@/components/ThemedButton'
import { router } from 'expo-router'


const details = () => {
  return (
    <SafeAreaView className='mx-6'>
      <ThemedText className='text-[32px] mb-3' lightColor='#222222' darkColor='#FAF7F0'>Detalles</ThemedText>
      <ThemedView className='h-1 w-full mb-4'></ThemedView>

      <View className='mb-4'>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px]'>ID: 15</ThemedText>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px]'>Fecha: 15/04/2025</ThemedText>
      </View>
      <ThemedView className='h-1 w-full mb-4'></ThemedView>

      <View>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px] mb-3'>Elementos de esta operación</ThemedText>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px] mb-3'>8 5 6 8 + 9 8 * 2 / 15 + 36 -</ThemedText>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px] mb-3'>Resultado</ThemedText>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px] mb-4'>0</ThemedText>
      </View>
      <ThemedView className='h-1 w-full mb-4'></ThemedView>

      <ThemedButton className='rounded-xl h-[50px] flex flex-row items-center justify-center mb-3'>
        <ThemedText className='text-[24px] text-center'>Utilizar esta operación</ThemedText>
      </ThemedButton>

      <ThemedButton className='rounded-xl h-[50px] flex flex-row items-center justify-center mb-3'
        lightColor='#DDDDDD'
        darkColor='#2B2B2B'
        onPress={() => router.back()}
        >
        <ThemedText className='text-[24px] text-center' lightColor='#2B2B2B' darkColor='#FFFFFF'>Regresar</ThemedText>
      </ThemedButton>
    </SafeAreaView>
  )
}

export default details