import { View, Text, Dimensions } from 'react-native'
import { COLORS } from '../../../../theme'
import CustomButton from '../../../../components/Button'
import { useNavigation } from '@react-navigation/native'
import routes from '../../../../navigation/routes'

export default function Onboarding_SlideItem({ item }) {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('screen');

    return (
        <View
            style={{
                width: width,
                paddingHorizontal: 19,
                // borderWidth: 2, borderColor: 'red'
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: COLORS.black,
                        fontSize: 38,
                        lineHeight: 44,
                        color: '#ffffff',
                        textAlign: 'center',
                    }}>
                    {item.heading}
                </Text>
                <Text
                    style={{
                        color: '#FFF',
                        fontSize: 18,
                        textAlign: 'center',
                        paddingTop: 28,
                        paddingBottom: 50,
                    }}>
                    {item.subheading}
                </Text>
                {/* Button */}

                <View
                    style={{
                        height: 100,
                        width: '100%'
                    }}
                >
                    {item.button ?
                        <CustomButton
                            text={'Get Started'}
                            onPress={() => navigation.navigate(routes.dasboard)}
                            large={true}
                            btnStyle={{ width: "100%", marginBottom: 30 }}
                        />
                        : ''
                    }
                </View>

            </View>
        </View>

    )
}