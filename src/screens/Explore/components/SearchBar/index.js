import React, {useState} from 'react';
import {Image, TextInput, View} from 'react-native';
import icons from '../../../../assets/icons';
import {styles} from './styles';
import FilterBar from '../../../../components/FilterBar';
import {COLORS} from '../../../../theme';

const SearchBar = ({search, setSearch}) => {
  const [borderColor, setBorderColor] = useState(COLORS.input_bg);
  return (
    <View style={styles.container}>
      <View style={[styles.search_con, {borderColor: borderColor}]}>
        <TextInput
          placeholder="Search"
          style={styles.search_input}
          onFocus={() => setBorderColor(COLORS.primary)}
          onBlur={() => setBorderColor(COLORS.input_bg)}
          onChangeText={e => setSearch(e)}
          value={search}
        />
        <Image
          source={icons.search}
          style={{height: 20, width: 20}}
          resizeMode="contain"
        />
      </View>
      <FilterBar />
    </View>
  );
};

export default SearchBar;
