import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../../theme';

const OnVideoModal = ({callback}) => {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.urbanist14}}>
        With Kitchenara everyone is a creator! Join our creators hub to get
        exclusive deals!
      </Text>
      <Text style={{...styles.arialRoundedbold12}}>
        Switch to Kitchenara Creators Hub?
      </Text>
      <TouchableOpacity
        onPress={() => {
          callback();
        }}
        style={{...styles.creatingbtnstyle}}>
        <Text style={{...styles.creatingbtntextstyle}}>Start creating</Text>
      </TouchableOpacity>
      <Text style={{...styles.urbanist12}}>Maybe later</Text>
    </View>
  );
};

export default OnVideoModal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginTop: 22,
    paddingBottom: 28,
    backgroundColor: '#FFFFFF',
  },
  urbanist14: {
    ...FONTS.urbanist_regular,
    color: '#000000',
    fontSize: 14,
    marginHorizontal: 32,
    alignSelf: 'center',
    textAlign: 'center',
  },
  arialRoundedbold12: {
    ...FONTS.arial_rounded_bold,
    color: '#E5384E',
    fontSize: 12,
    alignSelf: 'center',
    marginTop: 16,
    alignSelf: 'center',
  },
  creatingbtnstyle: {
    backgroundColor: '#E5384E',
    height: 58,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  creatingbtntextstyle: {
    ...FONTS.arial_rounded_bold,
    color: '#FFFFFF',
    fontSize: 18,
  },
  urbanist12: {
    ...FONTS.urbanist_regular,
    fontSize: 12,
    color: '#4086F0',
    alignSelf: 'center',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});
