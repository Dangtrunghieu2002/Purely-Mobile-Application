import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const RegisterElderlySitter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerElderlySitter}>
      <View style={[styles.workExperienceParent, styles.parentPosition1]}>
        <Text style={styles.workExperience}>Work Experience</Text>
        <View style={[styles.textField4, styles.textLayout]}>
          <View style={[styles.textField4Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>Current Job</Text>
        </View>
        <View style={[styles.textField4, styles.textLayout]}>
          <View style={[styles.textField4Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>
            Year of Experience
          </Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={styles.introduceYourself}>Introduce Yourself</Text>
        </View>
      </View>
      <View style={[styles.generalInformationParent, styles.parentPosition1]}>
        <Text style={styles.workExperience}>General Information</Text>
        <View style={styles.component37}>
          <View style={[styles.component37Child, styles.childPosition]} />
          <Text style={[styles.textFill2, styles.textTypo1]}>
            Community Healthcare
          </Text>
          <View style={[styles.titleParent, styles.titleFlexBox]}>
            <Text style={styles.titleTypo}>Full name</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <View style={styles.component371}>
          <View style={[styles.component37Item, styles.itemPosition]} />
          <Text style={[styles.textFill3, styles.textTypo1]}>Female</Text>
          <Image
            style={[styles.angleDown2Icon1, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <Text style={[styles.title1, styles.titleTypo]}>Gender</Text>
        </View>
        <View style={styles.component371}>
          <View style={[styles.textField4Item, styles.itemPosition]} />
          <Text style={[styles.textFill4, styles.textTypo1]}>27/09/1088</Text>
          <Image
            style={[styles.angleDown2Icon2, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <View style={[styles.titleGroup, styles.textFieldPosition]}>
            <Text style={styles.titleTypo}>Date of Birth</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <View style={[styles.textField6, styles.textLayout]}>
          <View style={[styles.textField4Child, styles.childBorder]} />
          <View style={[styles.textFillParent, styles.parentPosition]}>
            <Text style={styles.textTypo}>Location</Text>
            <Image
              style={styles.mdirequiredIcon2}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
        </View>
        <View style={[styles.textField6, styles.textLayout]}>
          <View style={[styles.textField4Child, styles.childBorder]} />
          <View style={[styles.textFillParent, styles.parentPosition]}>
            <Text style={styles.textTypo}>Skills</Text>
            <Image
              style={styles.mdirequiredIcon2}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
        </View>
        <View style={[styles.textField4, styles.textLayout]}>
          <View style={[styles.textField4Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>
            Diploma or Certificate
          </Text>
        </View>
        <View style={styles.component371}>
          <View style={[styles.textField4Item, styles.itemPosition]} />
          <Text style={[styles.textFill4, styles.textTypo1]}>
            Indentity Card
          </Text>
          <Image
            style={[styles.angleDown2Icon2, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <View style={[styles.titleGroup, styles.textFieldPosition]}>
            <Text style={styles.titleTypo}>Title</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Image
            style={styles.add2Icon}
            resizeMode="cover"
            source={require("../assets/add-2.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.component32, styles.parentPosition1]}
        onPress={() => navigation.navigate("RegisterConfirm")}
      >
        <View style={[styles.component32Child, styles.childPosition1]} />
        <Text style={[styles.textField, styles.textFieldPosition]}>
          Register
        </Text>
      </Pressable>
      <View style={[styles.component38, styles.groupPosition]}>
        <View style={[styles.component38Child, styles.childPosition1]} />
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
            <Text style={[styles.text, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text1, styles.text1Typo]}>9:41 AM</Text>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Text style={[styles.gs, styles.textFlexBox]}>GS</Text>
          <Image
            style={[styles.signalIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.childPosition1]}>
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
            <Text style={[styles.signUp, styles.text1Typo]}>{`Register `}</Text>
          </View>
        </View>
      </View>
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
    marginTop: 16,
    width: 343,
  },
  childBorder: {
    borderColor: "#a3a3a3",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  textTypo: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    textAlign: "left",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 80,
    width: 343,
  },
  groupPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo1: {
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    left: "7%",
    textAlign: "left",
    position: "absolute",
  },
  titleFlexBox: {
    flexDirection: "row",
    left: 0,
  },
  itemPosition: {
    top: "32.31%",
    height: "67.69%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  angleIconLayout: {
    height: "24.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "88.34%",
    right: "7%",
    width: "4.66%",
    position: "absolute",
    overflow: "hidden",
  },
  titleTypo: {
    color: Color.dimgray,
    fontSize: FontSize.notice_size,
    textAlign: "left",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  textFieldPosition: {
    top: "50%",
    position: "absolute",
  },
  parentPosition: {
    left: 24,
    flexDirection: "row",
    position: "absolute",
  },
  groupLayout: {
    height: 70,
    width: 130,
  },
  childPosition1: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text1Typo: {
    fontWeight: "500",
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  workExperience: {
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
  },
  textField4Child: {
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textFill: {
    top: "34.09%",
    left: "7%",
    color: Color.darkgray_100,
    position: "absolute",
  },
  textField4: {
    marginTop: 16,
  },
  angleDown2Icon: {
    height: "36.36%",
    top: "31.82%",
    bottom: "31.82%",
    left: "88.34%",
    right: "7%",
    width: "4.66%",
    maxWidth: "100%",
  },
  groupChild: {
    left: 0,
    height: 80,
    width: 343,
    borderWidth: 1,
    borderColor: "#a3a3a3",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  introduceYourself: {
    top: 13,
    left: 25,
    width: 181,
    alignItems: "center",
    display: "flex",
    color: Color.darkgray_100,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 16,
  },
  workExperienceParent: {
    top: 734,
  },
  component37Child: {
    height: "65.67%",
    top: "34.33%",
    borderColor: "#1a1a1a",
    borderWidth: 1,
    borderRadius: Border.br_5xs,
  },
  textFill2: {
    top: "56.72%",
    color: Color.sub2,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
  },
  mdirequiredIcon: {
    width: 4,
    height: 4,
    marginLeft: 4,
    overflow: "hidden",
  },
  titleParent: {
    top: 1,
    position: "absolute",
  },
  component37: {
    height: 67,
    marginTop: 16,
    width: 343,
  },
  component37Item: {
    borderColor: "#1a1a1a",
  },
  textFill3: {
    top: "55.38%",
    color: Color.sub2,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
  },
  angleDown2Icon1: {
    bottom: "20%",
    top: "55.38%",
  },
  title1: {
    top: 1,
    position: "absolute",
    left: 0,
  },
  component371: {
    height: 65,
    marginTop: 16,
    width: 343,
  },
  textField4Item: {
    borderColor: "#333",
  },
  textFill4: {
    color: Color.sub3,
    top: "55.38%",
  },
  angleDown2Icon2: {
    top: "53.85%",
    bottom: "21.54%",
  },
  titleGroup: {
    marginTop: -31.5,
    flexDirection: "row",
    left: 0,
  },
  mdirequiredIcon2: {
    height: 8,
    marginLeft: 3,
    width: 8,
    overflow: "hidden",
  },
  textFillParent: {
    top: 15,
  },
  textField6: {
    marginTop: 16,
    overflow: "hidden",
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: "#666",
    left: 0,
    top: 0,
    position: "absolute",
    borderWidth: 1,
  },
  add2Icon: {
    top: 23,
    left: 53,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    marginTop: 16,
  },
  generalInformationParent: {
    top: 100,
  },
  component32Child: {
    backgroundColor: Color.skyblue_200,
    borderRadius: Border.br_5xs,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textField: {
    marginTop: -13,
    marginLeft: -44.5,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    top: "50%",
    left: "50%",
  },
  component32: {
    bottom: 24,
    height: 48,
    width: 343,
  },
  component38Child: {
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
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
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
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    position: "absolute",
    fontWeight: "500",
    top: "15%",
    height: "70%",
  },
  wifiIcon: {
    width: 12,
    height: 9,
  },
  gs: {
    width: "4.53%",
    left: "11.73%",
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
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
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  icon: {
    display: "none",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  chevronLeft: {
    left: 16,
    top: 20,
    position: "absolute",
  },
  angleRight2Icon: {
    overflow: "hidden",
  },
  signUp: {
    fontSize: FontSize.heading1_size,
    textTransform: "capitalize",
    fontFamily: FontFamily.heading4,
    width: 223,
    marginLeft: 8,
    alignItems: "center",
  },
  angleRight2Parent: {
    top: 16,
    width: 327,
    alignItems: "center",
  },
  rectangleContainer: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  component38: {
    width: 375,
    height: 76,
    left: 0,
  },
  registerElderlySitter: {
    flex: 1,
    height: 1062,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default RegisterElderlySitter;
