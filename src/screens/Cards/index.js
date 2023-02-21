import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import icons from '../../assets/icons';
import Container from '../../components/Container';
import CustomHeader from '../../components/Header';
import {COLORS, FONTS, SIZES} from '../../theme';
import Heading from '../../components/Heading';
import images from '../../assets/images';
import CustomButton from '../../components/Button';
import LabelInput from '../../components/LabelInput';
import {styles} from './styles';
import {useFormik} from 'formik';
import {object, string} from 'yup';
import Waiting from '../../modals/Waiting';

export const Cards = ({navigation, route}) => {
  const addedCards = [images.visa_gold, images.monobank, images.visa_classic];
  const [selectedCard, setSelectedCard] = useState('');
  //if cash on delivery is selected as payment then direclty show (waiting for order modal) else show cards screen
  const [showModal, setShowModal] = useState(route?.params?.selected == 0);

  const initialValues = {
    card_number: '',
    expiry_date: '',
    cvv: '',
  };

  const validationSchema = object().shape({
    // card_number: string().required('this field is required'),
    // expiry_date: string().required('this field is required'),
    // cvv: string().required('this field is required'),
  });

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  function onSubmit(values) {
    console.log(values);
    setShowModal(true);
  }

  return (
    <Container>
      <CustomHeader title={'Cards'} showArrow={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: SIZES.padding, paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* card images */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {addedCards.map((item, i) => (
                <View key={i} style={{flexDirection: 'row'}}>
                  {Boolean(i) && (
                    <View style={styles.card_arrow_con}>
                      <Image
                        source={icons.arrow_back}
                        resizeMode="contain"
                        style={{
                          ...styles.card_arrow_image,
                          transform: [{rotate: i % 2 == 0 ? '180deg' : '0deg'}],
                        }}
                      />
                    </View>
                  )}
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setSelectedCard(item)}
                    style={{
                      borderWidth: selectedCard == item ? 5 : 0,
                      borderColor: COLORS.yellow,
                      borderRadius: 10,
                      marginHorizontal: 2,
                    }}>
                    <Image
                      source={item}
                      style={styles.card_image}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
          {/* dots */}
          <View style={styles.dots} />

          {/* add new card */}
          <Heading
            text={'Or Add New Card'}
            style={{alignSelf: 'flex-start', fontSize: 18}}
          />

          <CustomButton text={'Scan your card'} icon={'camera'} />
          <Heading
            text={'Type card details:'}
            style={{alignSelf: 'flex-start', fontSize: 18, marginTop: 30}}
          />
          <LabelInput
            label={'Card number'}
            placeholder="5375441145400954"
            inputStyle={{...FONTS.urbanist_regular, fontSize: 14}}
            containerStyle={{marginTop: 10}}
            id="card_number"
            form={form}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <LabelInput
              label={'Expiry Date'}
              placeholder="06\24"
              inputStyle={styles.small_input}
              containerStyle={{width: '49%'}}
              id="expiry_date"
              form={form}
            />
            <LabelInput
              label={'CVV'}
              placeholder="456"
              inputStyle={styles.small_input}
              containerStyle={{width: '49%'}}
              id="cvv"
              form={form}
            />
          </View>
          <CustomButton
            text={'Apply'}
            large={true}
            disabled={
              (!form.values.card_number.length ||
                !form.values.cvv.length ||
                !form.values.expiry_date.length) &&
              selectedCard == ''
            }
            btnStyle={{marginTop: 40}}
            onPress={form.handleSubmit}
          />
        </View>
      </ScrollView>
      {/* waiting for order modal */}
      <Waiting
        visibility={showModal}
        setVisibility={setShowModal}
        //if cash on delivery is selected as payment then go back on press of cancel btn else hide modal
        onPress={() =>
          route?.params?.selected == 0
            ? navigation.goBack()
            : setShowModal(false)
        }
      />
    </Container>
  );
};
