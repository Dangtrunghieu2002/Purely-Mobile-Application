import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const LogIn1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <Image
        style={styles.illustration1Icon}
        resizeMode="cover"
        source={require("../assets/illustration-11.png")}
      />
      <Pressable
        style={[styles.logInParent, styles.textFieldPosition]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={styles.logIn1}>Log in</Text>
        <View style={[styles.usernameWrapper, styles.component32SpaceBlock]}>
          <Text style={styles.usernameTypo}>Username</Text>
        </View>
        <View style={[styles.usernameWrapper, styles.component32SpaceBlock]}>
          <View style={styles.passwordParent}>
            <Text style={[styles.password, styles.passwordFlexBox]}>
              Password
            </Text>
            <Image
              style={styles.eyeCrossedIcon}
              resizeMode="cover"
              source={require("../assets/eyecrossed.png")}
            />
          </View>
        </View>
        <Text style={[styles.forgotPassword, styles.textFieldTypo]}>
          Forgot Password?
        </Text>
        <View style={[styles.component32, styles.component32SpaceBlock]}>
          <View style={styles.component32Child} />
          <Text style={[styles.textField, styles.textFieldTypo]}>Log in</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.haveNotAnyContainer, styles.textFieldPosition]}
        onPress={() => navigation.navigate("SignUp4")}
      >
        <Text style={styles.text}>
          <Text style={styles.haveNotAnyAccountYet}>
            <Text style={styles.haveNotAny}>Have not any account yet?</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={[styles.register1, styles.textFieldTypo]}>
              Register!
            </Text>
          </Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textFieldPosition: {
    left: "50%",
    position: "absolute",
  },
  component32SpaceBlock: {
    marginTop: 24,
    width: 343,
  },
  passwordFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textFieldTypo: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  illustration1Icon: {
    top: 0,
    left: 0,
    width: 460,
    height: 460,
    position: "absolute",
    overflow: "hidden",
  },
  logIn1: {
    fontSize: FontSize.heading1_size,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    textAlign: "left",
    color: Color.sub2,
  },
  usernameTypo: {
    color: Color.dimgray,
    fontSize: FontSize.text1_size,
    fontFamily: FontFamily.text1,
    textAlign: "left",
  },
  usernameWrapper: {
    borderStyle: "solid",
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    marginTop: 24,
    width: 343,
  },
  password: {
    width: 279,
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
  passwordParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  forgotPassword: {
    textAlign: "right",
    fontSize: FontSize.notice_size,
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    marginTop: 24,
    width: 343,
    color: Color.sub2,
  },
  component32Child: {
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
    marginLeft: -32.5,
    top: "50%",
    fontSize: FontSize.heading3_size,
    color: Color.white,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  component32: {
    height: 48,
    width: 343,
    marginTop: 24,
  },
  logInParent: {
    marginLeft: -171.5,
    top: 420,
  },
  haveNotAny: {
    color: Color.sub2,
  },
  text1: {
    color: Color.skyblue_100,
  },
  haveNotAnyAccountYet: {
    fontSize: FontSize.heading4_size,
    lineHeight: 27,
    fontFamily: FontFamily.text1,
  },
  register1: {
    fontSize: FontSize.notice_size,
    fontWeight: "600",
  },
  text: {
    marginLeft: -150.5,
    textAlign: "left",
  },
  haveNotAnyContainer: {
    top: 675,
  },
  logIn: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LogIn1;
