import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../theme';
// import { styles } from './styles';
import CustomButton from '../../components/Button';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import routes from '../../navigation/routes';
import { useNavigation } from '@react-navigation/native';
import BackButton from "../../components/BackButton";

const Signup = () => {

  const navigation = useNavigation()

  const [formData, setformData] = useState({
    email: '',
    password: '',
    phone: ''
  })

  return (
    <ImageBackground source={require('../../assets/images/background-auth-1.png')}
      style={{ flex: 1, width: '100%', backgroundColor: '#fff' }}>
      <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
        <ScrollView style={{ flex: 1, flexDirection: 'column' }}>

          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <BackButton />

            <Image source={require('../../assets/images/logo-1.png')}
              style={{ width: 221, height: 25.05, marginTop: 25, marginBottom: 40 }}>
            </Image>
          </View>
          {/* login form section */}
          <View style={{ flex: 2, flexDirection: 'column', paddingHorizontal: 21 }} >
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }} >
              <Text style={{ fontSize: 28, lineHeight: 30.8, color: COLORS.black }} >Create your account</Text>
            </View>
            <Text style={{ fontSize: 15, lineHeight: 16.5, paddingTop: 8, color: COLORS.primary }} >Join Kitchenara and take your food experience to the next level!</Text>

            <View style={{ flexDirection: 'column', paddingTop: 20 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 10, height: 60, paddingLeft: 20, backgroundColor: COLORS.input_bg }} >
                <Text>
                  <FontAwesome5 name={'envelope'} style={styles.input_icon} />
                </Text>
                <TextInput onChangeText={(text) => { setformData((prevState) => ({ ...prevState, email: text })) }} style={styles.input} placeholder="Email" placeholderTextColor="#818181" />

              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 10, height: 60, paddingLeft: 20, marginTop: 20, backgroundColor: COLORS.input_bg }} >
                <Text>
                  <FontAwesome5 name={'lock'} style={styles.input_icon} />
                </Text>
                <TextInput onChangeText={(text) => { setformData((prevState) => ({ ...prevState, password: text })) }} style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor="#818181" />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 10, height: 60, paddingLeft: 20, marginTop: 20, backgroundColor: COLORS.input_bg }} >
                <Text>
                  <FontAwesome5 name={'phone'} style={styles.input_icon} />
                </Text>
                <TextInput onChangeText={(text) => { setformData((prevState) => ({ ...prevState, phone: text })) }} style={styles.input} placeholder="Phone number" placeholderTextColor="#818181" />
              </View>

              <View
                style={{ marginTop: 50 }}>
                <CustomButton
                  text={'Send'}
                  onPress={() => navigation.navigate(routes.auth.verifyPhone)}
                  large={true}
                />

              </View>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export { Signup }

const styles = StyleSheet.create({
  input: {
    position: 'relative',
    height: '100%',
    width: '100%',
    paddingLeft: 20,
    backgroundColor: COLORS.input_bg
  },
  input_icon: {
    color: '#818181'
  },
  social_btn: {
    height: 60,
    width: 87,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  social_img: {
    width: 24,
    height: 24,
  },
  icon_2: {
    position: 'absolute',
    left: 20.08,
    top: 25.42,
    width: 15.81,
    height: 19.25,
  }
})