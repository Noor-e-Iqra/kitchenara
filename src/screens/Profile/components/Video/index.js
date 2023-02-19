import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import icons from '../../../../assets/icons';
import {styles} from './styles';

const Video = ({item}) => {
  return (
    <ImageBackground
      source={item.image}
      style={styles.container}
      imageStyle={{borderRadius: 5}}>
      <Image source={icons.play} style={{height: 38, width: 38}} />
    </ImageBackground>
  );
};

export default Video;
