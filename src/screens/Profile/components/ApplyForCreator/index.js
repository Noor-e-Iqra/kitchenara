import React from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../../../components/Button';
import {styles} from './styles';

const ApplyForCreator = ({category, onPress}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', margin: 20}}>
      {Boolean(category) && (
        <Text style={styles.text}>
          You have no {category}! Join the kitchenara club and earn while you
          create
        </Text>
      )}
      <CustomButton
        text={'Apply to be a creator'}
        onPress={onPress}
        large={true}
        btnStyle={{width: '80%'}}
      />
    </View>
  );
};

export default ApplyForCreator;
