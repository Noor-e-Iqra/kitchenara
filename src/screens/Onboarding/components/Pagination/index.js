import { StyleSheet, Animated, View, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';


const Pagination = ({ data, scrollX, index }) => {

    const { width } = Dimensions.get('screen');

    return (
        <View style={[styles.container]}>
            {data.map((item, idx) => {
                const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [12, 40, 12],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.2, 1, 0.1],
                    extrapolate: 'clamp',
                });

                // const backgroundColor = scrollX.interpolate({
                //   inputRange,
                //   outputRange: [item.color, item.color, item.color],
                //   extrapolate: 'clamp',
                // });

                return (
                    <Animated.View
                        key={idx.toString()}
                        style={[
                            styles.dot,
                            {
                                width: dotWidth, backgroundColor: item.color
                            },
                            // idx === index && styles.dotActive,
                        ]}
                    />
                );
            })}
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 120,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 3,
        backgroundColor: '#ccc',
    },
    dotActive: {
        backgroundColor: '#000',
    },
});