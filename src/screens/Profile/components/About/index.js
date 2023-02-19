import React from 'react';
import {Text, View} from 'react-native';
import HyperLink from '../HyperLink';
import IconText from '../IconTxt';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const About = ({item}) => {
  return (
    <View style={{margin: 20}}>
      <Text style={styles.desc}>
        {item.desc} <HyperLink text={item.email} />
      </Text>
      <View style={{marginTop: 20}}>
        <IconText
          text="www.ChefJohnnyDoe.com"
          onPress={() => {}}
          icon={
            <MaterialCommunityIcons
              name="web"
              size={20}
              style={{marginRight: 10}}
            />
          }
        />
        <IconText
          text="@ChefJohnnyDoe"
          onPress={() => {}}
          icon={
            <MaterialCommunityIcons
              name="twitter"
              size={20}
              style={{marginRight: 10}}
            />
          }
        />
        <IconText
          text="www.linked.com/johnnydoe"
          onPress={() => {}}
          icon={
            <FontAwesome name="linkedin" size={20} style={{marginRight: 10}} />
          }
        />
      </View>
    </View>
  );
};

export default About;
