import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../../../assets/icons';
import CustomButton from '../../../../components/Button';
import IconButton from '../../../../components/IconButton';
import routes from '../../../../navigation/routes';
import {styles} from './styles';

const AddItem = ({add_on, addToCart, setAddToCart}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '72%'}}>
        <Text style={styles.name} numberOfLines={1}>
          {add_on.name}
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          {add_on.price}
        </Text>
      </View>
      <CustomButton
        text={'Add'}
        btnStyle={{borderRadius: 10, width: 80}}
        disabled={addToCart?.includes(add_on.name)}
        small={true}
        onPress={() => setAddToCart([...addToCart, add_on.name])}
      />
    </View>
  );
};

export default AddItem;
