import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./SignUpPageStyle";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import SkipButton from "../../../components/Buttons/Skip/SkipButton";
import colors from "../../../constants/colors";
const SignUpPage = () => {
  const [pwdVisibility, setpwdVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setpwdVisibility(!pwdVisibility);
  };
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <KeyboardAvoidingView style={styles.container}>
        <SkipButton />
        <View style={styles.titleBox}>
          <Text style={styles.title1}>Sign Up</Text>
          <Text style={styles.subTitle}>Please sign up to continue</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.emailBox}>
            <Fontisto
              name="email"
              size={20}
              color="black"
              style={styles.emailIcon}
            />
            <TextInput style={styles.emailHolder} placeholder="E-mail ID" />
          </View>
          <View style={styles.nameBox}>
            <MaterialCommunityIcons
              name="account-outline"
              size={20}
              color="black"
              style={styles.nameIcon}
            />
            <TextInput style={styles.nameHolder} placeholder="User" />
          </View>
          <View style={styles.passwordBox}>
            <Feather
              name="lock"
              size={20}
              color="black"
              style={styles.passwordIcon}
            />
            <TextInput
              style={styles.passwordHolder}
              placeholder="Password"
              secureTextEntry={togglePasswordVisibility}
            />
            <View style={styles.eyeIconContainer}>
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
          <View style={styles.terms}>
            <Text style={styles.termsText}>
              By signing up, you're agreeing to our
              <Text style={styles.termsLink}>Terms & Conditions</Text>
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.signUpButton}>
              <TouchableOpacity>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.altText}>
              <Text
                style={{
                  color: colors.green,
                  marginLeft: 130,
                  marginVertical: 10,
                }}
              >
                Or Sign Up with
              </Text>
            </View>
            <View style={styles.google}>
              <TouchableOpacity onPress={() => console.log("HandleSignUP")}>
                <Image source={require("../../../images/Gmail.png")} />
              </TouchableOpacity>
            </View>
            <View style={styles.alreadyAccount}>
              <Text style={styles.alreadyAccountText}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("loginScreen")}
                style={styles.loginLink}
              >
                <Text style={styles.loginLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
export default React.memo(SignUpPage);
