import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS, FONTS, SIZES } from '../../theme';
// import { styles } from './styles';
import CustomButton from '../../components/Button';
import routes from '../../navigation/routes';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation()

  const [formData, setformData] = useState({
    email: '',
    password: ''
  })

  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ImageBackground source={require('../../assets/images/background-auth-1.png')}
      style={{ flex: 1, width: '100%', backgroundColor: '#fff' }}>
      <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>

        <ScrollView style={{ flex: 1, flexDirection: 'column' }}>

          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/images/logo-1.png')}
              style={{ width: 221, height: 25.05, marginTop: 25, marginBottom: 40 }}>
            </Image>
          </View>
          {/* login form section */}
          <View style={{ flex: 2, flexDirection: 'column', paddingHorizontal: 21 }} >
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }} >
              <Text style={{ fontSize: 28, lineHeight: 30.8, color: COLORS.black }} >Login your account</Text>
            </View>
            <Text style={{ fontSize: 15, lineHeight: 16.5, paddingTop: 8, color: COLORS.primary }} >Access your account and take your food experience to the next level!</Text>

            <View style={{ flexDirection: 'column', paddingTop: 20 }} >
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

              <View style={{ width: '100%', flex: 1, flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 10 }} >
                <CheckBox
                  disabled={false}
                  value={rememberMe}
                  boxType={'square'}
                  lineWidth={2}
                  onAnimationType={'bounce'}
                  offAnimationType={'bounce'}
                  animationDuration={0.2}
                  onValueChange={(newValue) => setRememberMe(newValue)}
                  style={{
                    height: 24,
                    width: 24,
                  }}
                />
                <Text style={{
                  fontSize: 17,
                  color: COLORS.black, alignSelf: 'flex-start', paddingVertical: 10
                }} >Remember me</Text>
              </View>

              <CustomButton
                text={'Login'}
                onPress={() => navigation.navigate(routes.profile.cards)}
                large={true}
              />

            </View>
          </View>

          {/* social login section */}
          <View style={{ flex: 2, flexDirection: 'column', paddingHorizontal: '3%' }} >
            <View style={{ width: '100%', marginBottom: 10, flex: 1, flexDirection: 'row' }} >
              <View
                style={{
                  backgroundColor: COLORS.lineAround,
                  height: 1,
                  flex: 1,
                  alignSelf: "center",
                }}
              />
              <Text style={{
                fontSize: 18, lineHeight: 25.2,
                color: COLORS.black, alignSelf: 'flex-start', paddingVertical: 30, paddingHorizontal: 16
              }} >or continue with</Text>
              <View
                style={{
                  backgroundColor: COLORS.lineAround,
                  height: 1,
                  flex: 1,
                  alignSelf: "center",
                }}
              />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', gap: 20 }} >
              <TouchableOpacity onPress={() => console.log("facebook login")} style={styles.social_btn} >
                <Image style={styles.social_img} source={require('../../assets/images/icon_facebook-1.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => console.log("apple login")} style={styles.social_btn} >
                <Image style={styles.social_img} source={require('../../assets/images/icon_apple-1.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => console.log("google login")} style={styles.social_btn} >
                <Image style={styles.social_img} source={require('../../assets/images/icon_google-1.png')} />
              </TouchableOpacity>

            </View>

            <View style={{ flex: 1, marginTop: 100, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginBottom: 40 }} >
              <Text style={{ fontSize: 14, lineHeight: 19.6, color: '#818181' }} >Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate(routes.auth.signUp)} >
                <Text style={{ fontSize: 14, lineHeight: 19.6, color: COLORS.primary }} >Sign up</Text></TouchableOpacity>
            </View>

          </View>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export { Login }

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
  }
})