import { View, Text, useState } from 'react-native'
import React from 'react'
import { NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS} from '../constants'

const DetailsDesc = ({ data }) => {

  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NFTTitle
          title={data.id}
          titleSize={SIZES.extraLarge}
        />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
        }}>Description</Text>
        <View style={{ marginTop: SIZES.base}}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            URL: {data.url}</Text>
            <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            Height: {data.height}</Text>
            <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            Width: {data.width}</Text>
          
        </View>
      </View>
    </>
  )
}

export default DetailsDesc