import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#E5384E', // pink
  secondary: '#FFFFFF', // white

  // colors
  black: '#000000',
  light_black: '#09101D',
  green: '#24AC7F',
  gray: '#9E9E9E',
  gray_text: '#848484',
  dark_gray: '#656565',
  light_gray: '#84848480',
  light_gray2: '#616161',
  blue: '#4086F0',
  light_gray_txt: '#858C94',
  light_gray_bg: '#FAFAFA',
  yellow: '#F3D94A',
  red: '#E5384E',
  light_blue: '#4086F0',
  lineAround: '#EEE',
  input_bg: '#EEEEEE',
  disabled: '#E5384E80',
  hyperLink:'#5DC6F2'
};

export const SIZES = {
  // global sizes
  padding: 24,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  arial_rounded_bold: {
    fontFamily: Platform.select({
      android: 'Arial-Rounded-MT-Bold',
      ios: 'ArialRoundedMTBold',
    }),
    fontSize: 24,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  arial_rounded: {
    fontFamily: Platform.select({
      android: 'Arial-Rounded-MT',
      ios: 'ArialRoundedMT',
    }),
    fontSize: 16,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  source_sans_pro_regular: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  source_sans_pro_semiBold: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 18,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  urbanist_bold: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 16,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  urbanist_medium: {
    fontFamily: 'Urbanist-Medium',
    fontSize: 12,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  urbanist_regular: {
    fontFamily: 'Urbanist-Regular',
    fontSize: 10,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  urbanist_semiBold: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 14,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
};

export {width, height};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
