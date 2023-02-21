import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import CustomButton from '../../../../components/Button';
import routes from '../../../../navigation/routes';
import {COLORS} from '../../../../theme';
import {styles} from './styles';

const SearchedItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={{height: 68, width: 68, borderRadius: 15}}
        resizeMode="cover"
      />
      <View style={{marginHorizontal: 15, flex: 1}}>
        <Text style={styles.shop_name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.category} numberOfLines={1}>
          {item.tag}
        </Text>
      </View>
      <CustomButton
        text={item.category == 'People' ? 'Follow' : 'View menu'}
        onPress={() =>
          item.category == 'People'
            ? {}
            : navigation.navigate(routes.explore.viewMenu)
        }
        small={true}
      />
    </View>
  );
};

export default SearchedItem;
