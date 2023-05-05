import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setting}>
      <View style={[styles.accountParent, styles.component33Position]}>
        <Text style={styles.accountTypo}>Account</Text>
        <Pressable
          style={[styles.user1Parent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.user1Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/user-1.png")}
          />
          <Text style={styles.profile}>Profile</Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.user1Parent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("Connections")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={styles.profile}>Connection</Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </Pressable>
        <View style={[styles.user1Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.user1Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/creditcard.png")}
          />
          <Text style={styles.profile}>Payment</Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </View>
        <Pressable
          style={[styles.user1Parent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("RegisterElderlySitter")}
        >
          <Image
            style={[styles.register1Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/register-1.png")}
          />
          <Text style={styles.profile}>Register to be Elderly Sitter</Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </Pressable>
        <View style={styles.settingParent}>
          <Text style={[styles.setting1, styles.parentPosition]}>Setting</Text>
          <View style={[styles.smartwatchParent, styles.parentPosition]}>
            <Image
              style={[styles.user1Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/smartwatch.png")}
            />
            <Text style={styles.profile}>Device</Text>
            <Image
              style={[styles.angleRight1Icon, styles.angleLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-11.png")}
            />
          </View>
          <Pressable
            style={[styles.bell1Parent, styles.parentPosition]}
            onPress={() => navigation.navigate("Notification")}
          >
            <Image
              style={[styles.user1Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/bell-1.png")}
            />
            <Text style={styles.profile}>Notification</Text>
            <Image
              style={[styles.angleRight1Icon, styles.angleLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-11.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.viewmodeParent, styles.parentPosition]}
            onPress={() => navigation.navigate("Language")}
          >
            <Image
              style={[styles.user1Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/viewmode.png")}
            />
            <Text style={styles.profile}>Appearance</Text>
            <Image
              style={[styles.angleRight1Icon, styles.angleLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-11.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.globalParent, styles.parentPosition]}
            onPress={() => navigation.navigate("ViewMode")}
          >
            <Image
              style={[styles.user1Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/global.png")}
            />
            <Text style={styles.profile}>Language</Text>
            <Image
              style={[styles.angleRight1Icon, styles.angleLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-11.png")}
            />
          </Pressable>
          <View style={[styles.shieldParent, styles.parentPosition]}>
            <Image
              style={[styles.user1Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/shield.png")}
            />
            <Text style={styles.profile}>Privacy</Text>
            <Image
              style={[styles.angleRight1Icon, styles.angleLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-11.png")}
            />
          </View>
          <View style={[styles.information1Parent, styles.parentPosition]}>
            <Image
              style={[styles.user1Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/information-1.png")}
            />
            <Text style={styles.profile}>Using instruction</Text>
            <Image
              style={[styles.angleRight1Icon, styles.angleLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-11.png")}
            />
          </View>
          <View style={[styles.optionParent, styles.parentPosition]}>
            <Image
              style={[styles.user1Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/option.png")}
            />
            <Text style={styles.profile}>Using instruction</Text>
            <Image
              style={[styles.angleRight1Icon, styles.angleLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-11.png")}
            />
          </View>
        </View>
        <View style={styles.helpCenterParent}>
          <Text style={styles.helpCenterTypo}>Help center</Text>
          <Text style={[styles.privacyPolicy, styles.helpCenterTypo]}>
            Privacy policy
          </Text>
          <Text style={[styles.privacyPolicy, styles.helpCenterTypo]}>
            Accessibility
          </Text>
          <Text style={[styles.privacyPolicy, styles.helpCenterTypo]}>
            User Agreement
          </Text>
          <Text style={[styles.privacyPolicy, styles.helpCenterTypo]}>
            End user agreement
          </Text>
          <Text style={[styles.privacyPolicy, styles.helpCenterTypo]}>
            Delete account
          </Text>
        </View>
      </View>
      <View style={[styles.users11, styles.iconLayout1]} />
      <Pressable
        style={[styles.component33, styles.component33Position]}
        onPress={() => navigation.navigate("LogIn1")}
      >
        <View style={[styles.component33Child, styles.childPosition]} />
        <Text style={styles.textField}>Sign out</Text>
      </Pressable>
      <View style={[styles.header3, styles.parentPosition]}>
        <View style={[styles.header3Child, styles.childPosition]} />
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
        <View style={[styles.rectangleParent, styles.childPosition]}>
          <View style={[styles.frameChild, styles.childPosition]} />
          <Pressable
            style={[styles.chevronLeft, styles.angleLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <View style={[styles.angleRight2Parent, styles.parentFlexBox]}>
            <Pressable
              style={styles.angleLayout}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/angleright-2.png")}
              />
            </Pressable>
            <Text style={[styles.profile1, styles.text1Typo]}>Profile</Text>
            <Image
              style={[styles.chat1Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/chat-1.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component33Position: {
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  angleLayout: {
    height: 16,
    width: 16,
  },
  parentPosition: {
    left: 0,
    position: "absolute",
  },
  helpCenterTypo: {
    fontSize: FontSize.notice_size,
    width: 327,
    height: 19,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  accountTypo: {
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
  },
  user1Icon: {
    overflow: "hidden",
  },
  profile: {
    fontSize: FontSize.heading4_size,
    lineHeight: 27,
    fontFamily: FontFamily.text1,
    marginLeft: 16,
    height: 19,
    display: "flex",
    width: 271,
    alignItems: "center",
    textAlign: "left",
    color: Color.sub2,
  },
  angleRight1Icon: {
    marginLeft: 16,
    overflow: "hidden",
  },
  user1Parent: {
    marginTop: 24,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  register1Icon: {
    borderRadius: 4,
    overflow: "hidden",
  },
  setting1: {
    top: -5,
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
  },
  smartwatchParent: {
    top: 40,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: Padding.p_5xs,
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  bell1Parent: {
    top: 96,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: Padding.p_5xs,
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  viewmodeParent: {
    top: 152,
    height: 30,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: Padding.p_5xs,
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  globalParent: {
    top: 206,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: Padding.p_5xs,
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  shieldParent: {
    top: 262,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: Padding.p_5xs,
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  information1Parent: {
    top: 318,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: Padding.p_5xs,
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  optionParent: {
    top: 374,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: Padding.p_5xs,
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
  },
  settingParent: {
    height: 406,
    width: 327,
    marginTop: 24,
  },
  privacyPolicy: {
    marginTop: 16,
  },
  helpCenterParent: {
    width: 343,
    marginTop: 24,
  },
  accountParent: {
    top: 100,
    justifyContent: "center",
  },
  users11: {
    top: 288,
    left: 252,
    position: "absolute",
    overflow: "hidden",
  },
  component33Child: {
    borderRadius: Border.br_5xs,
    borderColor: "#49c6e5",
    borderWidth: 1,
    left: "0%",
    top: "0%",
    height: "100%",
    borderStyle: "solid",
    bottom: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  textField: {
    marginTop: -13,
    marginLeft: -44.5,
    top: "50%",
    color: Color.skyblue_200,
    textAlign: "center",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    left: "50%",
    position: "absolute",
  },
  component33: {
    bottom: 24,
    height: 48,
    width: 343,
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
    left: "0%",
    top: "0%",
    height: "100%",
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    bottom: "0%",
    borderStyle: "solid",
    position: "absolute",
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
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  profile1: {
    fontSize: FontSize.heading1_size,
    fontFamily: FontFamily.heading4,
    marginLeft: 8,
    fontWeight: "500",
    width: 271,
    alignItems: "center",
  },
  chat1Icon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  angleRight2Parent: {
    top: 12,
    left: 24,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
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
    width: 375,
    height: 76,
  },
  setting: {
    flex: 1,
    height: 1076,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Setting;
