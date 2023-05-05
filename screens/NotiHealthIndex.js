import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const NotiHealthIndex = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notiHealthIndex}>
      <View style={styles.component39}>
        <View style={[styles.component39Child, styles.childPosition]} />
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
          <View style={[styles.frameChild, styles.frameChildBorder]} />
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
          <View
            style={[styles.angleRight2Parent, styles.healthIndexAlertLayout]}
          >
            <Image
              style={[styles.angleRight2Icon, styles.chevronLeftLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-2.png")}
            />
            <Text style={[styles.signUp, styles.text1Typo]}>Health Alert</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.allowHealthAlertNotificatioParent}>
          <Text style={[styles.allowHealthAlert, styles.allFlexBox]}>
            Allow health alert notifications
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-100281.png")}
          />
        </View>
        <View
          style={[
            styles.healthIndexAlertAtSpecificParent,
            styles.frameChildBorder,
          ]}
        >
          <Text style={[styles.healthIndexAlert, styles.healthTypo]}>
            Health index alert at specific time
          </Text>
          <View style={styles.allParent}>
            <Text style={[styles.all, styles.allFlexBox]}>Call</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-100281.png")}
            />
          </View>
          <View style={styles.allParent}>
            <Text style={[styles.all, styles.allFlexBox]}>Push</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-100281.png")}
            />
          </View>
          <View style={styles.allParent}>
            <Text style={[styles.all, styles.allFlexBox]}>In-app</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-100281.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.healthIndexAlertAtSpecificParent,
            styles.frameChildBorder,
          ]}
        >
          <Text style={[styles.healthIndexAlert, styles.healthTypo]}>
            Average health index alert
          </Text>
          <View style={styles.allParent}>
            <Text style={[styles.all, styles.allFlexBox]}>Call</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-100281.png")}
            />
          </View>
          <View style={styles.allParent}>
            <Text style={[styles.all, styles.allFlexBox]}>Push</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-100281.png")}
            />
          </View>
          <View style={styles.allParent}>
            <Text style={[styles.all, styles.allFlexBox]}>In-app</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-100281.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.component391, styles.frameParentPosition]}>
        <View style={[styles.component39Item, styles.component39Layout]} />
        <Text style={[styles.textField, styles.textTypo]}>Save</Text>
        <View style={[styles.component39Inner, styles.component39Layout]} />
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
  frameChildBorder: {
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  healthIndexAlertLayout: {
    width: 327,
    alignItems: "center",
  },
  frameParentPosition: {
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  allFlexBox: {
    zIndex: 1,
    width: 303,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  healthTypo: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    color: Color.sub2,
  },
  component39Layout: {
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
  component39Child: {
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
  component39: {
    top: 0,
    left: 0,
    width: 375,
    height: 76,
    position: "absolute",
  },
  allowHealthAlert: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
    color: Color.sub2,
  },
  frameItem: {
    width: 24,
    height: 24,
    zIndex: 0,
    marginLeft: 16,
  },
  allowHealthAlertNotificatioParent: {
    flexDirection: "row",
  },
  healthIndexAlert: {
    alignItems: "center",
    width: 327,
    display: "flex",
    textAlign: "left",
  },
  all: {
    fontSize: FontSize.text1_size,
    fontFamily: FontFamily.text1,
    color: Color.dimgray,
  },
  allParent: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  healthIndexAlertAtSpecificParent: {
    borderColor: "rgba(83, 145, 101, 0.4)",
    paddingBottom: Padding.p_5xs,
    marginTop: 24,
  },
  frameParent: {
    top: 100,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  component39Item: {
    right: "0.15%",
    left: "52.19%",
    backgroundColor: Color.skyblue_200,
  },
  textField: {
    marginLeft: 63.5,
    color: Color.white,
  },
  component39Inner: {
    right: "52.33%",
    backgroundColor: Color.gainsboro,
    left: "0%",
  },
  textField1: {
    marginLeft: -127.5,
    color: Color.dimgray,
  },
  component391: {
    bottom: 24,
    width: 343,
    height: 48,
  },
  notiHealthIndex: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default NotiHealthIndex;
