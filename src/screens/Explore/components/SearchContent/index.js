import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {COLORS, FONTS, SIZES} from '../../../../theme';
import {searchResults} from '../../DummyData';
import SearchedItem from '../SearchedItem';

const SearchContent = ({search}) => {
  const categories = ['Restaurants', 'People', 'Tags'];
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <View style={{paddingHorizontal: SIZES.padding}}>
      <View style={{flexDirection: 'row', paddingTop: 10}}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.6}
            onPress={() => setSelectedCategory(item)}
            style={{
              ...styles.category_container,
              marginLeft: !index ? 0 : 5,
              backgroundColor:
                selectedCategory == item ? COLORS.primary : COLORS.secondary,
            }}>
            <Text
              style={{
                ...styles.category_txt,
                color:
                  selectedCategory == item ? COLORS.secondary : COLORS.primary,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.results}>Results for {search}..</Text>
      <FlatList
        data={
          selectedCategory
            ? searchResults.filter(a => a.category == selectedCategory)
            : searchResults
        }
        showsVerticalScrollIndicator={true}
        keyExtractor={(_, i) => i}
        renderItem={({item}) => <SearchedItem item={item} />}
      />
    </View>
  );
};

export default SearchContent;
