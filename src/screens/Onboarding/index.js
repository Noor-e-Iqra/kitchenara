import React, { useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CustomButton from '../../components/Button';
import routes from '../../navigation/routes';
import { COLORS } from '../../theme';
import Pagination from './components/Pagination';
import Onboarding_SlideItem from './components/SlideItem';

export const Onboarding = ({ navigation }) => {

  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

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
  ]

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          }
        }
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  }

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    // console.log({viewableItems});
    // console.log(viewableItems[0].index)
    setIndex(viewableItems[0].index)
  }).current;

  const viewabilityConfig = useRef({
    itemVisibilePercentThreshold: 50,
  }).current;

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <ImageBackground
        source={require('../../assets/images/onboarding-last.png')}
        style={{ flex: 1, width: '100%', backgroundColor: '#fff' }}>
        <ImageBackground
          source={require('../../assets/images/gradient-1.png')}
          style={{ flex: 1, width: '100%' }}>
          <FlatList style={{ flex: 1 }}
            data={Slides}
            renderItem={({ item }) => <Onboarding_SlideItem item={item} />}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
            onViewableItemsChanged={handleOnViewableItemsChanged}
            viewabilityConfig={viewabilityConfig.current}
          />
          {(index == 2) ?
            ''
            :
            <Pagination data={Slides} scrollX={scrollX} index={index} />
          }
        </ImageBackground>
      </ImageBackground>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({

})