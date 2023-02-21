import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../../../../components/Button';
import routes from '../../../../navigation/routes';
import {COLORS} from '../../../../theme';
import {styles} from './styles';
import Feather from 'react-native-vector-icons/Feather';

const ViewMenu = ({item}) => {
  const navigation = useNavigation();
  return (
    <View  style={styles.container}>
      <Image
        source={item.image}
        style={{height: 68, width: 68,borderRadius:40}}
        resizeMode="cover"
      />
      <View style={{marginHorizontal: 15, flex: 1}}>
        <Text style={styles.shop_name} numberOfLines={1}>
          {item.shop_name}
        </Text>
        <Text style={styles.category} numberOfLines={1}>
          {item.category}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.delivery} numberOfLines={1}>
            {item.delivery}
          </Text>
          <Feather
            name="truck"
            size={15}
            color={COLORS.light_blue}
            style={{
              transform: [{scaleX: -1}],
            }}
          />
        </View>
      </View>
      <CustomButton
        text={'View menu'}
        onPress={() => navigation.navigate(routes.explore.viewMenu)}
        small={true}
      />
    </View>
  );
};

export default ViewMenu;
