import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {COLORS, FONTS, SIZES} from '../../theme';
import data_home from '../../data/data_home';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import CustomButton from '../../components/Button';

export const Home = () => {
  const navigation = useNavigation();

  const home_array = [1, 2, 3, 4, 5, 6];

  const [homeArray, setHomeArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setHomeArray(data_home);
      // console.log(homeArray);
    }
    fetchData();
  }, []);

  const home_renderItem = ({item, index}) => {
    // console.log(item.background)

    return (
      <View style={[{flex: 1,height:Dimensions.get('window').height}]}>
        <ImageBackground
          source={item.background}
          style={{flex: 1, width: '100%', backgroundColor: '#fff'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 125,
              paddingHorizontal: 12,
            }}>
            <View style={{alignSelf: 'flex-end'}}>
              <View style={styles.container}>
                <TouchableOpacity>
                  <Image
                    source={item.profile.image}
                    style={{height: 68, width: 68}}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
                <View
                  style={{
                    color: COLORS.secondary,
                    alignSelf: 'flex-start',
                    marginHorizontal: 10,
                    width: 120,
                    flexDirection: 'column',
                    gap: 4,
                  }}>
                  <Text style={styles.profile_username} numberOfLines={1}>
                    {item.profile.username}
                  </Text>
                  <Text style={styles.profile_profession} numberOfLines={1}>
                    {item.profile.profession}
                  </Text>
                  <Text style={styles.item_posted} numberOfLines={1}>
                    Posted {item.posted}
                  </Text>
                </View>
                <CustomButton
                  text={'Follow'}
                  onPress={() => false}
                  small={true}
                />
              </View>
            </View>
            <View style={{alignSelf: 'flex-end', alignItems: 'flex-end'}}>
              <View
                style={{
                  maxWidth: 100,
                  gap: 5,
                }}>
                <TouchableOpacity style={{alignItems: 'center'}}>
                  <Image
                    style={styles.social_icon}
                    source={require('../../assets/icons/Heart.png')}
                  />
                  <Text style={styles.social_text}>{item.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center'}}>
                  <Image
                    style={styles.social_icon}
                    source={require('../../assets/icons/shopping-cart.png')}
                  />
                  <Text style={styles.social_text}>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center'}}>
                  <Image
                    style={styles.social_icon}
                    source={require('../../assets/icons/comment-dots.png')}
                  />
                  <Text style={styles.social_text}>{item.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center'}}>
                  <Image
                    style={styles.social_icon}
                    source={require('../../assets/icons/send.png')}
                  />
                  <Text style={styles.social_text}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center'}}>
                  <Image
                    style={styles.social_icon}
                    source={require('../../assets/icons/more-horizontal-circle.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <FlatList data={homeArray} renderItem={home_renderItem} />
    // </SafeAreaView>
  );
};
