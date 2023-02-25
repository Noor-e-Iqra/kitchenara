import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import routes from '../../navigation/routes';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrices';
import {COLORS, FONTS, SIZES} from '../../theme';
import CustomButton from '../../components/Button';

const {width, height} = Dimensions.get('screen');

export const VideoNext = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} translucent={true} />
      <ImageBackground
        source={require('../../assets/images/videonexticon.png')}
        resizeMode="cover"
        style={{height: height, width: width}}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            padding: SIZES.padding,
          }}>
          <View style={styles.topParrent}>
            <TouchableOpacity
            activeOpacity={0.6}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={require('../../assets/images/cross-white.png')} />
            </TouchableOpacity>
            <View>
              <View style={{alignItems: 'center'}}>
                <Image source={require('../../assets/images/scissors.png')} />
                <Text style={{...styles.textstyle}}>Trim</Text>
              </View>
              <View
                style={{
                  marginVertical: verticalScale(20),
                  alignItems: 'center',
                }}>
                <Image source={require('../../assets/images/sparkle.png')} />
                <Text style={{...styles.textstyle}}>Effects</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={require('../../assets/images/vector.png')} />
                <Text style={{...styles.textstyle}}>Text</Text>
              </View>
            </View>
          </View>
          <CustomButton
            text={'Next'}
            large={true}
            btnStyle={styles.nextbtnstyle}
            onPress={() => {
              navigation.navigate(routes.postVideo.index);
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  bgImageWrapper: {
    height: height,
    width: width,
    position: 'absolute',
  },
  topParrent: {
    marginTop: verticalScale(47),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  nextbtnstyle: {
    position: 'absolute',
    bottom: 60,
    left: 16,
    right: 16,
  },
  textstyle:{
    ...FONTS.arial_rounded_bold,
    fontSize:10,
    color:COLORS.secondary,
    marginTop:10
  }
});
