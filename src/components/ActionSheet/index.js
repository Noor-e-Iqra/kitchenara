import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../theme';
import {styles} from './styles';
import icons from '../../assets/icons/index';
import ActionSheet from 'react-native-actions-sheet';

const CustomActionSheet = ({actionSheetRef, children}) => {
  return (
    <ActionSheet
      ref={actionSheetRef}
      containerStyle={{
        padding: 20,
        paddingTop: 5,
        borderTopLeftRadius: 23,
        borderTopRightRadius: 23,
        backgroundColor: COLORS.secondary,
      }}>
      <View
        style={{
          height: 3,
          width: 40,
          borderRadius: 20,
          backgroundColor: COLORS.light_gray,
          alignSelf: 'center',
        }}
      />
      {children}
    </ActionSheet>
  );
};

export default CustomActionSheet;
