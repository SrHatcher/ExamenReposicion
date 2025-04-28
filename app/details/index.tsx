import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import ThemedButton from '@/components/ThemedButton'
import { router } from 'expo-router'
import { useHistoryStore } from '@/hooks/useStore'


const details = () => {
  const {
    id,
    operation,
    result,
    date
  } = useHistoryStore()


  const newDate = date.slice(0, 10)

  return (
    <SafeAreaView className='mx-6'>
      <ThemedText className='text-[32px] mb-3' lightColor='#222222' darkColor='#FAF7F0'>Detalles</ThemedText>
      <ThemedView className='h-1 w-full mb-4'></ThemedView>

      <View className='mb-4'>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px]'>ID: {id}</ThemedText>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px]'>Fecha: {newDate}</ThemedText>
      </View>
      <ThemedView className='h-1 w-full mb-4'></ThemedView>

      <View>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px] mb-3'>Elementos de esta operación</ThemedText>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px] mb-3'>{operation}</ThemedText>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px] mb-3'>Resultado</ThemedText>
        <ThemedText lightColor='#222222' darkColor='#FAF7F0' className='text-[20px] mb-4'>{result}</ThemedText>
      </View>
      <ThemedView className='h-1 w-full mb-4'></ThemedView>

      {/* hiba a agregar esta opcion para reutilizar la expresion en la calculadora pero ya solo me queda una hora para subir el examen
       y me da miedo quedarme sin tiempo u.u */}
      {/* <ThemedButton className='rounded-xl h-[50px] flex flex-row items-center justify-center mb-3'>        
        <ThemedText className='text-[24px] text-center'>Utilizar esta operación</ThemedText>
      </ThemedButton> */}

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