import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import styles from "./LoginPageStyle";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SignUpLoginButton from "../../../components/Buttons/SignUP&Login/SignUpLoginButton";
import { Dimensions } from "react-native";
import colors from "../../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import SkipButton from "../../../components/Buttons/Skip/SkipButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import ReactNativeModal from "react-native-modal";

const LoginPage = () => {
  const [pwdVisibility, setpwdVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setpwdVisibility(!pwdVisibility);
  };
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.ScrollContainer}>
      <View style={styles.container}>
        <SkipButton />
        <View style={styles.titles}>
          <Text style={styles.title1}>Login</Text>
          <Text style={styles.subTitle}>Please sign in to continue</Text>
        </View>
        <View style={styles.forms}>
          <View style={styles.email}>
            <Fontisto
              name="email"
              size={20}
              color="black"
              style={styles.emailIcon}
            />
            <TextInput placeholder="E-mail ID" style={styles.emailHolder} />
          </View>
          <View style={styles.password}>
            <Feather
              name="lock"
              size={20}
              color="black"
              style={styles.passwordIcon}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={togglePasswordVisibility}
              style={styles.passwordHolder}
            />
            <View style={styles.eyeIcon}>
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.eyeIcon}
              >
                {pwdVisibility ? (
                  <FontAwesome5 name="eye" size={20} color="black" />
                ) : (
                  <FontAwesome5 name="eye-slash" size={20} color="black" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.forgot}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginButton}>
            <TouchableOpacity>
              <Text style={styles.ButtonText}>Login</Text>
              <AntDesign
                name="arrowright"
                size={24}
                color="white"
                style={styles.arrowRight}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.altLogin}>
            <Text style={styles.altText}>Or Login with</Text>
          </View>
          <View style={styles.google}>
            <TouchableOpacity onPress={() => console.log("Google")}>
              <Image source={require("../../../images/Gmail.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.AltSignUp}>
            <View>
              <Text>Don't have an account?</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUpScreen")}
              >
                <Text style={styles.signUpText}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default React.memo(LoginPage);
