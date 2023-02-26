import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const Zooming = ({ defaultValue = false, setZoomValue=(v)=>{} }) => {
    const zoom_list = [
        { name: '1x', val: 1 },
        { name: '2x', val: 2 },
        { name: '3x', val: 3 },
        { name: '4x', val: 4 },
        { name: '5x', val: 5 },
    ]

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.zoomV01(defaultValue == item.val)}
                onPress={() => {
                    setZoomValue(item.val)
                }}>
                <Text style={styles.zoomTxt01(defaultValue == item.val)}>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.zoomContainer}>
            <FlatList
                horizontal={true}
                data={zoom_list}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    zoomContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    zoomV01: (is) => ({
        paddingHorizontal: 10,
        backgroundColor: is ? '#ffffff' : 'transparent',
        marginHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 2
    }),
    zoomTxt01: (is) => ({
        color: is ? '#000' : '#fff',
        fontSize: 12,
    })
});

export default Zooming;
