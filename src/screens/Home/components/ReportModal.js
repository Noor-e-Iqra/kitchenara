import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../../theme';

const ReportModal = () => {
  return (
    <View style={{...styles.container}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{...styles.iconwrapper}}>
          <Image
            style={{width: 21.94, height: 21.94}}
            source={require('../../../assets/icons/iconfolder/reporticon.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={{...styles.reporttextstyle}}>Report...</Text>
      </View>
      <ReportCustomComponent
        icon={require('../../../assets/icons/iconfolder/repotcrossicon.png')}
        iconstyle={{width: 20, height: 20}}
        title="Not Interested"
      />
      <ReportCustomComponent
        icon={require('../../../assets/icons/iconfolder/saveicon.png')}
        iconstyle={{width: 16.39, height: 20.85}}
        title="Save"
      />
      <ReportCustomComponent
        icon={require('../../../assets/icons/iconfolder/editicon.png')}
        iconstyle={{width: 20.3, height: 20.3}}
        title="Remix this Shorts"
      />
    </View>
  );
};

const ReportCustomComponent = ({icon, iconstyle, title}) => {
  return (
    <View style={{marginTop: 28, flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width: 42}}>
        <Image
          style={{width: 20, height: 20, ...iconstyle}}
          source={icon || null}
          resizeMode="contain"
        />
      </View>
      <Text style={{...styles.reporttitlestyle}}>{title}</Text>
    </View>
  );
};

export default ReportModal;

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginLeft: 24,
    marginRight: 22,
    marginBottom: 40,
  },
  iconwrapper: {
    width: 21.94,
    height: 21.94,
    borderRadius: 100,
    // backgroundColor: 'rgba(247, 85, 85, 1)',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reporttextstyle: {
    ...FONTS.urbanist_semiBold,
    fontSize: 16,
    color: 'rgba(247, 85, 85, 1)',
    marginLeft: 21,
  },
  reporttitlestyle: {
    ...FONTS.urbanist_semiBold,
    fontSize: 16,
    color: 'rgba(66, 66, 66, 1)',
  },
});
