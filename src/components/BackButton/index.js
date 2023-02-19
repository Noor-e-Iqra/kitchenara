import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Image } from "react-native"
import icons from "../../assets/icons";

export default function BackButton() {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={styles.icon_2}
            onPress={() => navigation.goBack()}>
            <Image
                source={icons.arrow_back_2}
                style={{ height: 19.25, width: 15.81 }}
                resizeMode="contain"
            />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    icon_2: {
      position: 'absolute',
      left: 20.08,
      top: 25.42,
      width: 15.81,
      height: 19.25,
    }
  })