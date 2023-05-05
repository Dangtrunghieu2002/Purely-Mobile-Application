import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const RegisterConfirm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerConfirm}>
      <View style={[styles.workExperienceParent, styles.parentPosition]}>
        <Text style={[styles.workExperience, styles.titleTypo]}>
          Work Experience
        </Text>
        <View style={[styles.textField4, styles.textLayout]}>
          <View style={[styles.textField4Child, styles.groupChildLayout1]} />
          <Text style={[styles.textFill, styles.textTypo1]}>Current Job</Text>
        </View>
        <View style={[styles.textField4, styles.textLayout]}>
          <View style={[styles.textField4Child, styles.groupChildLayout1]} />
          <Text style={[styles.textFill, styles.textTypo1]}>
            Year of Experience
          </Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.introduceYourself, styles.textTypo1]}>
            Introduce Yourself
          </Text>
        </View>
      </View>
      <View style={[styles.generalInformationParent, styles.parentPosition]}>
        <Text style={[styles.workExperience, styles.titleTypo]}>
          General Information
        </Text>
        <View style={[styles.component37, styles.component37Layout]}>
          <View style={[styles.component37Child, styles.component37Border]} />
          <Text style={[styles.textFill2, styles.textTypo2]}>
            Community Healthcare
          </Text>
          <View style={[styles.titleParent, styles.titlePosition]}>
            <Text style={[styles.title, styles.titleClr]}>Full name</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <View style={styles.component371}>
          <View
            style={[styles.component37Item, styles.component37ItemPosition]}
          />
          <Text style={[styles.textFill3, styles.textTypo2]}>Female</Text>
          <Image
            style={[styles.angleDown2Icon1, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <Text style={[styles.title1, styles.titleClr]}>Gender</Text>
        </View>
        <View style={[styles.component37, styles.component37Layout]}>
          <View style={[styles.textField41, styles.component37Layout]}>
            <View style={[styles.textField4Item, styles.textBorder]} />
            <Text style={[styles.textFill4, styles.textTypo]}>27/09/1088</Text>
            <View style={[styles.titleParent, styles.titlePosition]}>
              <Text style={[styles.title, styles.titleClr]}>Date of Birth</Text>
              <Image
                style={styles.mdirequiredIcon}
                resizeMode="cover"
                source={require("../assets/mdirequired.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.uilcalendarAltIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/uilcalendaralt.png")}
          />
        </View>
        <View style={[styles.textField6, styles.textLayout]}>
          <View style={[styles.textField4Child, styles.groupChildLayout1]} />
          <View style={styles.textFillParent}>
            <Text style={styles.textTypo1}>Location</Text>
            <Image
              style={styles.mdirequiredIcon2}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
        </View>
        <View style={[styles.textField6, styles.textLayout]}>
          <View style={[styles.textField4Child, styles.groupChildLayout1]} />
          <View style={styles.textFillParent}>
            <Text style={styles.textTypo1}>Skills</Text>
            <Image
              style={styles.mdirequiredIcon2}
              resizeMode="cover"
              source={require("../assets/mdirequired1.png")}
            />
          </View>
        </View>
        <View style={[styles.textField4, styles.textLayout]}>
          <View style={[styles.textField4Child, styles.groupChildLayout1]} />
          <Text style={[styles.textFill, styles.textTypo1]}>
            Diploma or Certificate
          </Text>
        </View>
        <View style={styles.component371}>
          <View style={[styles.textField7Child, styles.textBorder]} />
          <Text style={[styles.textFill8, styles.textTypo]}>
            Indentity Card
          </Text>
          <Image
            style={[styles.angleDown2Icon2, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <View style={styles.titleContainer}>
            <Text style={[styles.title, styles.titleClr]}>Title</Text>
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
            style={[styles.add2Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/add-2.png")}
          />
        </View>
      </View>
      <View style={styles.component32}>
        <View style={[styles.component32Child, styles.component321Bg]} />
        <Text style={styles.textField}>Register</Text>
      </View>
      <View style={[styles.component38, styles.component38Position]}>
        <View style={[styles.component38Child, styles.childShadowBox]} />
        <View style={styles.statusBarwhitebase}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.gsPosition]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout2]}
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
            style={[styles.signalIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.childPosition]}>
          <View style={styles.frameChild} />
          <Pressable
            style={[styles.chevronLeft, styles.iconLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <View style={[styles.angleRight2Parent, styles.cross1IconPosition]}>
            <Image
              style={[styles.angleRight2Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-2.png")}
            />
            <Text style={[styles.signUp, styles.text1Typo]}>{`Register `}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.registerConfirmChild, styles.component38Position]} />
      <View style={[styles.notification, styles.notificationLayout]}>
        <View style={[styles.notificationChild, styles.notificationLayout]} />
        <Pressable
          style={[styles.groupParent, styles.chevronLeftPosition]}
          onPress={() => navigation.navigate("User3Profile2")}
        >
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-10029.png")}
          />
          <Text style={[styles.yourRegisterForm, styles.weWillResponseFlexBox]}>
            Your register form has been successfully sent!
          </Text>
          <Text style={[styles.weWillResponse, styles.weWillResponseFlexBox]}>
            We will response your apply soon!
          </Text>
          <View style={[styles.component321, styles.component321Bg]}>
            <Text style={styles.textField1}>I understood</Text>
          </View>
        </Pressable>
        <Image
          style={[styles.cross1Icon, styles.cross1IconPosition]}
          resizeMode="cover"
          source={require("../assets/cross-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  titleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  textLayout: {
    height: 44,
    marginTop: 16,
    width: 343,
  },
  groupChildLayout1: {
    borderWidth: 1,
    position: "absolute",
  },
  textTypo1: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    textAlign: "left",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 80,
    width: 327,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  component37Layout: {
    height: 67,
    width: 343,
  },
  component37Border: {
    borderColor: "#1a1a1a",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo2: {
    fontSize: FontSize.text1_size,
    fontFamily: FontFamily.text1,
    left: "7%",
    textAlign: "left",
    color: Color.sub2,
    position: "absolute",
  },
  titlePosition: {
    top: 1,
    left: 0,
    position: "absolute",
  },
  titleClr: {
    color: Color.dimgray,
    fontSize: FontSize.notice_size,
  },
  component37ItemPosition: {
    top: "32.31%",
    height: "67.69%",
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
  textBorder: {
    borderColor: "#333",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    color: Color.sub3,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    left: "7%",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 70,
    width: 130,
  },
  component321Bg: {
    backgroundColor: Color.skyblue_200,
    borderRadius: Border.br_5xs,
  },
  component38Position: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
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
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  cross1IconPosition: {
    top: 16,
    position: "absolute",
  },
  notificationLayout: {
    height: 259,
    width: 327,
    position: "absolute",
  },
  chevronLeftPosition: {
    left: 16,
    position: "absolute",
  },
  weWillResponseFlexBox: {
    justifyContent: "center",
    marginTop: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  workExperience: {
    color: Color.sub2,
    fontSize: FontSize.heading3_size,
    textAlign: "left",
  },
  textField4Child: {
    borderColor: "#a3a3a3",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
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
    height: 80,
    width: 327,
    borderWidth: 1,
    position: "absolute",
    borderColor: "#a3a3a3",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  introduceYourself: {
    top: 13,
    left: 24,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 16,
  },
  workExperienceParent: {
    top: 731,
  },
  component37Child: {
    top: "34.33%",
    height: "65.67%",
  },
  textFill2: {
    top: "56.72%",
    fontFamily: FontFamily.text1,
  },
  title: {
    textAlign: "left",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  mdirequiredIcon: {
    width: 4,
    height: 4,
    marginLeft: 4,
    overflow: "hidden",
  },
  titleParent: {
    flexDirection: "row",
  },
  component37: {
    marginTop: 16,
  },
  component37Item: {
    borderColor: "#1a1a1a",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textFill3: {
    top: "55.38%",
    fontFamily: FontFamily.text1,
  },
  angleDown2Icon1: {
    bottom: "20%",
    top: "55.38%",
  },
  title1: {
    top: 1,
    left: 0,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  component371: {
    height: 65,
    marginTop: 16,
    width: 343,
  },
  textField4Item: {
    top: "34.33%",
    height: "65.67%",
  },
  textFill4: {
    top: "56.72%",
  },
  textField41: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  uilcalendarAltIcon: {
    top: 32,
    left: 287,
  },
  mdirequiredIcon2: {
    height: 8,
    marginLeft: 3,
    width: 8,
    overflow: "hidden",
  },
  textFillParent: {
    top: 15,
    flexDirection: "row",
    left: 24,
    position: "absolute",
  },
  textField6: {
    marginTop: 16,
    overflow: "hidden",
  },
  textField7Child: {
    top: "32.31%",
    height: "67.69%",
  },
  textFill8: {
    top: "55.38%",
  },
  angleDown2Icon2: {
    top: "53.85%",
    bottom: "21.54%",
  },
  titleContainer: {
    marginTop: -31.5,
    top: "50%",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: "#666",
    left: 0,
    top: 0,
    borderWidth: 1,
    position: "absolute",
  },
  add2Icon: {
    top: 23,
    left: 53,
  },
  rectangleGroup: {
    marginTop: 16,
  },
  generalInformationParent: {
    top: 100,
  },
  component32Child: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textField: {
    marginTop: -13,
    marginLeft: -44.5,
    textAlign: "center",
    color: Color.white,
    top: "50%",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    left: "50%",
    position: "absolute",
  },
  component32: {
    top: 987,
    height: 48,
    left: 24,
    width: 343,
    position: "absolute",
  },
  component38Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
    display: "flex",
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
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
    display: "flex",
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
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
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
    alignItems: "center",
    flexDirection: "row",
    left: 24,
    width: 327,
    top: 16,
  },
  rectangleContainer: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  component38: {
    height: 76,
  },
  registerConfirmChild: {
    backgroundColor: Color.darkgray_200,
    height: 812,
  },
  notificationChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    borderRadius: Border.br_5xs,
    height: 259,
  },
  frameItem: {
    width: 40,
    height: 40,
  },
  yourRegisterForm: {
    width: 295,
    marginTop: 24,
    color: Color.sub2,
    fontSize: FontSize.heading3_size,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    justifyContent: "center",
  },
  weWillResponse: {
    width: 263,
    marginTop: 24,
    color: Color.dimgray,
    fontSize: FontSize.notice_size,
    fontFamily: FontFamily.text1,
  },
  textField1: {
    color: Color.white,
    fontSize: FontSize.notice_size,
    textAlign: "left",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  component321: {
    padding: Padding.p_base,
    marginTop: 24,
    flexDirection: "row",
  },
  groupParent: {
    top: 24,
    alignItems: "center",
  },
  cross1Icon: {
    left: 295,
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  notification: {
    top: 277,
    left: 24,
  },
  registerConfirm: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default RegisterConfirm;
