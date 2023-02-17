import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../../../assets/icons';
import CustomButton from '../../../../components/Button';
import routes from '../../../../navigation/routes';
import {styles} from './styles';

const OngoingOrder = ({item}) => {
  const navigation = useNavigation();
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
        <Text style={styles.items} numberOfLines={1}>
          {item.items}
        </Text>
        <Text style={styles.add_on} numberOfLines={1}>
          {item.add_on}
        </Text>
      </View>
      <CustomButton
        text={'Track'}
        onPress={() => navigation.navigate(routes.orders.tracking)}
        small={true}
      />
    </TouchableOpacity>
  );
};

export default OngoingOrder;
