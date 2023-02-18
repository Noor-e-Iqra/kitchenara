import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../../../assets/icons';
import CustomButton from '../../../../components/Button';
import IconButton from '../../../../components/IconButton';
import routes from '../../../../navigation/routes';
import {styles} from './styles';

const OrderItem = ({item}) => {
  const [qty, setQty] = useState(1);
 

  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={{height: 68, width: 68,borderRadius:14}}
        resizeMode="cover"
      />
      <View style={{marginHorizontal: 15, flex: 1}}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.add_on} numberOfLines={1}>
          {item.add_on}
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          {item.price}
        </Text>
      </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton
            icon={'minus'}
            disabled={qty == 1}
            onPress={() => setQty(qty - 1)}
          />
          <Text style={styles.qty} numberOfLines={1}>
            {qty}
          </Text>
          <IconButton icon={'plus'} onPress={() => setQty(qty + 1)} />
        </View>
      
      
    </View>
  );
};

export default OrderItem;
