import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import ThemedButton from '@/components/ThemedButton'
import { router } from 'expo-router'
import useHistory from '@/hooks/useHistory'
import { useHistoryStore } from '@/hooks/useStore'

const history = () => {
    const { data } = useHistory()
    const dataLength = data.length

    const {setId,setOperation, setResult, setDate} = useHistoryStore()

  return (
    <SafeAreaView>
      <View className='mx-6'>
        {/* Header */}
        <ThemedText className='text-[32px] mb-3' lightColor='#222222' darkColor='#FAF7F0'>Historial</ThemedText>
        <ThemedView className='h-1 w-full mb-6'></ThemedView>

        {/* Lista de registros */}
        {dataLength === 0 ? (
            <ThemedText className='text-[32px]' darkColor='#FAF7F0' lightColor='#222222'>No hay datos para mostrar</ThemedText>
        ) : (
            data.map((item)=>{
                return(
                    <View key={item.id}>
                        {/* Lista de pressables a la vista de detalles */}
                        <ThemedButton className='flex flex-row justify-between px-4 h-[90px] rounded-xl mb-4' lightColor='#E0E0E0' darkColor='#2B2B2B'
                        onPress={() => {
                            setId(item.id)
                            setOperation(item.operation)
                            setResult(item.result)
                            setDate(item.date)
                            router.push('/details')
                        }}>
                            <View className='flex flex-col justify-center items-center'>
                                <ThemedText className='text-[32px]' darkColor='#FAF7F0' lightColor='#222222'>ID</ThemedText>
                                <ThemedText className='text-[24px]' darkColor='#FAF7F0' lightColor='#222222'>{item.id}</ThemedText>
                            </View>
                            <View className='flex flex-col justify-center items-center'>
                                <ThemedText className='text-[32px]' darkColor='#FAF7F0' lightColor='#222222'>Resultado</ThemedText>
                                <ThemedText className='text-[24px]' darkColor='#FAF7F0' lightColor='#222222'>{item.result}</ThemedText>
                            </View>
                        </ThemedButton>
                    </View>
                )
            })
            
        )}
        
      </View>
    </SafeAreaView>
  )
}

export default history