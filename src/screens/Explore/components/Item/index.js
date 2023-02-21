import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../../../assets/icons';
import CustomButton from '../../../../components/Button';
import routes from '../../../../navigation/routes';
import {styles} from './styles';

const Item = ({item, index, onPress}) => {
  return (
    <View style={styles.extraComponentContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{
          ...styles.container,
          marginLeft: !index ? 0 : 7,
        }}>
        <Image
          source={item.image}
          style={{height: 80, width: 80, borderRadius: 60}}
          resizeMode="contain"
        />
        <Text style={styles.name}>{item.name}</Text>
      
      </TouchableOpacity>
      {item.restaurantImage && (
          <Image
            source={item.restaurantImage}
            style={styles.res}
            resizeMode="contain"
          />
        )}
    </View>
  );
};

export default Item;
