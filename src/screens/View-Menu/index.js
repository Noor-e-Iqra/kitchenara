import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';
import icons from '../../assets/icons';
import images from '../../assets/images';
import Container from '../../components/Container';
import {COLORS, FONTS, SIZES} from '../../theme';
import {pizza} from './DummyData';
import AddItem from './components/AddItem';
import OutlinedText from './components/OutlinedText';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/Button';
import {styles} from './styles';
import routes from '../../navigation/routes';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={{height: 360}}>
      <Image source={images.restauarant} style={{height: 284, width: '100%'}} />
      <TouchableOpacity
        pointerEvents="box-none"
        activeOpacity={0.6}
        onPress={() => navigation.goBack()}
        style={{position: 'absolute', top: 10, left: 10, padding: 5}}>
        <Image
          source={icons.arrow_back}
          style={{height: 24, width: 24, tintColor: COLORS.secondary}}
        />
      </TouchableOpacity>
      <View style={styles.outline_con}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={images.papa_jones}
            style={{height: 65, width: 65, borderRadius: 60}}
          />
          <View style={{marginLeft: 10, flex: 1}}>
            <Text style={styles.papa_jones}>Papa Johns</Text>
            <Text style={styles.pizza}>Pizza</Text>
            <Text style={styles.delivery}>9 SAR delivery . SAR 35 minimum</Text>
          </View>
        </View>
        <OutlinedText text={'Get 2 large pizzas for SAR 55'} />
        <OutlinedText text={'Use coupon “pizza” at checkout'} icon={true} />
      </View>
    </View>
  );
};

export const ViewMenu = ({navigation}) => {
  const [addToCart, setAddToCart] = useState([]);
  return (
    <Container>
      <Tabs.Container
        renderHeader={Header}
        renderTabBar={props => (
          <MaterialTabBar
            {...props}
            indicatorStyle={styles.indicator}
            scrollEnabled={true}
            labelStyle={styles.labelStyle}
          />
        )}>
        {/* appetizers */}
        <Tabs.Tab name="Appetizers">
          <Tabs.FlatList
            data={pizza}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <AddItem
                item={item}
                addToCart={addToCart}
                setAddToCart={setAddToCart}
              />
            )}
            ListFooterComponent={
              Boolean(addToCart.length) && (
                <CustomButton
                  text={
                    'Go to cart                                        SAR 24'
                  }
                  large={true}
                  onPress={() => navigation.navigate(routes.orders.details)}
                />
              )
            }
            contentContainerStyle={{margin: 20, marginBottom: 0}}
          />
        </Tabs.Tab>
        {/* pizza */}
        <Tabs.Tab name="Pizza">
          <Tabs.FlatList
            data={pizza}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <AddItem
                item={item}
                addToCart={addToCart}
                setAddToCart={setAddToCart}
              />
            )}
            ListFooterComponent={
              Boolean(addToCart.length) && (
                <CustomButton
                  text={
                    'Go to cart                                        SAR 24'
                  }
                  large={true}
                  onPress={() => navigation.navigate(routes.orders.details)}
                />
              )
            }
            contentContainerStyle={{margin: 20, marginBottom: 0}}
          />
        </Tabs.Tab>
        {/* salads */}
        <Tabs.Tab name="Salads">
          <Tabs.FlatList
            data={pizza}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <AddItem
                item={item}
                addToCart={addToCart}
                setAddToCart={setAddToCart}
              />
            )}
            ListFooterComponent={
              Boolean(addToCart.length) && (
                <CustomButton
                  text={
                    'Go to cart                                        SAR 24'
                  }
                  large={true}
                  onPress={() => navigation.navigate(routes.orders.details)}
                />
              )
            }
            contentContainerStyle={{margin: 20, marginBottom: 0}}
          />
        </Tabs.Tab>
        {/* combos */}
        <Tabs.Tab name="Combos">
          <Tabs.FlatList
            data={pizza}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <AddItem
                item={item}
                addToCart={addToCart}
                setAddToCart={setAddToCart}
              />
            )}
            ListFooterComponent={
              Boolean(addToCart.length) && (
                <CustomButton
                  text={
                    'Go to cart                                        SAR 24'
                  }
                  large={true}
                  onPress={() => navigation.navigate(routes.orders.details)}
                />
              )
            }
            contentContainerStyle={{margin: 20, marginBottom: 0}}
          />
        </Tabs.Tab>
        {/* beverages */}
        <Tabs.Tab name="Beverages">
          <Tabs.FlatList
            data={pizza}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <AddItem
                item={item}
                addToCart={addToCart}
                setAddToCart={setAddToCart}
              />
            )}
            ListFooterComponent={
              Boolean(addToCart.length) && (
                <CustomButton
                  text={
                    'Go to cart                                        SAR 24'
                  }
                  large={true}
                  onPress={() => navigation.navigate(routes.orders.details)}
                />
              )
            }
            contentContainerStyle={{margin: 20, marginBottom: 0}}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </Container>
  );
};
