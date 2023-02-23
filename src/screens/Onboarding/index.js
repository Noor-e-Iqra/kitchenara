import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Easing} from 'react-native-reanimated';
import CustomButton from '../../components/Button';
import routes from '../../navigation/routes';
import {COLORS, SIZES} from '../../theme';
import Pagination from './components/Pagination';
import Onboarding_SlideItem from './components/SlideItem';

export const Onboarding = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [x, setX] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollAnimation = useRef(new Animated.Value(0));
  const scrollRef = useRef();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!x) {
  //       scrollRef?.current?.scrollTo({x: 1000, animated: true});
  //       setX(1000);
  //     } else {
  //       scrollRef?.current?.scrollTo({x: 0, animated: true});
  //       setX(0);
  //     }
  //   }, 1000);
  //   return () => interval;
  // }, [x]);

  useEffect(() => {
    scrollAnimation.current.addListener(animation => {
      scrollRef.current.scrollTo({
        x: animation.value,
        animated: false,
      });
    });

    setTimeout(() => {
      if (!x) {
        Animated.timing(scrollAnimation.current, {
          toValue: 395,
          duration: 3000,
          useNativeDriver: true,
        }).start(() => setX(1000));
      } else {
        Animated.timing(scrollAnimation.current, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }).start(() => setX(0));
      }
    }, 1000);

    return () => scrollAnimation.current.removeAllListeners();
  }, [x]);

  const Slides = [
    {
      id: 1,
      heading: 'A whole new food\nordering\nexperience',
      subheading: '',
      button: false,
      color: 'yellow',
    },
    {
      id: 2,
      heading: 'The best restaurant and creators brought together',
      subheading: '',
      button: false,
      color: 'blue',
    },
    {
      id: 3,
      heading: 'Discover . Order.\nCreate',
      subheading: 'With kitchenara the FUTURE is Now!',
      button: true,
      color: 'red',
    },
  ];

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log({viewableItems});
    // console.log(viewableItems[0].index)
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisibilePercentThreshold: 50,
  }).current;

  return (
    <View style={{flex: 1, backgroundColor: COLORS.secondary}}>
      <Animated.ScrollView
        horizontal={true}
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}>
        <Image
          resizeMode="cover"
          source={require('../../assets/images/onboarding-1.png')}
          style={{
            height: SIZES.height,
            width: SIZES.width,
            backgroundColor: '#fff',
          }}
        />
        <Image
          resizeMode="cover"
          source={require('../../assets/images/onboarding-2.png')}
          style={{
            height: SIZES.height,
            width: SIZES.width,
            backgroundColor: '#fff',
          }}
        />
      </Animated.ScrollView>
      <ImageBackground
        source={require('../../assets/images/gradient-1.png')}
        style={{
          flex: 1,
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <FlatList
          style={{flex: 1}}
          data={Slides}
          renderItem={({item}) => <Onboarding_SlideItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig.current}
        />
        {index == 2 ? (
          ''
        ) : (
          <Pagination data={Slides} scrollX={scrollX} index={index} />
        )}
      </ImageBackground>

      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({});
