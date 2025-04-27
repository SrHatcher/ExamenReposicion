import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import ThemedButton from '@/components/ThemedButton'
import { router } from 'expo-router'

const history = () => {
  return (
    <SafeAreaView>
      <View className='mx-6'>
        {/* Header */}
        <ThemedText className='text-[32px] mb-3' lightColor='#222222' darkColor='#FAF7F0'>Historial</ThemedText>
        <ThemedView className='h-1 w-full mb-6'></ThemedView>

        {/* Lista de registros */}
        <View>
            {/* Lista de pressables a la vista de detalles */}
            <ThemedButton className='flex flex-row justify-between px-4 h-[90px] rounded-xl mb-4' lightColor='#E0E0E0' darkColor='#2B2B2B'
            onPress={() => router.push('/details')}>
                <View className='flex flex-col justify-center items-center'>
                    <ThemedText className='text-[32px]' darkColor='#FAF7F0' lightColor='#222222'>ID</ThemedText>
                    <ThemedText className='text-[24px]' darkColor='#FAF7F0' lightColor='#222222'>1</ThemedText>
                </View>
                <View className='flex flex-col justify-center items-center'>
                    <ThemedText className='text-[32px]' darkColor='#FAF7F0' lightColor='#222222'>Resultado</ThemedText>
                    <ThemedText className='text-[24px]' darkColor='#FAF7F0' lightColor='#222222'>22</ThemedText>
                </View>
            </ThemedButton>

            <ThemedButton className='flex flex-row justify-between px-4 h-[90px] rounded-xl mb-4' lightColor='#E0E0E0' darkColor='#2B2B2B'>
                <View className='flex flex-col justify-center items-center'>
                    <ThemedText className='text-[32px]' darkColor='#FAF7F0' lightColor='#222222'>ID</ThemedText>
                    <ThemedText className='text-[24px]' darkColor='#FAF7F0' lightColor='#222222'>2</ThemedText>
                </View>
                <View className='flex flex-col justify-center items-center'>
                    <ThemedText className='text-[32px]' darkColor='#FAF7F0' lightColor='#222222'>Resultado</ThemedText>
                    <ThemedText className='text-[24px]' darkColor='#FAF7F0' lightColor='#222222'>14</ThemedText>
                </View>
            </ThemedButton>

            <ThemedButton className='flex flex-row justify-between px-4 h-[90px] rounded-xl mb-4' lightColor='#E0E0E0' darkColor='#2B2B2B'>
                <View className='flex flex-col justify-center items-center'>
                    <ThemedText className='text-[32px]' darkColor='#FAF7F0' lightColor='#222222'>ID</ThemedText>
                    <ThemedText className='text-[24px]' darkColor='#FAF7F0' lightColor='#222222'>3</ThemedText>
                </View>
                <View className='flex flex-col justify-center items-center'>
                    <ThemedText className='text-[32px]' darkColor='#FAF7F0' lightColor='#222222'>Resultado</ThemedText>
                    <ThemedText className='text-[24px]' darkColor='#FAF7F0' lightColor='#222222'>48</ThemedText>
                </View>
            </ThemedButton>

            <ThemedButton className='flex flex-row justify-between px-4 h-[90px] rounded-xl mb-4' lightColor='#E0E0E0' darkColor='#2B2B2B'>
                <View className='flex flex-col justify-center items-center'>
                    <ThemedText className='text-[32px]' darkColor='#FAF7F0' lightColor='#222222'>ID</ThemedText>
                    <ThemedText className='text-[24px]' darkColor='#FAF7F0' lightColor='#222222'>4</ThemedText>
                </View>
                <View className='flex flex-col justify-center items-center'>
                    <ThemedText className='text-[32px]' darkColor='#FAF7F0' lightColor='#222222'>Resultado</ThemedText>
                    <ThemedText className='text-[24px]' darkColor='#FAF7F0' lightColor='#222222'>33</ThemedText>
                </View>
            </ThemedButton>
            
        </View>
      </View>
    </SafeAreaView>
  )
}

export default history