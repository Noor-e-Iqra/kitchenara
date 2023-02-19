import React from 'react';
import {Image, Text} from 'react-native';
import OutilneContainer from '../../../../components/OutilneContainer';
import {styles} from './styles';

const Partner = ({item}) => {
  return (
    <OutilneContainer style={styles.container}>
      <Image source={item.image} style={{height: 60, width: 60}} />
      <Text style={styles.name}>{item.name}</Text>
    </OutilneContainer>
  );
};

export default Partner;
