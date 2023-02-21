import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../components/Button';
import routes from '../../navigation/routes';
import {COLORS} from '../../theme';

export const Onboarding = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.secondary}}>
      <ImageBackground
        source={require('../../assets/images/onboarding-last.png')}
        style={{flex: 1, width: '100%', backgroundColor: '#fff'}}>
        <ImageBackground
          source={require('../../assets/images/gradient-1.png')}
          style={{flex: 1, width: '100%'}}>
          <View style={{flex: 2, paddingHorizontal: 19}}>
            {/* Text part */}
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: 38,
                  lineHeight: 44,
                  color: '#ffffff',
                  textAlign: 'center',
                }}>
                Discover . Order. {'\n'}Create
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 18,
                  textAlign: 'center',
                  paddingTop: 28,
                  paddingBottom: 50,
                }}>
                With kitchenara the FUTURE is Now!
              </Text>
              {/* Button */}

              <CustomButton
                text={'Get Started'}
                onPress={() => navigation.navigate(routes.dasboard)}
                large={true}
                btnStyle={{width:"100%",marginBottom:30}}
              />
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </View>
  );
};
