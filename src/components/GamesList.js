import React from 'react'
import { Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import { ALL_COLORS } from '../func/colors';

const GamesList = ({ img, title, bg, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: "row",
                backgroundColor: bg,
                padding: 20,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: "center",
                marginTop: 10
            }}
        >
            <Image
                source={{uri: img}}
                style={{ width: 40, height: 40 }}
            />

            <View>
                <Text style={{
                    color: ALL_COLORS.secondary,
                    fontSize: 20,
                    paddingHorizontal: 20,
                    width: 170,
                    fontWeight: '200',
                }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default GamesList;