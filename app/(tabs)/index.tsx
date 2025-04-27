import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import ThemedButton from '@/components/ThemedButton'

const calculadora = () => {
  return (
    <SafeAreaView>
        <View className='mx-6' >
            {/* Header con linea divisora y boton de calcular y texto de advertencia */}
            <ThemedText className='text-[32px] mb-3' lightColor='#222222' darkColor='#FAF7F0'>Calculadora RPN</ThemedText>
            <ThemedView className='h-1 w-full mb-6'></ThemedView>
            <View className='flex flex-row items-center'>
                <ThemedButton className='w-[140px] h-[56px] flex items-center justify-center rounded-xl'>
                    <ThemedText className='text-[24px] text-center' lightColor='#ECEDEE'>Calcular</ThemedText>
                </ThemedButton>
                <View className='flex-1 ml-2'>
                  <ThemedText className='text-[14px]  text-center'  lightColor='#222222'  darkColor='#FAF7F0'>Faltan operadores lógicos o numeros para resolver este problema</ThemedText>
                </View>
            </View>

            {/* Espacio para mostrar la operacion y los numeros/operadores */}
            <View>
              <View> 
                <ThemedText className='text-right text-[28px] mt-4'  lightColor='#222222'  darkColor='#FAF7F0'>3 4 + 5 2 -</ThemedText>
                <ThemedText className='text-right text-[36px] mt-4'  lightColor='#222222'  darkColor='#FAF7F0'>*</ThemedText>
              </View>
            </View>
            <ThemedView className='h-1 w-full mb-3'></ThemedView>

            {/* Espacio para los botones */}
            <View className='mt-6'>
              {/* primera fila: /, 7, 8, 9 */}
            <View className='flex flex-row justify-between'>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>/</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>7</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>8</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>9</ThemedText>
              </ThemedButton>
            </View>
            {/* Segunda fila: *, 4, 5, 6 */}
            <View className='flex flex-row justify-between mt-5'>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>*</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>4</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>5</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>6</ThemedText>
              </ThemedButton>
            </View>
            {/* Tercera fila: -, 3, 2, 1 */}
            <View className='flex flex-row justify-between mt-5'>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>-</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>3</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>2</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>1</ThemedText>
              </ThemedButton>
            </View>
            {/* cuarta fila: +, caret, 0, enter */}
            <View className='flex flex-row justify-between mt-5'>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>+</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>^</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>0</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl'>
                <ThemedText lightColor='#ECEDEE' className='text-[20px]'>Enter</ThemedText>
              </ThemedButton>
            </View>
            </View>

        </View>
    </SafeAreaView>
  )
}

export default calculadora