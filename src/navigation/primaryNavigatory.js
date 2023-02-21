import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import routes from './routes';
import BottomTabBar from './BottomTabBar';
import {Tracking, Cards, Onboarding, Login, Signup, ViewMenu, OrderDetails, Location, Verify_Phone, SeeAll} from '../screens';
import RNBootSplash from 'react-native-bootsplash';

const Stack = createStackNavigator();

export const PrimaryNavigatory = () => {
  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({fade: true})}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}>
        {/* authentication screens */}
        <Stack.Screen name={routes.auth.onboarding} component={Onboarding} />
        <Stack.Screen name={routes.auth.login} component={Login} />
        <Stack.Screen name={routes.auth.signUp} component={Signup} />
        <Stack.Screen name={routes.auth.verifyPhone} component={Verify_Phone} />
        <Stack.Screen name={routes.dasboard} component={BottomTabBar} />
        {/* order screens */}
        <Stack.Screen name={routes.orders.tracking} component={Tracking} />
        <Stack.Screen name={routes.orders.details} component={OrderDetails} />
        <Stack.Screen name={routes.orders.myLocation} component={Location} />
        {/* profile screens */}
        <Stack.Screen name={routes.profile.cards} component={Cards} />
        {/* explore screens */}
        <Stack.Screen name={routes.explore.viewMenu} component={ViewMenu} />
        <Stack.Screen name={routes.explore.seeAll} component={SeeAll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
