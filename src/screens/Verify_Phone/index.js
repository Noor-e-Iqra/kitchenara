import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../theme';
// import { styles } from './styles';
import CustomButton from '../../components/Button';
import routes from '../../navigation/routes';
import { useNavigation } from '@react-navigation/native';
// icons
import icons from "../../assets/icons";
import BackButton from "../../components/BackButton";

const Verify_Phone = () => {

    const navigation = useNavigation()

    const input_1 = useRef()
    const input_2 = useRef()
    const input_3 = useRef()
    const input_4 = useRef()

    const [otp, setOtp] = useState({
        'one': '', 'two': '', 'three': '', 'four': ''
    })
    const [verifyButtonDisabled, setVerifyButtonDisabled] = useState(true)
    const [countDown, setCountDown] = useState(60)
    const [resend, setResend] = useState(false)

    const resend_code = () => {
        setCountDown(60)
        setResend(false)
    }

    const Resend_Enabled = () => {
        return (
            <TouchableOpacity onPress={resend_code}>
                <Text style={{ fontSize: 16, lineHeight: 22.4, textAlign: 'center', color: COLORS.primary }} >Resend code</Text>
            </TouchableOpacity>
        )
    }

    const Resend_Disabled = () => {
        return (
            <Text style={{ fontSize: 16, lineHeight: 22.4, textAlign: 'center', color: COLORS.black }} >Resend code in <Text style={{ color: COLORS.primary }}>{countDown}</Text> s</Text>
        )
    }

    const Resend = () => {
        const output = resend ? <Resend_Enabled /> : <Resend_Disabled />
        return (
            <>
                {output}
            </>
        )
    }

    useEffect(() => {
        if (countDown > 0) {
            setResend(false)

            setTimeout(() => {
                setCountDown(countDown - 1)
                // console.log({ countDown })
            }, 1000)
        } else {
            setResend(true)
        }
    }, [countDown]
    )

    useEffect(() => {
        if (otp.one && otp.two && otp.three && otp.four) {
            setVerifyButtonDisabled(false)
        } else {
            setVerifyButtonDisabled(true)
        }
    }, [otp])

    useEffect(() => {
        input_1.current.focus()
    }, [])

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
                            <Text style={{ fontSize: 24, lineHeight: 28.8, color: COLORS.black, textAlign: 'center' }} >Verifying your number</Text>
                        </View>
                        <Text style={{ fontSize: 16, lineHeight: 22.4, textAlign: 'center', paddingTop: 62, color: COLORS.black }} >We have sent an OTP to your mobile phone  +6282******39</Text>

                        <View style={styles.otp_container}>
                            <View style={styles.otp_box}>
                                <TextInput style={styles.otp_text} keyboardType="number-pad" maxLength={1} ref={input_1}
                                    onChangeText={(text) => {
                                        setOtp({ ...otp, 'one': text })
                                        text && input_2.current.focus()
                                    }}
                                />
                            </View>
                            <View style={styles.otp_box}>
                                <TextInput style={styles.otp_text} keyboardType="number-pad" maxLength={1} ref={input_2}
                                    onChangeText={(text) => {
                                        setOtp({ ...otp, 'two': text })
                                        text && input_3.current.focus()
                                    }}
                                />
                            </View>
                            <View style={styles.otp_box}>
                                <TextInput style={styles.otp_text} keyboardType="number-pad" maxLength={1} ref={input_3}
                                    onChangeText={(text) => {
                                        setOtp({ ...otp, 'three': text })
                                        text && input_4.current.focus()
                                    }}
                                />
                            </View>
                            <View style={styles.otp_box}>
                                <TextInput style={styles.otp_text} keyboardType="number-pad" maxLength={1} ref={input_4}
                                    onChangeText={(text) => {
                                        setOtp({ ...otp, 'four': text })
                                        !text && input_3.current.focus()
                                    }}
                                />
                            </View>
                        </View>

                        <Resend />

                        <View style={{ flexDirection: 'column', paddingTop: 20 }}>

                            <View
                                style={{ marginTop: 0 }}>
                                <CustomButton
                                    text={'Verify'}
                                    onPress={() => navigation.navigate(routes.profile.cards)}
                                    large={true}
                                    disabled={verifyButtonDisabled}
                                />

                            </View>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}

export { Verify_Phone }

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
    otp_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 60
    },
    otp_box: {
        border: 1,
        backgroundColor: COLORS.input_bg,
        width: 78,
        height: 61,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    otp_text: {
        fontSize: 24,
        paddingVertical: 20,
        width: '100%',
        textAlign: 'center'
    }
})