import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {COLORS, FONTS} from '../../theme';
import {styles} from './styles';

const LabelInput = ({
  label,
  placeholder,
  inputStyle,
  form,
  id,
  containerStyle,
  ...rest
}) => {
  
  const handleChange = text => {
    form.setFieldTouched(id, true);
    form.setFieldValue(id, text);
  };

  const haserror = form.touched[id] && form.errors[id];

  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        id={id}
        value={form.values[id]}
        onBlur={() => form.setFieldTouched(id, true)}
        onChangeText={handleChange}
        placeholder={placeholder}
        style={[
          styles.inputStyle,
          inputStyle,
          {borderColor: haserror ? 'red' : COLORS.light_gray},
        ]}
        keyboardType="decimal-pad"
        {...rest}
      />
      {haserror && (
        <Text
          style={{
            ...FONTS.source_sans_pro_semiBold,
            fontSize: 12,
            color: 'red',
            marginLeft:10
          }}>
          {form.errors[id]}
        </Text>
      )}
    </View>
  );
};

export default LabelInput;
