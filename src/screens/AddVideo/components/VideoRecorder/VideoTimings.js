import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const VideoTimings = ({ defaultTime = false, getMaxTime }) => {
    const times_list = [
        { name: '3m', val: 180 },
        { name: '60s', val: 60 },
        { name: '15s', val: 15 },
    ]
    const [defaultTimertZoomValue] = useState(defaultTime ? defaultTime : times_list[1]);

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.timerV01(defaultTimer == item.val)}
                onPress={() => {
                    setZoomValue(item)
                    if(getMaxTime) getMaxTime(item.val)
                }}>
                <Text style={styles.timerTxt01(defaultTimer == item.val)}>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.timerContainer}>
            <FlatList
                horizontal={true}
                data={times_list}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    timerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timerV01: (is) => ({
        paddingHorizontal: 10,
        backgroundColor: is ? 'rgba(0,0,0,0.5)' : 'transparent',
        marginHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20
    }),
    timerTxt01: (is) => ({
        color: '#fff',
        fontSize: 12,
    })
});

export default VideoTimings;
