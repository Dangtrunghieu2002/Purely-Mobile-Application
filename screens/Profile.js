import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={[styles.generalInformationParent, styles.parentPosition]}>
        <Text style={styles.generalInformation}>General Information</Text>
        <View style={styles.component37}>
          <View style={[styles.component37Child, styles.childPosition]} />
          <Text style={[styles.textFill, styles.textTypo1]}>
            Community Healthcare
          </Text>
          <View style={[styles.titleParent, styles.parentFlexBox]}>
            <Text style={[styles.title, styles.titleTypo]}>Full name</Text>
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
          <Text style={[styles.textFill1, styles.textTypo1]}>Female</Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <Text style={[styles.title1, styles.titleTypo]}>Gender</Text>
        </View>
        <View style={styles.component371}>
          <View
            style={[styles.textField4Child, styles.component37ItemPosition]}
          />
          <Text style={[styles.textFill2, styles.textTypo1]}>27/09/1088</Text>
          <Image
            style={[styles.angleDown2Icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <View style={styles.titleGroup}>
            <Text style={[styles.title, styles.titleTypo]}>Date of Birth</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <View style={styles.textField6}>
          <View style={[styles.textField6Child, styles.textChildPosition]} />
          <Text style={[styles.textFill3, styles.textTypo1]}>Location</Text>
        </View>
        <View style={styles.component371}>
          <View
            style={[styles.textField4Child, styles.component37ItemPosition]}
          />
          <Text style={[styles.textFill2, styles.textTypo1]}>
            Indentity Card
          </Text>
          <Image
            style={[styles.angleDown2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <Text style={[styles.title1, styles.titleTypo]}>Identification</Text>
        </View>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={styles.add2Icon}
            resizeMode="cover"
            source={require("../assets/add-2.png")}
          />
        </View>
      </View>
      <View style={[styles.healthStatusParent, styles.parentPosition]}>
        <Text style={styles.generalInformation}>Health Status</Text>
        <View style={styles.textField6}>
          <View style={[styles.textField6Child, styles.textChildPosition]} />
          <Text style={[styles.textFill3, styles.textTypo1]}>Weight</Text>
          <Image
            style={[styles.angleDown2Icon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={styles.textField6}>
          <View style={[styles.textField6Child, styles.textChildPosition]} />
          <Text style={[styles.textFill3, styles.textTypo1]}>Height</Text>
          <Image
            style={[styles.angleDown2Icon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
        </View>
        <View style={styles.component371}>
          <View
            style={[styles.component37Item, styles.component37ItemPosition]}
          />
          <Text style={[styles.textFill1, styles.textTypo1]}>
            Allergies, Stomach Aches
          </Text>
          <Image
            style={[styles.angleDown2Icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/angledown-21.png")}
          />
          <View style={styles.titleGroup}>
            <Text style={[styles.title, styles.titleTypo]}>
              Background disease
            </Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.component38, styles.groupChildPosition]}>
        <View style={[styles.component38Child, styles.textChildPosition]} />
        <View style={[styles.statusBarwhitebase, styles.textChildPosition]}>
          <Image
            style={[styles.backgroundIcon, styles.textChildPosition]}
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
        <View style={[styles.rectangleGroup, styles.backgroundIconPosition]}>
          <View style={[styles.frameChild, styles.textChildPosition]} />
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
          <Pressable
            style={[styles.angleRight2Parent, styles.parentFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.angleRight2Icon, styles.chevronLeftLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-2.png")}
            />
            <Text style={[styles.signUp, styles.text1Typo]}>Profile</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={[styles.component31, styles.parentPosition]}
        onPress={() => navigation.navigate("Setting")}
      >
        <View style={[styles.component31Child, styles.component31Layout]} />
        <Text style={[styles.textField, styles.textTypo]}>Save</Text>
        <View style={[styles.component31Item, styles.component31Layout]} />
        <Text style={[styles.textField1, styles.textTypo]}>Cancel</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  childPosition: {
    borderStyle: "solid",
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
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  titleTypo: {
    fontSize: FontSize.notice_size,
    color: Color.dimgray,
    textAlign: "left",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  component37ItemPosition: {
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textChildPosition: {
    top: "0%",
    left: "0%",
  },
  groupChildLayout: {
    height: 70,
    width: 130,
  },
  groupChildPosition: {
    top: 0,
    left: 0,
    position: "absolute",
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
  backgroundIconPosition: {
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  component31Layout: {
    width: "47.67%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_5xs,
    bottom: "0%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    marginTop: -13,
    top: "50%",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    left: "50%",
    position: "absolute",
  },
  generalInformation: {
    textAlign: "left",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    color: Color.sub2,
  },
  component37Child: {
    height: "65.67%",
    top: "34.33%",
    borderWidth: 1,
    borderColor: "#1a1a1a",
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    left: "0%",
  },
  textFill: {
    top: "56.72%",
    color: Color.sub2,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    left: "7%",
  },
  title: {
    color: Color.dimgray,
  },
  mdirequiredIcon: {
    width: 4,
    height: 4,
    marginLeft: 4,
    overflow: "hidden",
  },
  titleParent: {
    left: 0,
    top: 1,
  },
  component37: {
    height: 67,
    marginTop: 16,
    width: 343,
  },
  component37Item: {
    borderColor: "#1a1a1a",
  },
  textFill1: {
    top: "55.38%",
    color: Color.sub2,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    left: "7%",
  },
  angleDown2Icon: {
    bottom: "20%",
    left: "88.34%",
    right: "7%",
    width: "4.66%",
    maxWidth: "100%",
    height: "24.62%",
    top: "55.38%",
  },
  title1: {
    color: Color.dimgray,
    left: 0,
    top: 1,
    position: "absolute",
  },
  component371: {
    height: 65,
    marginTop: 16,
    width: 343,
  },
  textField4Child: {
    borderColor: "#333",
  },
  textFill2: {
    color: Color.sub3,
    top: "55.38%",
  },
  angleDown2Icon1: {
    top: "53.85%",
    bottom: "21.54%",
    left: "88.34%",
    right: "7%",
    width: "4.66%",
    maxWidth: "100%",
    height: "24.62%",
  },
  titleGroup: {
    marginTop: -31.5,
    top: "50%",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  textField6Child: {
    borderColor: "#a3a3a3",
    height: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    borderRadius: Border.br_5xs,
  },
  textFill3: {
    top: "34.09%",
    color: Color.darkgray_100,
  },
  textField6: {
    height: 44,
    marginTop: 16,
    width: 343,
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: "#666",
    height: 70,
    width: 130,
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
  rectangleParent: {
    marginTop: 16,
  },
  generalInformationParent: {
    top: 100,
  },
  angleDown2Icon3: {
    height: "36.36%",
    top: "31.82%",
    bottom: "31.82%",
    left: "88.34%",
    right: "7%",
    width: "4.66%",
    maxWidth: "100%",
  },
  healthStatusParent: {
    top: 612,
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
    height: "100%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    bottom: "0%",
    right: "0%",
    width: "100%",
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
    top: "0%",
    left: "0%",
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
    width: 8,
    height: 13,
    opacity: 0.45,
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
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  frameChild: {
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    height: "100%",
    borderStyle: "solid",
    bottom: "0%",
    right: "0%",
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
    left: 24,
    width: 327,
    alignItems: "center",
  },
  rectangleGroup: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  component38: {
    width: 375,
    height: 76,
  },
  component31Child: {
    right: "0.15%",
    left: "52.19%",
    backgroundColor: Color.skyblue_200,
  },
  textField: {
    marginLeft: 63.5,
    color: Color.white,
  },
  component31Item: {
    right: "52.33%",
    backgroundColor: Color.gainsboro,
    left: "0%",
  },
  textField1: {
    marginLeft: -127.5,
    color: Color.dimgray,
  },
  component31: {
    bottom: 24,
    height: 48,
    width: 343,
  },
  profile: {
    flex: 1,
    height: 924,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Profile;
