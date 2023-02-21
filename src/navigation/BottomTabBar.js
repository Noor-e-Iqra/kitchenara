import React, {memo, useRef, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Platform, StyleSheet} from 'react-native';

//screens
import {Orders} from '../screens/Orders';
// route names
import routes from './routes';
// theme
import {COLORS} from '../theme';
// icons
import icons from '../assets/icons';
import {Home, Cards, ViewMenu, Profile, Explore } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const screenOptions = route => ({
    backBehavior: 'history',
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.dark_gray,
    justifyContent: 'center',
    alignItems: 'center',
    tabBarLabelStyle:{marginBottom:8},
    tabBarStyle: {
      height:Platform.OS=='android'?60: 90,
      paddingTop:10,
      backgroundColor: COLORS.black,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 0,
      shadowColor: 'rgb(5, 7, 22)',
      shadowOffset: {
        width: 0,
        height: -8,
      },
      shadowOpacity: 0.07,
      shadowRadius: 19,
      elevation: 5,
      paddingHorizontal: 5,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      position:'absolute'
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions} backBehavior="history">
      <Tab.Screen
        name={routes.home.index}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.home}
                style={[
                  styles.icon,
                  {tintColor: focused ? COLORS.primary : COLORS.gray},
                ]}
              />
            );
          },
          title: 'Home',
        }}
      />

      <Tab.Screen
        name={routes.explore.index}
        component={Explore}
        options={{
          tabBarIcon({focused}) {
            return (
              <Image
                source={icons.search}
                style={[
                  styles.icon,
                  {tintColor: focused ? COLORS.primary : COLORS.gray},
                ]}
              />
            );
          },
          title: 'Explore',
        }}
      />
      <Tab.Screen
        name={routes.post.index}
        component={Orders}
        options={route => ({
          tabBarIconStyle: {marginBottom: 26},
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.post}
                style={{height: 64}}
                resizeMode="contain"
              />
            );
          },
          title: '',
        })}
      />

      <Tab.Screen
        name={routes.orders.index}
        component={Orders}
        options={route => ({       
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.order}
                style={[
                  styles.icon,
                  {tintColor: focused ? COLORS.primary : COLORS.gray},
                ]}
              />
            );
          },
          title: 'Orders',
        })}
      />

      <Tab.Screen
        name={routes.profile.index}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.profile}
                style={[
                  styles.icon,
                  {tintColor: focused ? COLORS.primary : COLORS.gray},
                ]}
              />
            );
          },
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});
