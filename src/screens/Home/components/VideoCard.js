import React, {memo, useRef} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Video from 'react-native-video';
import {horizontalScale, moderateScale} from '../../../utils/metrices';
import {COLORS, FONTS} from '../../../theme';

const {width, height} = Dimensions.get('screen');

const VideoCard = ({onReport, onComment, onShop, onShare, data}) => {
  const videoRef = useRef(null);

  const onBuffer = e => {
    console.log('Buffer error', e);
  };
  const videoError = e => {
    console.log('video error', e);
  };

  return (
    <View
      style={{
        height:Platform.OS=='android'? height-74:height,
        width: width,
      }}>
      <Video
        source={{uri: data.url}}
        ref={videoRef}
        onBuffer={onBuffer}
        onError={videoError}
        resizeMode="cover"
        poster="https://upload.wikimedia.org/wikipedia/commons/2/2f/Alesso_profile.png"
        paused={false}
        repeat
        style={styles.backgroundVideo}
      />

      <View style={styles.bottomContainer}>
        <View style={{...styles.row, flex: 1}}>
          <View
            style={{
              height: moderateScale(60),
              width: moderateScale(60),
              borderRadius: 60,
              borderWidth: 0.5,
            }}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Alesso_profile.png',
              }}
              style={{
                height: moderateScale(60),
                width: moderateScale(60),
                borderRadius: 60,
              }}
            />
          </View>
          <View style={{marginLeft: horizontalScale(11)}}>
            <Text style={styles.name}>jenny_wirosa</Text>
            <Text style={styles.designation}>Videographer</Text>
            <Text style={styles.date}>Posted 1 Day ago</Text>
          </View>
        </View>
        <View style={{alignSelf: 'flex-end', alignItems: 'flex-end'}}>
          <View
            style={{
              maxWidth: 100,
              gap: 5,
            }}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image
                style={styles.social_icon}
                source={require('../../../assets/icons/Heart.png')}
              />
              <Text style={styles.social_text}>{'23k'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onShop();
              }}
              style={{alignItems: 'center'}}>
              <Image
                style={styles.social_icon}
                source={require('../../../assets/icons/shopping-cart.png')}
              />
              <Text style={styles.social_text}>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onComment();
              }}
              style={{alignItems: 'center'}}>
              <Image
                style={styles.social_icon}
                source={require('../../../assets/icons/comment-dots.png')}
              />
              <Text style={styles.social_text}>{'200'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onShare();
              }}
              style={{alignItems: 'center'}}>
              <Image
                style={styles.social_icon}
                source={require('../../../assets/icons/send.png')}
              />
              <Text style={styles.social_text}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onReport();
              }}
              style={{alignItems: 'center'}}>
              <Image
                style={styles.social_icon}
                source={require('../../../assets/icons/more-horizontal-circle.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    height: height - 60,
    width: width,
  },
  bottomContainer: {
    position: 'absolute',
    zIndex: 20,
    bottom:Platform.OS=='android'? 60:90,
    width: width,
    paddingBottom: 30,
    paddingHorizontal: horizontalScale(12),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    ...FONTS.arial_rounded_bold,
    color: '#FFFFFF',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(21),
  },
  designation: {
    ...FONTS.arial_rounded,
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(21),
    marginTop: 2,
  },
  date: {
    ...FONTS.arial_rounded_bold,
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(21),
  },
  social_icon: {
    width: moderateScale(24),
    height: moderateScale(24),
  },

  social_text: {
    ...FONTS.arial_rounded_bold,
    marginVertical: moderateScale(3),
    color: COLORS.secondary,
    fontSize: moderateScale(15),
  },
});

export default VideoCard;
