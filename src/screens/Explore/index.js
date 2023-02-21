import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Container from '../../components/Container';
import {COLORS, FONTS, SIZES} from '../../theme';
import {mind, popularMenu, restaurants} from './DummyData';
import SearchBar from './components/SearchBar';
import CustomFlatlist from './components/CustomFlatlist';
import Item from './components/Item';
import routes from '../../navigation/routes';
import SearchContent from './components/SearchContent';
import {tabBarHeight} from '../../navigation/tabBarHeight';

export const Explore = ({navigation}) => {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <View style={{marginBottom: tabBarHeight}}>
        <SearchBar search={search} setSearch={setSearch} />
        {Boolean(search.length) ? (
          <SearchContent search={search} />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingHorizontal: SIZES.padding, paddingBottom: 20}}>
              <CustomFlatlist
                heading={'Popular Menu'}
                data={popularMenu}
                renderItem={({item, index}) => (
                  <Item
                    index={index}
                    item={item}
                    onPress={() => navigation.navigate(routes.explore.viewMenu)}
                  />
                )}
              />
              <CustomFlatlist
                heading={'What’s on your mind?'}
                data={mind}
                renderItem={({item, index}) => (
                  <Item
                    index={index}
                    item={item}
                    onPress={() =>
                      navigation.navigate(routes.explore.seeAll, {
                        category: item.name,
                      })
                    }
                  />
                )}
              />
              <View>
                <CustomFlatlist
                  heading={'Restaurants'}
                  data={restaurants}
                  renderItem={({item, index}) => (
                    <Item
                      index={index}
                      item={item}
                      onPress={() =>
                        navigation.navigate(routes.explore.viewMenu)
                      }
                    />
                  )}
                />
                <Text
                  style={{
                    ...FONTS.source_sans_pro_semiBold,
                    fontSize: 14,
                    color: COLORS.primary,
                    position: 'absolute',
                    top: 30,
                    right: 0,
                  }}
                  onPress={() =>
                    navigation.navigate(routes.explore.seeAll, {
                      category: 'Restaurants',
                    })
                  }>
                  See all
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </Container>
  );
};
