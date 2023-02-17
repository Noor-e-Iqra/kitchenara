import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../../../../components/Button';
import {styles} from './styles';

const HistoryOrder = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image
        source={item.image}
        style={{height: 68, width: 68}}
        resizeMode="cover"
      />
      <View style={{marginHorizontal: 15, flex: 1}}>
        <Text style={styles.shop_name} numberOfLines={1}>
          {item.shop_name}
        </Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <View style={{alignItems: 'flex-end', alignSelf: 'flex-start'}}>
        <Text style={styles.date}>{item.date}</Text>
        <CustomButton text={'View details'} outlined={true} />
      </View>
    </TouchableOpacity>
  );
};

export default HistoryOrder;
