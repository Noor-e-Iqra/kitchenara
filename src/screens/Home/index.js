import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme';
import data_home from '../../data/data_home';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import CustomButton from '../../components/Button';
// import VideoCard from './components/VideoCard';
import SwiperFlatList from 'react-native-swiper-flatlist';
import ReportModal from './components/ReportModal';
import ActionSheet from 'react-native-actions-sheet';
import ShopModal from './components/ShopModal';
import ComentsModal from './components/ComentsModal';
import ShareModal from './components/ShareModal';
import VideoCard from './components/VideoCard';

export const Home = () => {
  const reportRef = useRef(null);
  const commentRef = useRef(null);
  const shareRef = useRef(null);
  const shopRef = useRef(null);
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <SwiperFlatList
        vertical
        data={[data_home[0]]}
        pagingEnabled
        initialNumToRender={3}
        keyExtractor={(item, index) => index + ''}
        renderItem={({item, index}) => (
          <VideoCard
            data={item}
            onReport={() => {
              reportRef.current?.show();
            }}
            onComment={() => {
              commentRef.current?.show();
            }}
            onShop={() => {
              shopRef.current?.show();
            }}
            onShare={() => {
              shareRef.current?.show();
            }}
          />
        )}
      />
      {/* <VideoCard /> */}
      <ActionSheet
        ref={reportRef}
        containerStyle={{
          borderTopLeftRadius: 37,
          borderTopRightRadius: 37,
        }}
        indicatorStyle={{
          width: 35,
          height: 2.8,
          marginTop: 7,
        }}
        gestureEnabled={true}>
        <ReportModal />
      </ActionSheet>
      <ActionSheet
        ref={shopRef}
        containerStyle={{
          borderTopLeftRadius: 39,
          borderTopRightRadius: 39,
        }}
        indicatorStyle={{
          width: 37,
          height: 2.98,
          backgroundColor: 'rgba(229, 56, 78, 1)',
          borderRadius: 100,
          marginTop: 5,
        }}
        gestureEnabled={true}>
        <ShopModal />
      </ActionSheet>
      <ActionSheet
        ref={commentRef} 
        gestureEnabled={true}   
        containerStyle={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
        >
        <ComentsModal />
      </ActionSheet>
      <ActionSheet
        ref={shareRef}
        containerStyle={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <ShareModal shareRef={shareRef}/>
      </ActionSheet>
    </View>
  );
};
