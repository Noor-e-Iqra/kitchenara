import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import icons from '../../assets/icons';
import CustomButton from '../../components/Button';
import Container from '../../components/Container';
import CustomHeader from '../../components/Header';
import Heading from '../../components/Heading';
import OutilneContainer from '../../components/OutilneContainer';
import RowText from '../../components/RowText';
import {COLORS, FONTS, SIZES} from '../../theme';
import OrderItem from './components/OrderItem';
import {myLocations, orderItems} from './DummyData';
import Feather from 'react-native-vector-icons/Feather';
import images from '../../assets/images';
import routes from '../../navigation/routes';
import CustomActionSheet from '../../components/ActionSheet';

export const OrderDetails = ({navigation}) => {
  const actionSheetRef = useRef(null);
  const payment_methods = [
    {name: 'Cash on delivery', icon: icons.cash},
    {name: 'Apple pay', icon: icons.apple},
    {name: 'Credit Card', icon: icons.credit_card},
  ];
  // selected payment method index
  const [selected, setSelected] = useState(1);
  const [selectedLoc, setSelectedLoc] = useState('');

  return (
    <Container>
      <CustomHeader title={'Order details'} showArrow={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: SIZES.padding, paddingVertical: 10}}>
          <FlatList
            data={orderItems}
            scrollEnabled={false}
            keyExtractor={(_, i) => i}
            renderItem={({item}) => <OrderItem item={item} />}
          />
          <Heading
            text={'Select your location'}
            style={{
              fontSize: 18,
              alignSelf: 'flex-start',
              marginTop: 20,
              marginBottom: 6,
            }}
          />
          {/* if location is selected */}
          {Boolean(selectedLoc.length) ? (
            <OutilneContainer
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 10,
                paddingRight: 20,
                marginTop: 14,
              }}>
              <Image
                source={images.map}
                style={{height: 50, width: 52, borderRadius: 10}}
                resizeMode="cover"
              />
              <Text
                style={{
                  ...FONTS.arial_rounded_bold,
                  fontSize: 14,
                  color: COLORS.gray_text,
                  marginLeft: 15,
                  width: '50%',
                }}>
                {selectedLoc}
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate(routes.orders.myLocation)}>
                  <Feather name="edit" size={15} color={COLORS.primary} />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate(routes.orders.myLocation)}>
                  <Text
                    style={{
                      ...FONTS.arial_rounded_bold,
                      fontSize: 16,
                      color: COLORS.primary,
                      marginLeft: 10,
                      textDecorationLine: 'underline',
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </OutilneContainer>
          ) : (
            <>
              {myLocations.map((item, i) => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  key={i}
                  onPress={() => setSelectedLoc(item)}>
                  <OutilneContainer
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 20,
                      marginTop: 14,
                    }}>
                    <Image
                      source={icons.briefcase}
                      style={{height: 24, width: 24}}
                      resizeMode="contain"
                    />
                    <Text
                      style={{
                        ...FONTS.arial_rounded_bold,
                        fontSize: 14,
                        color: COLORS.gray_text,
                        marginLeft: 15,
                        width: '50%',
                      }}>
                      {item}
                    </Text>
                  </OutilneContainer>
                </TouchableOpacity>
              ))}
            </>
          )}
          <CustomButton
            text={'+ Add new location'}
            outlined={true}
            btnStyle={{height: 52, borderRadius: 14, marginTop: 14}}
            onPress={() => navigation.navigate(routes.orders.myLocation)}
          />
          <Heading
            text={'Order summary'}
            style={{
              fontSize: 18,
              alignSelf: 'flex-start',
              marginTop: 20,
              marginBottom: 14,
            }}
          />
          <OutilneContainer
            style={{
              paddingVertical: 20,
            }}>
            <RowText
              label={'Payment method'}
              value={payment_methods[selected].name}
              dropDown={true}
              onPressDropdown={() => actionSheetRef.current?.show()}
            />
            <RowText
              label={'Delivery'}
              value="SR 13"
              containerStyle={{marginBottom: 20}}
            />
            <View style={{borderWidth: 1, borderColor: COLORS.lineAround}} />
            <RowText
              label={'Total'}
              value="SR 47"
              containerStyle={{marginTop: 20, marginBottom: 10}}
              labelStyle={{
                ...FONTS.arial_rounded_bold,
                fontSize: 22,
                color: COLORS.light_gray2,
              }}
              valueStyle={{
                ...FONTS.arial_rounded_bold,
                fontSize: 22,
                color: COLORS.primary,
              }}
            />
          </OutilneContainer>
          {/* pay btn */}
          <CustomButton
            text={'Pay'}
            large={true}
            btnStyle={{flexDirection: 'row', backgroundColor: 'black'}}
            onPress={() =>
              navigation.navigate(routes.auth.login, {selected: selected})
            }
            icon={
              <Image
                source={payment_methods[selected].icon}
                style={{height: 28, width: 28, marginRight: 5}}
              />
            }
          />
        </View>
      </ScrollView>
      {/* bottom sheet */}
      <CustomActionSheet actionSheetRef={actionSheetRef}>
        <View style={{marginVertical: 20}}>
          {payment_methods.map((item, i) => (
            <CustomButton
              key={i}
              text={item.name}
              outlined={true}
              onPress={() => setSelected(i)}
              icon={
                <Image
                  source={item.icon}
                  style={{
                    height: 23,
                    width: 23,
                    marginRight: 5,
                    tintColor:
                      //for apple icon when selected
                      i == 1 && i == selected
                        ? COLORS.secondary
                        : //for apple icon when not selected
                        i == 1 && i != selected
                        ? COLORS.black
                        : //for other icons
                          undefined,
                  }}
                />
              }
              btnStyle={{
                flexDirection: 'row',
                backgroundColor:
                  i == selected ? COLORS.primary : COLORS.secondary,
                borderWidth: i != selected ? 1 : 0,
                borderColor: COLORS.primary,
                height: 58,
              }}
              textStyle={{
                color: i == selected ? COLORS.secondary : COLORS.primary,
              }}
            />
          ))}
        </View>
      </CustomActionSheet>
    </Container>
  );
};
