import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props extends PressableProps{
    lightColor?: string;
    darkColor?: string;
    className?: string,
    onPress?: () => void,
    children?: React.ReactNode

}

const ThemedButton = ({
    lightColor,
    darkColor,
    className,
    onPress,
    children,
    ...rest
}: Props)  => {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonBackground');
  return (
    <Pressable
    {...rest}
    className={className}
    onPress={onPress}
    style={{backgroundColor: color}}
    >
        {children}
    </Pressable>
  )
}

export default ThemedButton