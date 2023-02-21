import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import icons from '../../assets/icons';
import Container from '../../components/Container';
import CustomHeader from '../../components/Header';
import Heading from '../../components/Heading';
import {tabBarHeight} from '../../navigation/tabBarHeight';
import {COLORS, FONTS, SIZES} from '../../theme';
import HistoryOrder from './components/HistoryOrder';
import OngoingOrder from './components/OngoingOrder';
import {history, onging} from './DummyData';

export const Orders = ({navigation}) => {
  return (
    <Container>
      <View style={{marginBottom: tabBarHeight}}>
        <ScrollView>
          <Heading text={'Ongoing orders'} />
          <View style={{paddingHorizontal: SIZES.padding, paddingTop: 10}}>
            <FlatList
              data={onging}
              scrollEnabled={false}
              keyExtractor={(_, i) => i}
              renderItem={({item}) => <OngoingOrder item={item} />}
            />
            <Heading text={'Order history'} style={{marginTop: 20}} />
            <FlatList
              data={history}
              scrollEnabled={false}
              keyExtractor={(_, i) => i}
              renderItem={({item}) => <HistoryOrder item={item} />}
            />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
