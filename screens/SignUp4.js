import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const SignUp4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <Image
        style={styles.illustration2Icon}
        resizeMode="cover"
        source={require("../assets/illustration-1.png")}
      />
      <Text style={[styles.joinUsBeforeContainer, styles.textFieldPosition]}>
        <Text style={styles.joinUsBefore}>{`Join us before? `}</Text>
        <Text style={[styles.logIn, styles.logInTypo]}>Log in!</Text>
      </Text>
      <View style={[styles.signUpParent, styles.textFieldPosition]}>
        <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign up</Text>
        <View
          style={[
            styles.enterUsernameWrapper,
            styles.rectangleParentSpaceBlock,
          ]}
        >
          <Text style={styles.enterUsernameTypo}>Enter username</Text>
        </View>
        <View
          style={[
            styles.enterUsernameWrapper,
            styles.rectangleParentSpaceBlock,
          ]}
        >
          <Text style={styles.enterUsernameTypo}>Enter password</Text>
        </View>
        <View
          style={[
            styles.enterUsernameWrapper,
            styles.rectangleParentSpaceBlock,
          ]}
        >
          <View style={styles.confirmPasswordParent}>
            <Text
              style={[styles.confirmPassword, styles.confirmPasswordFlexBox]}
            >
              Confirm password
            </Text>
            <Image
              style={styles.eyeCrossedIcon}
              resizeMode="cover"
              source={require("../assets/eyecrossed.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.rectangleParent, styles.rectangleParentSpaceBlock]}
          onPress={() => navigation.navigate("SignUp3")}
        >
          <View style={styles.instanceChild} />
          <Text style={[styles.textField, styles.logInTypo]}>Sign up</Text>
        </Pressable>
        <Text
          style={[styles.bySigningUpContainer, styles.confirmPasswordFlexBox]}
        >
          <Text style={styles.bySigningUpContainer1}>
            <Text style={styles.bySigningUp}>{`By signing up, you agree to our 
`}</Text>
            <Text style={[styles.termsAndConditions, styles.signUp1Typo]}>
              Terms and Conditions
            </Text>
            <Text style={styles.bySigningUp}>{` and `}</Text>
            <Text style={[styles.termsAndConditions, styles.signUp1Typo]}>
              Privacy Policy
            </Text>
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFieldPosition: {
    left: "50%",
    position: "absolute",
  },
  logInTypo: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  signUp1Typo: {
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
  },
  rectangleParentSpaceBlock: {
    marginTop: 24,
    width: 343,
  },
  confirmPasswordFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  illustration2Icon: {
    top: 0,
    left: 0,
    width: 460,
    height: 460,
    position: "absolute",
    overflow: "hidden",
  },
  joinUsBefore: {
    color: Color.sub2,
    fontFamily: FontFamily.text1,
  },
  logIn: {
    color: Color.skyblue_100,
  },
  joinUsBeforeContainer: {
    marginLeft: -85.5,
    top: 761,
    fontSize: FontSize.notice_size,
    textAlign: "left",
  },
  signUp1: {
    fontSize: FontSize.heading1_size,
    color: Color.sub2,
    textAlign: "left",
  },
  enterUsernameTypo: {
    color: Color.dimgray,
    fontSize: FontSize.text1_size,
    fontFamily: FontFamily.text1,
    textAlign: "left",
  },
  enterUsernameWrapper: {
    borderStyle: "solid",
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    marginTop: 24,
    width: 343,
  },
  confirmPassword: {
    width: 303,
    color: Color.dimgray,
    fontSize: FontSize.text1_size,
    fontFamily: FontFamily.text1,
    textAlign: "left",
  },
  eyeCrossedIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    overflow: "hidden",
  },
  confirmPasswordParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  instanceChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.skyblue_200,
    position: "absolute",
    width: "100%",
  },
  textField: {
    marginTop: -13,
    marginLeft: -40.5,
    top: "50%",
    fontSize: FontSize.heading3_size,
    color: Color.white,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    height: 48,
    marginTop: 24,
    width: 343,
  },
  bySigningUp: {
    fontSize: FontSize.heading4_size,
    lineHeight: 27,
    fontFamily: FontFamily.text1,
  },
  termsAndConditions: {
    fontSize: FontSize.text4_size,
    textDecoration: "underline",
  },
  bySigningUpContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  bySigningUpContainer: {
    textAlign: "center",
    marginTop: 24,
    width: 343,
    color: Color.sub2,
  },
  signUpParent: {
    marginLeft: -171.5,
    top: 420,
  },
  signUp: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp4;
