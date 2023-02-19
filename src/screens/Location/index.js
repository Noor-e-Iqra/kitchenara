import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/Button';
import {COLORS, FONTS, SIZES} from '../../theme';
import {styles} from './styles';

export const Location = ({navigation}) => {
  const [location, setLocation] = useState('Riyadh, Saudi Arabia');
  return (
    <View style={StyleSheet.absoluteFillObject}>
    <MapView
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      style={StyleSheet.absoluteFillObject}
      mapType="standard"
      initialRegion={{
        latitude: 24.713552,
        longitude: 46.675297,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker coordinate={{latitude: 24.713552, longitude: 46.675297}}/>
      </MapView>
      {/* location input */}
      <View style={styles.location_input}>
        <MaterialIcons name="location-on" size={25} color={COLORS.primary} />
        <TextInput
          placeholder="Location"
          value={location}
          onChangeText={e => setLocation(e)}
          style={{
            marginLeft: 10,
            flex: 1,
            ...FONTS.urbanist_bold,
            fontSize: 16,
          }}
        />
      </View>
      {/* user location button */}
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.location_btn}
        onPress={() => {}}>
        <MaterialIcons name="my-location" size={25} />
      </TouchableOpacity>
      {/* confirm button */}
      <CustomButton
        text={'Confirm location'}
        btnStyle={{
          position: 'absolute',
          bottom: SIZES.padding,
          left: SIZES.padding,
          right: SIZES.padding,
        }}
        large={true}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
