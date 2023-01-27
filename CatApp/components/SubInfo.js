import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = ({ title, titleSize }) => {
  return (
    <View >
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize,
    color: COLORS.primary}}>{title}</Text>
    </View>
  )
}





