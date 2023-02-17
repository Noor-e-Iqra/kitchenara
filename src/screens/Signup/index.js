import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../..//theme';
import CustomButton from '../../components/Button';
import routes from '../../navigation/routes';

export const Signup = ({navigation}) => {
  const [formData, setformData] = useState({
    email: '',
    password: '',
    phone: '',
  });

  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#fff', flexDirection: 'column'}}>
      <ScrollView
        style={{flex: 1, backgroundColor: '#fff', flexDirection: 'column'}}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/images/logo-1.png')}
            style={{
              width: 221,
              height: 25.05,
              marginTop: 25,
              marginBottom: 40,
            }}></Image>
        </View>
        {/* login form section */}
        <View style={{flex: 2, flexDirection: 'column', paddingHorizontal: 21}}>
          <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 28, lineHeight: 30.8, color: COLORS.black}}>
              Create your account
            </Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 16.5,
              paddingTop: 8,
              color: COLORS.primary,
            }}>
            Join Kitchenara and take your food experience to the next level!
          </Text>

          <View style={{flexDirection: 'column', paddingTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                borderRadius: 10,
                height: 60,
                paddingLeft: 20,
              }}>
              <Text>
                <FontAwesome5 name={'envelope'} style={styles.input_icon} />
              </Text>
              <TextInput
                onChangeText={text => {
                  setformData(prevState => ({...prevState, email: text}));
                }}
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#818181"
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                borderRadius: 10,
                height: 60,
                paddingLeft: 20,
                marginTop: 20,
              }}>
              <Text>
                <FontAwesome5 name={'lock'} style={styles.input_icon} />
              </Text>
              <TextInput
                onChangeText={text => {
                  setformData(prevState => ({...prevState, password: text}));
                }}
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#818181"
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                borderRadius: 10,
                height: 60,
                paddingLeft: 20,
                marginTop: 20,
              }}>
              <Text>
                <FontAwesome5 name={'phone'} style={styles.input_icon} />
              </Text>
              <TextInput
                onChangeText={text => {
                  setformData(prevState => ({...prevState, phone: text}));
                }}
                style={styles.input}
                placeholder="Phone number"
                placeholderTextColor="#818181"
              />
            </View>

            <View style={{marginTop: 50}}>
              <CustomButton
                text={'Send'}
                onPress={() => navigation.navigate(routes.dasboard)}
                large={true}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    position: 'relative',
    height: '100%',
    width: '100%',
    paddingLeft: 20,
    backgroundColor: COLORS.light_gray_bg,
  },
  input_icon: {
    color: '#818181',
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
});
