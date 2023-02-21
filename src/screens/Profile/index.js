import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';
import icons from '../../assets/icons';
import images from '../../assets/images';
import Container from '../../components/Container';
import {COLORS, FONTS, SIZES} from '../../theme';
import {about, partners, pizza, Videos} from './DummyData';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/Button';
import {styles} from './styles';
import routes from '../../navigation/routes';
import ColumnText from './components/ColumnText';
import Video from './components/Video';
import Partner from './components/Partner';
import About from './components/About';
import BackButton from '../../components/BackButton';
import CustomHeader from '../../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ApplyForCreator from './components/ApplyForCreator';
import { tabBarHeight } from '../../navigation/tabBarHeight';

const Header = ({navigation, route, creator}) => {
  return (
    <View
      style={{
        padding: SIZES.padding,
        paddingTop: route?.params?.visit && creator ? 0 : undefined,
      }}>
      {route?.params?.visit && creator && (
        <View style={[styles.row, {marginBottom: 20}]}>
          <CustomHeader showArrow={true} />
          <Text style={[styles.name, {marginLeft: 50}]}>@johnnyeats</Text>
        </View>
      )}
      <View style={styles.row}>
        <Image
          source={require('../../assets/images/dp.png')}
          resizeMode="cover"
          style={{height: 90, width: 90, borderRadius: 90}}
        />
        <View style={{marginLeft: 10, flex: 1}}>
          <Text style={styles.name}>JohnDoe</Text>
          {/* if person is a creator */}
          {creator && (
            <>
              <Text style={styles.country}>Berlin, Germany</Text>
              <Text style={styles.desc}>
                Part-time chef, part-time photographer Cooking my way through
                life’s tribulations
              </Text>
            </>
          )}
        </View>
      </View>
      <View
        style={{
          ...styles.row,
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <ColumnText value={creator ? '1.63K' : '0'} label="Followers" />
        <View style={styles.divider} />
        <ColumnText value={creator ? '340' : '0'} label="Following" />
        <View style={styles.divider} />
        <ColumnText value={creator ? '490' : '0'} label="Videos" />
      </View>
      <View style={{...styles.row, justifyContent: 'space-between'}}>
        <CustomButton
          text={
            route?.params?.visit && creator
              ? 'Follow'
              : 'Professional Dashboard'
          }
          large={true}
          icon={
            route?.params?.visit && (
              <MaterialCommunityIcons
                name="plus"
                size={20}
                color={COLORS.secondary}
                style={{marginRight: 5}}
              />
            )
          }
          btnStyle={{
            height: 35,
            width: '70%',
            borderRadius: 100,
            marginTop: 0,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        />
        <TouchableOpacity activeOpacity={0.6} style={styles.icon_outlined}>
          <Image
            source={icons.message_activity}
            style={{height: 20, width: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.icon_outlined}>
          <Image
            source={icons.share}
            style={{height: 20, width: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Profile = ({navigation, route}) => {
  const [creator, setCreator] = useState(false);
  return (
    <Container>
        <Tabs.Container
          renderHeader={() => (
            <Header route={route} navigation={navigation} creator={creator} />
          )}
          renderTabBar={props => (
            <MaterialTabBar
              {...props}
              activeColor={COLORS.primary}
              indicatorStyle={styles.indicator}
              labelStyle={styles.labelStyle}
            />
          )}>
          {/* posts */}
          <Tabs.Tab name="Posts">
            {creator ? (
              <Tabs.FlatList
                data={Videos}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatlist}
                renderItem={({item}) => <Video item={item} />}
              />
            ) : (
              <Tabs.ScrollView>
                <ApplyForCreator
                  category={'videos'}
                  onPress={() => setCreator(true)}
                />
              </Tabs.ScrollView>
            )}
          </Tabs.Tab>
          {/* partners */}
          <Tabs.Tab name="Partners">
            {creator ? (
              <Tabs.FlatList
                data={partners}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatlist}
                renderItem={({item}) => <Partner item={item} />}
              />
            ) : (
              <Tabs.ScrollView>
                <ApplyForCreator
                  category={'partners'}
                  onPress={() => setCreator(true)}
                />
              </Tabs.ScrollView>
            )}
          </Tabs.Tab>
          {/* about */}
          <Tabs.Tab name="About">
            {creator ? (
              <Tabs.ScrollView>
                <About item={about} />
              </Tabs.ScrollView>
            ) : (
              <Tabs.ScrollView>
                <ApplyForCreator onPress={() => setCreator(true)} />
              </Tabs.ScrollView>
            )}
          </Tabs.Tab>
        </Tabs.Container>
   
    </Container>
  );
};
