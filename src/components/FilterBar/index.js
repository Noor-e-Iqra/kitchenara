import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {COLORS} from '../../theme';

const FilterBar = ({style}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.filter,style]}>
      <MaterialIcons name="filter-list" size={24} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default FilterBar;
