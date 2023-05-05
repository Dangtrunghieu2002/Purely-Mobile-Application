import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignUp3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={[styles.textField3Parent, styles.parentPosition1]}>
        <View style={[styles.textField3, styles.textLayout]}>
          <View style={[styles.textField3Child, styles.childPosition]} />
          <View style={[styles.textFillParent, styles.parentPosition]}>
            <Text style={styles.textTypo}>Full name</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
        </View>
        <View style={[styles.textField7, styles.textLayout]}>
          <View style={[styles.textField3Child, styles.childPosition]} />
          <Text style={[styles.textFill1, styles.textTypo]}>Gender</Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.textField7, styles.textLayout]}>
          <View style={[styles.textField3Child, styles.childPosition]} />
          <View style={[styles.textFillParent, styles.parentPosition]}>
            <Text style={styles.textTypo}>Date of Birth</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.textField7, styles.textLayout]}>
          <View style={[styles.textField3Child, styles.childPosition]} />
          <Text style={[styles.textFill1, styles.textTypo]}>Location</Text>
        </View>
        <View style={[styles.textField7, styles.textLayout]}>
          <View style={[styles.textField3Child, styles.childPosition]} />
          <Text style={[styles.textFill1, styles.textTypo]}>
            Identification
          </Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
      </View>
      <Text style={[styles.healthStatus, styles.healthStatusTypo]}>
        Health Status
      </Text>
      <Text style={[styles.generalInformation, styles.healthStatusTypo]}>
        General Information
      </Text>
      <View style={[styles.component37Parent, styles.parentPosition1]}>
        <View style={styles.textLayout}>
          <View style={[styles.textField3Child, styles.childPosition]} />
          <Text style={[styles.textFill1, styles.textTypo]}>Weight</Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.textField7, styles.textLayout]}>
          <View style={[styles.textField3Child, styles.childPosition]} />
          <Text style={[styles.textFill1, styles.textTypo]}>Height</Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.textField7, styles.textLayout]}>
          <View style={[styles.textField3Child, styles.childPosition]} />
          <View style={[styles.textFillParent, styles.parentPosition]}>
            <Text style={styles.textTypo}>Background disease</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
      </View>
      <View style={styles.header3}>
        <View style={[styles.header3Child, styles.header3ChildPosition]} />
        <View style={styles.statusBarwhitebase}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.gsPosition]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/battery-icon.png")}
            />
            <Text style={[styles.text, styles.gsTypo]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={styles.text1}>9:41 AM</Text>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Text style={[styles.gs, styles.gsTypo]}>GS</Text>
          <Image
            style={[styles.signalIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.rectangleParent, styles.header3ChildPosition]}>
          <View style={[styles.frameChild, styles.childPosition]} />
          <Pressable
            style={[styles.chevronLeft, styles.chevronLeftLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <View style={[styles.angleRight2Parent, styles.parentPosition]}>
            <Image
              style={[styles.angleRight2Icon, styles.chevronLeftLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-2.png")}
            />
            <Text style={styles.signUp1}>Sign up</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.component32}
        onPress={() => navigation.navigate("SignUp4")}
      >
        <Pressable
          style={[styles.component32Child, styles.component32Layout]}
          onPress={() => navigation.navigate("SignUp2")}
        />
        <Text style={[styles.textField, styles.textPosition]}>Finish</Text>
        <View style={[styles.component32Item, styles.component32Layout]} />
        <Text style={[styles.textField1, styles.textPosition]}>Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition1: {
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  textLayout: {
    height: 44,
    width: 343,
  },
  childPosition: {
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  parentPosition: {
    flexDirection: "row",
    left: 24,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.darkgray_100,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  healthStatusTypo: {
    color: Color.sub2,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  header3ChildPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  gsTypo: {
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.sFUITextRegular,
    fontSize: FontSize.size_xs,
    color: Color.sub2,
    textAlign: "left",
    position: "absolute",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  component32Layout: {
    width: "47.67%",
    borderRadius: Border.br_5xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textPosition: {
    top: "50%",
    marginTop: -13,
    textAlign: "center",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    left: "50%",
    position: "absolute",
  },
  textField3Child: {
    borderColor: "#a3a3a3",
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
  },
  mdirequiredIcon: {
    height: 8,
    marginLeft: 3,
    width: 8,
    overflow: "hidden",
  },
  textFillParent: {
    top: 15,
  },
  textField3: {
    overflow: "hidden",
  },
  textFill1: {
    top: "34.09%",
    left: "7%",
    position: "absolute",
  },
  angleDown2Icon: {
    height: "36.36%",
    width: "4.66%",
    top: "31.82%",
    right: "7%",
    bottom: "31.82%",
    left: "88.34%",
  },
  textField7: {
    marginTop: 16,
  },
  textField3Parent: {
    top: 128,
  },
  healthStatus: {
    top: 429,
  },
  generalInformation: {
    top: 93,
  },
  component37Parent: {
    top: 464,
  },
  header3Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  batteryIcon: {
    height: "67.86%",
    width: "44.14%",
    top: "17.86%",
    bottom: "14.29%",
    left: "55.86%",
    right: "0%",
  },
  text: {
    width: "50.45%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  charge: {
    width: "14.8%",
    right: "1.47%",
    bottom: "15%",
    left: "83.73%",
    position: "absolute",
  },
  bluetoothIcon: {
    height: 13,
    opacity: 0.45,
    width: 8,
  },
  text1: {
    width: "12.8%",
    left: "43.73%",
    fontFamily: FontFamily.sFUITextMedium,
    fontWeight: "500",
    alignItems: "flex-end",
    display: "flex",
    fontSize: FontSize.size_xs,
    top: "15%",
    height: "70%",
    color: Color.sub2,
    textAlign: "left",
    position: "absolute",
  },
  wifiIcon: {
    width: 12,
    height: 9,
  },
  gs: {
    width: "4.53%",
    left: "11.73%",
    top: "15%",
    height: "70%",
  },
  signalIcon: {
    height: "27.5%",
    width: "8.93%",
    top: "37.5%",
    right: "89.33%",
    bottom: "35%",
    left: "1.73%",
  },
  statusBarwhitebase: {
    height: "26.32%",
    bottom: "73.68%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  frameChild: {
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    backgroundColor: Color.white,
  },
  icon: {
    display: "none",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  chevronLeft: {
    top: 20,
    left: 16,
    height: 16,
    width: 16,
    position: "absolute",
  },
  angleRight2Icon: {
    overflow: "hidden",
  },
  signUp1: {
    fontSize: FontSize.heading1_size,
    fontFamily: FontFamily.heading4,
    marginLeft: 9,
    textAlign: "center",
    fontWeight: "500",
    color: Color.sub2,
  },
  angleRight2Parent: {
    top: 24,
    alignItems: "center",
  },
  rectangleParent: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  header3: {
    top: 0,
    left: 0,
    width: 375,
    height: 76,
    position: "absolute",
  },
  component32Child: {
    right: "0.15%",
    left: "52.19%",
    backgroundColor: Color.skyblue_200,
  },
  textField: {
    marginLeft: 57.5,
    color: Color.white,
  },
  component32Item: {
    right: "52.33%",
    backgroundColor: Color.gainsboro,
    left: "0%",
  },
  textField1: {
    marginLeft: -116.5,
    color: Color.dimgray,
  },
  component32: {
    marginLeft: -163.5,
    bottom: 20,
    height: 48,
    width: 343,
    left: "50%",
    position: "absolute",
  },
  signUp: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SignUp3;
