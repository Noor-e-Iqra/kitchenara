import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../../../../components/Button';
import Heading from '../../../../components/Heading';
import {styles} from './styles';


const CustomFlatlist = ({heading, data, renderItem}) => {
  return (
    <View style={{paddingTop: 20}}>
      <Heading text={heading} style={styles.heading} />
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}      
        keyExtractor={(_, i) => i}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CustomFlatlist;
