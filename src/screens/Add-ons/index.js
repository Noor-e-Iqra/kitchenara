import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../assets/icons';
import Container from '../../components/Container';
import {COLORS, SIZES} from '../../theme';
import {add_ons} from './DummyData';
import AddItem from './components/AddItem';
import CustomButton from '../../components/Button';
import {styles} from './styles';
import routes from '../../navigation/routes';

export const AddOns = ({navigation, route}) => {
  const [addToCart, setAddToCart] = useState([]);
  const {item} = route?.params;
  return (
    <Container>
      <View>
        {/* item image */}
        <Image source={item.image} style={{height: 284, width: '100%'}} />
        {/* back arrow */}
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
          style={styles.back_arrow_con}>
          <Image
            source={icons.arrow_back}
            style={{height: 24, width: 24, tintColor: COLORS.secondary}}
          />
        </TouchableOpacity>
      </View>
      <View style={{padding: SIZES.padding}}>
        <View style={styles.row}>
          <View style={{width: '85%'}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>
              lettuce, diced tomatoes, cucumbers, olives, feta cheese, olive oil
              drizzle
            </Text>
          </View>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <Text style={styles.add_on}>Add-ons (Choose upto 2)</Text>
        {add_ons.map((add_on, i) => (
          <AddItem
            add_on={add_on}
            key={i}
            addToCart={addToCart}
            setAddToCart={setAddToCart}
          />
        ))}
      </View>
      <CustomButton
        text={'Go to cart                                        SAR 19.50'}
        large={true}
        onPress={() => navigation.navigate(routes.orders.details)}
        btnStyle={styles.btn}
      />
    </Container>
  );
};
