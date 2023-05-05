import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const ViewMode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewMode}>
      <View style={styles.component38}>
        <View style={[styles.component38Child, styles.childPosition]} />
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
          <View style={[styles.frameChild, styles.childBorder]} />
          <Pressable
            style={[styles.chevronLeft, styles.tick1Layout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <View style={[styles.angleRight2Parent, styles.groupItemPosition]}>
            <Image
              style={[styles.angleRight2Icon, styles.tick1Layout]}
              resizeMode="cover"
              source={require("../assets/angleright-2.png")}
            />
            <Text style={[styles.signUp, styles.text1Typo]}>Languages</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/vector-29.png")}
        />
        <Text style={styles.knowingHealthAlert}>Knowing health alert</Text>
      </View>
      <View
        style={[
          styles.chooseLanguagesToBeUsedParent,
          styles.component40Position,
        ]}
      >
        <Text style={styles.chooseLanguagesTo}>
          Choose languages to be used
        </Text>
        <View style={[styles.chineseWrapper, styles.childBorder]}>
          <Text style={[styles.chinese, styles.chineseTypo]}>Chinese</Text>
        </View>
        <View style={[styles.chineseWrapper, styles.childBorder]}>
          <Text style={[styles.english, styles.chineseTypo]}>English</Text>
          <View style={styles.tick1Wrapper}>
            <View style={styles.tick1Layout}>
              <View style={[styles.tick1Child, styles.childPosition]} />
              <Image
                style={[styles.tick1Item, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector-22.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.chineseWrapper, styles.childBorder]}>
          <Text style={[styles.chinese, styles.chineseTypo]}>French</Text>
        </View>
        <View style={[styles.chineseWrapper, styles.childBorder]}>
          <Text style={[styles.chinese, styles.chineseTypo]}>Korean</Text>
        </View>
        <View style={[styles.chineseWrapper, styles.childBorder]}>
          <Text style={[styles.chinese, styles.chineseTypo]}>Spanish</Text>
        </View>
        <View style={[styles.chineseWrapper, styles.childBorder]}>
          <Text style={[styles.chinese, styles.chineseTypo]}>Vietnamese</Text>
        </View>
      </View>
      <View style={[styles.component40, styles.component40Position]}>
        <View style={[styles.component40Child, styles.component40Layout]} />
        <Text style={[styles.textField, styles.textTypo]}>Save</Text>
        <View style={[styles.component40Item, styles.component40Layout]} />
        <Text style={[styles.textField1, styles.textTypo]}>Cancel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  childBorder: {
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  tick1Layout: {
    height: 16,
    width: 16,
  },
  groupItemPosition: {
    top: 16,
    position: "absolute",
  },
  groupLayout: {
    height: 44,
    width: 355,
    position: "absolute",
  },
  component40Position: {
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  chineseTypo: {
    color: Color.black,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  component40Layout: {
    borderRadius: Border.br_5xs,
    width: "47.67%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    top: "50%",
    marginTop: -13,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    left: "50%",
    position: "absolute",
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
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
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
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.sFUITextRegular,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
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
    width: "100%",
    top: "0%",
    height: "100%",
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
    top: 20,
    left: 16,
    width: 16,
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
    left: 24,
    alignItems: "center",
    flexDirection: "row",
    width: 327,
  },
  rectangleParent: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  component38: {
    left: 1,
    width: 375,
    height: 76,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderColor: "rgba(83, 145, 101, 0.4)",
    borderBottomWidth: 1,
    borderStyle: "solid",
    width: 355,
    top: 0,
    backgroundColor: Color.white,
  },
  groupItem: {
    left: 333,
    width: 6,
    height: 12,
  },
  knowingHealthAlert: {
    top: 15,
    color: Color.seagreen,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    top: 167,
    left: -405,
  },
  chooseLanguagesTo: {
    width: 343,
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
  },
  chinese: {
    width: 327,
  },
  chineseWrapper: {
    padding: Padding.p_5xs,
    marginTop: 24,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  english: {
    width: 287,
  },
  tick1Child: {
    borderRadius: Border.br_12xs,
    backgroundColor: Color.sub2,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tick1Item: {
    height: "65.87%",
    width: "76.25%",
    top: "16.87%",
    right: "11.88%",
    bottom: "17.26%",
    left: "11.87%",
    borderRadius: Border.br_12xs_1,
  },
  tick1Wrapper: {
    padding: Padding.p_9xs,
    marginLeft: 16,
    flexDirection: "row",
  },
  chooseLanguagesToBeUsedParent: {
    top: 100,
  },
  component40Child: {
    right: "0.15%",
    left: "52.19%",
    backgroundColor: Color.skyblue_200,
  },
  textField: {
    marginLeft: 63.5,
    color: Color.white,
  },
  component40Item: {
    right: "52.33%",
    backgroundColor: Color.gainsboro,
    left: "0%",
  },
  textField1: {
    marginLeft: -127.5,
    color: Color.dimgray,
  },
  component40: {
    bottom: 24,
    height: 48,
    width: 343,
  },
  viewMode: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ViewMode;
