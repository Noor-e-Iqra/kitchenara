import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import icons from '../../assets/icons';
import Container from '../../components/Container';
import CustomHeader from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../theme';
import Heading from '../../components/Heading'
import HistoryOrder from './components/OrderStatusBar';
import OngoingOrder from '../../components/OutilneContainer';
import {history, onging, OrderDetails} from './DummyData';
import OrderStatusBar from './components/OrderStatusBar';
import images from '../../assets/images';
import OutilneContainer from '../../components/OutilneContainer';
import RowText from '../../components/RowText';
import CustomButton from '../../components/Button';

export const Tracking = ({navigation}) => {
  const [track, setTrack] = useState(1);
  const image = [images.chef, images.bike, images.home_office];

  return (
    <Container>
      <CustomHeader title={'Tracking'} showArrow={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => (track != 3 ? setTrack(track + 1) : {})}>
          <View style={{paddingHorizontal: SIZES.padding, paddingVertical: 10}}>
            <OrderStatusBar track={track} />
            <Image
              source={image[track - 1]}
              style={{
                height: 230,
                width: '100%',
                marginVertical: 20,
                marginTop: 40,
              }}
              resizeMode="contain"
            />
            {/* order details */}
            <Heading text={'Order details'} style={{alignSelf: 'flex-start'}} />
            <OutilneContainer>
              {OrderDetails.map((item, i) => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 10,
                  }}
                  key={i}>
                  <View style={{flex: 1}}>
                    <Text
                      style={{...FONTS.source_sans_pro_semiBold, fontSize: 18}}>
                      {item.item}
                    </Text>
                    <Text
                      style={{
                        ...FONTS.source_sans_pro_regular,
                        fontSize: 14,
                        color: COLORS.light_gray_txt,
                      }}>
                      {item.add_on}
                    </Text>
                  </View>
                  <Text
                    style={{
                      ...FONTS.source_sans_pro_semiBold,
                      fontSize: 18,
                      color: COLORS.primary,
                    }}>
                    {item.price}
                  </Text>
                </View>
              ))}
            </OutilneContainer>
            {/* order summary */}
            <Heading
              text={'Order summary'}
              style={{alignSelf: 'flex-start', marginTop: 20}}
            />
            <OutilneContainer>
              <RowText label={'Payment method'} value="Credit card" />
              <RowText label={'Delivery'} value="SR 13" />
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
            <CustomButton text={'Cancel Order'} large={true}/>
          </View>
        </Pressable>
      </ScrollView>
    </Container>
  );
};
