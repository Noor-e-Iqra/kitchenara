import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const ColumnText = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default ColumnText;
