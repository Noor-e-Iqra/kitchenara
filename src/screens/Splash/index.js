import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {COLORS} from '../../theme';
import routes from '../../navigation/routes';

export const Splash = ({navigation, route}) => {
  const [bg, setBg] = useState(COLORS.yellow);

  useEffect(() => {
    setTimeout(() => {
      setBg('#F81848');
    }, 3300);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bg,
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor={bg} />
      <Lottie
        source={require('../../assets/lottie/Logo-animation.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.replace(routes.auth.onboarding)}
      />
    </View>
  );
};
