import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <Image
        style={styles.illustration1Icon}
        resizeMode="cover"
        source={require("../assets/illustration-1.png")}
      />
      <Text style={[styles.haveNotAnyContainer, styles.haveContainerPosition]}>
        <Text style={styles.haveNotAnyAccountYet}>
          <Text style={styles.haveNotAny}>Have not any account yet?</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={[styles.register1, styles.register1Typo]}>
            Register!
          </Text>
        </Text>
      </Text>
      <View style={[styles.logInParent, styles.haveContainerPosition]}>
        <Text style={styles.logIn1}>Log in</Text>
        <View
          style={[
            styles.healthcarecommunitycomWrapper,
            styles.component32SpaceBlock,
          ]}
        >
          <Text style={styles.healthcarecommunitycom}>
            Healthcare@Community.com
          </Text>
        </View>
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1601.png")}
            />
          </View>
          <Image
            style={styles.eyeIcon}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </View>
        <Text style={[styles.forgotPassword, styles.frameParentFlexBox]}>
          Forgot Password?
        </Text>
        <Pressable
          style={[styles.component32, styles.component32SpaceBlock]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <View style={styles.component32Child} />
          <Text style={[styles.textField, styles.register1Typo]}>Log in</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.haveNotAnyContainer1, styles.haveContainerPosition]}
        onPress={() => navigation.navigate("SignUp4")}
      >
        <Text style={[styles.text1, styles.text1SpaceBlock]}>
          <Text style={styles.haveNotAnyAccountYet}>
            <Text style={styles.haveNotAny}>Have not any account yet?</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={[styles.register1, styles.register1Typo]}>
              Register!
            </Text>
          </Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  haveContainerPosition: {
    left: "50%",
    position: "absolute",
  },
  register1Typo: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  component32SpaceBlock: {
    marginTop: 24,
    width: 343,
  },
  frameParentFlexBox: {
    alignItems: "center",
    marginTop: 24,
    width: 343,
  },
  frameLayout: {
    height: 6,
    width: 6,
  },
  text1SpaceBlock: {
    marginLeft: -150.5,
    textAlign: "left",
  },
  illustration1Icon: {
    top: 0,
    left: 0,
    width: 460,
    height: 460,
    position: "absolute",
    overflow: "hidden",
  },
  haveNotAny: {
    color: Color.sub2,
  },
  text: {
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
  haveNotAnyContainer: {
    top: 621,
    textAlign: "left",
    marginLeft: -150.5,
  },
  logIn1: {
    fontSize: FontSize.heading1_size,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    color: Color.sub2,
    textAlign: "left",
  },
  healthcarecommunitycom: {
    fontSize: FontSize.text1_size,
    color: Color.sub2,
    fontFamily: FontFamily.text1,
    textAlign: "left",
  },
  healthcarecommunitycomWrapper: {
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xs,
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
    flexDirection: "row",
  },
  frameItem: {
    marginLeft: 2,
  },
  ellipseParent: {
    width: 293,
    flexDirection: "row",
  },
  eyeIcon: {
    width: 16,
    height: 16,
    marginLeft: 18,
    overflow: "hidden",
  },
  frameParent: {
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xs,
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
    flexDirection: "row",
  },
  forgotPassword: {
    textAlign: "right",
    display: "flex",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.notice_size,
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
  },
  logInParent: {
    marginLeft: -171.5,
    top: 420,
    justifyContent: "center",
  },
  text1: {
    textAlign: "left",
  },
  haveNotAnyContainer1: {
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

export default LogIn;
