import React from 'react';
import {FlatList, View} from 'react-native';
import Container from '../../components/Container';
import FilterBar from '../../components/FilterBar';
import CustomHeader from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../theme';
import ViewMenu from './components/ViewMenu';
import {data, pizza, restaurants} from './DummyData';

export const SeeAll = ({navigation, route}) => {
  return (
    <Container>
      <View style={{marginHorizontal: SIZES.padding}}>
        <CustomHeader title={route?.params?.category} showArrow={true} />
        <FilterBar style={{position: 'absolute', right: 0, top: 5}} />
      </View>
      <FlatList
        data={route?.params?.category == 'Restaurants' ? restaurants : pizza}
        showsVerticalScrollIndicator={true}
        keyExtractor={(_, i) => i}
        renderItem={({item}) => <ViewMenu item={item} />}
        contentContainerStyle={{padding: SIZES.padding}}
      />
    </Container>
  );
};
