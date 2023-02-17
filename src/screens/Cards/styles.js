import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles=StyleSheet.create({
    card_arrow_con:{
        height: 32,
        width: 32,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        left: -15,
        zIndex: 10,
    },
    card_arrow_image:{
        height: 18,
        width: 18,
        tintColor: COLORS.secondary,
    },
    card_image:{
        height: 175,
        width: 290,
        borderRadius:10
    },
    dots:{
        borderStyle: 'dotted',
        borderWidth: 1,
        borderRadius: 1,
        marginVertical: 10,
        borderColor: COLORS.light_gray,
    },
    small_input:{
        ...FONTS.urbanist_bold,
        fontSize: 14,
        padding: 15,
        textAlign: 'center',
    }
})