import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import ThemedButton from '@/components/ThemedButton'
import useCalculator from '@/hooks/useCalculator'

const calculadora = () => {
  const {
    operation,
    value,
    setValue,
    setOperationValue,
    deleteOperation,
    calculateOperation,
    enterValue,
    deleteLast,
    error,
    resultToShow
  } = useCalculator()

  return (
    <SafeAreaView>
        <View className='mx-6' >
            {/* Header con linea divisora y boton de calcular y texto de advertencia */}
            <ThemedText className='text-[32px] mb-3' lightColor='#222222' darkColor='#FAF7F0'>Calculadora RPN</ThemedText>
            <ThemedView className='h-1 w-full mb-6'></ThemedView>
            <View className='flex flex-row items-center'>
                {/* Espacio para mostrar errores */}
                <View className='flex-1 ml-2'>
                  <ThemedText className='text-[14px]  text-left'  lightColor='#222222'  darkColor='#FAF7F0'>{error}</ThemedText>
                </View>
            </View>

            {/* Espacio para mostrar la operacion y los numeros/operadores */}
            <View>
              <View> 
                <ThemedText className='text-right text-[28px] mt-4'  lightColor='#222222'  darkColor='#FAF7F0'>{ resultToShow?.length ? resultToShow : operation}</ThemedText>
                <ThemedText className='text-right text-[36px] mt-4'  lightColor='#222222'  darkColor='#FAF7F0'>{value}</ThemedText>
              </View>
            </View>
            <ThemedView className='h-1 w-full mb-3'></ThemedView>

            {/* Espacio para los botones */}
            <View className='mt-6'>
              {/* primera fila: /, 7, 8, 9 */}
            <View className='flex flex-row justify-between'>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setValue("/")}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>/</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setOperationValue(7)}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>7</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setOperationValue(8)}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>8</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setOperationValue(9)}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>9</ThemedText>
              </ThemedButton>
            </View>
            {/* Segunda fila: *, 4, 5, 6 */}
            <View className='flex flex-row justify-between mt-5'>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setValue("*")}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>*</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setOperationValue(4)}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>4</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setOperationValue(5)}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>5</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setOperationValue(6)}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>6</ThemedText>
              </ThemedButton>
            </View>
            {/* Tercera fila: -, 3, 2, 1 */}
            <View className='flex flex-row justify-between mt-5'>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setValue("-")}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>-</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setOperationValue(1)}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>1</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setOperationValue(2)}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>2</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setOperationValue(3)}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>3</ThemedText>
              </ThemedButton>
            </View>
            {/* cuarta fila: +, caret, 0, enter */}
            <View className='flex flex-row justify-between mt-5'>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setValue("+")}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>+</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setValue("^")}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>^</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setOperationValue(0)}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>0</ThemedText>
              </ThemedButton>
              <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>setOperationValue(".")}>
                <ThemedText lightColor='#ECEDEE' className='text-[32px]'>.</ThemedText>
              </ThemedButton>
            </View>
            {/* Quinta fila: limpiar, calcular, borrarultimo */}
              <View className='flex flex-row justify-between mt-5'>
                <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>deleteOperation()}>
                    <ThemedText className='text-[20px] text-center' lightColor='#ECEDEE'>Dele</ThemedText>
                </ThemedButton>
                <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>calculateOperation()}>
                    <ThemedText className='text-[20px] text-center' lightColor='#ECEDEE'>Calc</ThemedText>
                </ThemedButton>
                <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>enterValue()}>
                  <ThemedText lightColor='#ECEDEE' className='text-[20px]'>Enter</ThemedText>
                </ThemedButton>
                <ThemedButton className='w-[72px] h-[72px] flex items-center justify-center rounded-xl' onPress={()=>deleteLast()}>
                    <ThemedText className='text-[24px] text-center' lightColor='#ECEDEE'>←</ThemedText>
                </ThemedButton>
              </View>
            </View>

        </View>
    </SafeAreaView>
  )
}

export default calculadora