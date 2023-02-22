import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../../../utils/metrices';
import {FONTS} from '../../../theme';

const ShareModal = ({shareRef}) => {
  return (
    <View style={{...styles.container}}>
      <View style={{...styles.headercontainer}}>
        <TouchableOpacity style={{...styles.crossbtnstyle}} onPress={()=>shareRef?.current?.hide()}>
          <Image
            style={{width: moderateScale(12.38), height: moderateScale(12.38)}}
            source={require('../../../assets/icons/iconfolder/crossicon.png')}
          />
        </TouchableOpacity>
        <Text style={{...styles.headertitlestyle}}>Share to</Text>
        <View style={{width: 29}} />
      </View>
      <View style={{marginTop: 21, flexDirection: 'row'}}>
        <SocialLinkButton
          title="Copy link"
          icon={require('../../../assets/icons/iconfolder/linkicon.png')}
          iconstyle={{width: 19.49, height: 19.5}}
          btncolor={{backgroundColor: 'rgba(93, 198, 242, 1)'}}
        />
        <SocialLinkButton
          title="Whatsapp"
          icon={require('../../../assets/icons/iconfolder/whatsappicon.png')}
          iconstyle={{width: 19.84, height: 19.84}}
          btncolor={{backgroundColor: 'rgba(34, 187, 155, 1)'}}
        />
        <SocialLinkButton
          title="Snapchat"
          icon={require('../../../assets/icons/iconfolder/snapchaticon.png')}
          iconstyle={{width: 18, height: 18}}
          btncolor={{backgroundColor: 'rgba(243, 217, 74, 1)'}}
        />
        <SocialLinkButton
          title="Pinterest"
          icon={require('../../../assets/icons/iconfolder/pinteresticon.png')}
          iconstyle={{width: 14, height: 18}}
          btncolor={{backgroundColor: 'rgba(229, 56, 78, 1)'}}
        />
        <SocialLinkButton
          title="More"
          icon={require('../../../assets/icons/iconfolder/plusicon.png')}
          iconstyle={{width: 16, height: 16}}
          btncolor={{backgroundColor: 'rgba(217, 217, 217, 1)'}}
        />
      </View>
    </View>
  );
};

const SocialLinkButton = ({icon, title, iconstyle, btncolor}) => {
  return (
    <View style={{...styles.socialLinkcontainer}}>
      <TouchableOpacity style={{...styles.sociallinkiconwrapper, ...btncolor}}>
        <Image
          style={{width: 18, height: 18, ...iconstyle}}
          source={icon || null}
        />
      </TouchableOpacity>
      <Text style={{...styles.socilalinktextstyle}}>{title}</Text>
    </View>
  );
};

export default ShareModal;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 9,
    marginBottom: 36,
  },
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  crossbtnstyle: {
    width: 29,
    alignItems: 'flex-end',
  },
  headertitlestyle: {
    ...FONTS.arial_rounded_bold,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
  },
  socialLinkcontainer: {
    width: 69,
    alignItems: 'center',
  },
  sociallinkiconwrapper: {
    width: 51,
    height: 51,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(217, 217, 217, 1)',
  },
  socilalinktextstyle: {
    ...FONTS.urbanist_regular,
    fontSize: 12,
    marginTop: 6,
    color: 'rgba(137, 137, 137, 1)',
  },
});
