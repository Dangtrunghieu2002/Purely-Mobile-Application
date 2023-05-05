import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
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
            style={[styles.chevronLeft, styles.angleIconLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <View style={[styles.angleRight2Parent, styles.parentFlexBox]}>
            <Image
              style={[styles.angleRight2Icon, styles.angleIconLayout]}
              resizeMode="cover"
              source={require("../assets/angleright-2.png")}
            />
            <Text style={[styles.signUp, styles.text1Typo]}>Notification</Text>
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
        <Text style={[styles.knowingHealthAlert, styles.knowingTypo]}>
          Knowing health alert
        </Text>
      </View>
      <View style={styles.notificationYouReceiveParent}>
        <Text style={[styles.notificationYouReceive, styles.gsFlexBox]}>
          Notification you receive
        </Text>
        <Pressable
          style={[styles.knowingHeathAltertParent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("NotiHealthIndex")}
        >
          <Text style={[styles.knowingHeathAltert, styles.knowingTypo]}>
            Knowing heath altert
          </Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.knowingHeathAltertParent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("NotiConnection")}
        >
          <Text style={[styles.knowingHeathAltert, styles.knowingTypo]}>
            Connecting with others
          </Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.knowingHeathAltertParent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("NotiElderlySitter")}
        >
          <Text style={[styles.knowingHeathAltert, styles.knowingTypo]}>
            Hiring elderly sitter
          </Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </Pressable>
        <View style={[styles.knowingHeathAltertParent, styles.parentFlexBox]}>
          <Text style={[styles.knowingHeathAltert, styles.knowingTypo]}>
            Reminding to drink pills
          </Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </View>
        <View style={[styles.knowingHeathAltertParent, styles.parentFlexBox]}>
          <Text style={[styles.knowingHeathAltert, styles.knowingTypo]}>
            Posting and commenting
          </Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </View>
        <View style={[styles.knowingHeathAltertParent, styles.parentFlexBox]}>
          <Text style={[styles.knowingHeathAltert, styles.knowingTypo]}>
            Messaging
          </Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </View>
        <View style={[styles.knowingHeathAltertParent, styles.parentFlexBox]}>
          <Text style={[styles.knowingHeathAltert, styles.knowingTypo]}>
            Attending events
          </Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </View>
        <View style={[styles.knowingHeathAltertParent, styles.parentFlexBox]}>
          <Text style={[styles.knowingHeathAltert, styles.knowingTypo]}>
            Following the news
          </Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </View>
        <View style={[styles.knowingHeathAltertParent, styles.parentFlexBox]}>
          <Text style={[styles.knowingHeathAltert, styles.knowingTypo]}>
            Updating your profil
          </Text>
          <Image
            style={[styles.angleRight1Icon, styles.angleIconLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-11.png")}
          />
        </View>
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
  angleIconLayout: {
    height: 16,
    width: 16,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupLayout: {
    height: 44,
    width: 355,
    position: "absolute",
  },
  groupItemPosition: {
    top: 16,
    position: "absolute",
  },
  knowingTypo: {
    fontFamily: FontFamily.text1,
    fontSize: FontSize.text1_size,
    textAlign: "left",
  },
  gsFlexBox: {
    textAlign: "left",
    color: Color.sub2,
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
    width: 327,
    alignItems: "center",
    top: 16,
    position: "absolute",
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
    left: 16,
    position: "absolute",
  },
  rectangleGroup: {
    top: 167,
    left: -405,
  },
  notificationYouReceive: {
    fontSize: FontSize.heading3_size,
    fontWeight: "600",
    fontFamily: FontFamily.heading3,
  },
  knowingHeathAltert: {
    color: Color.black,
    width: 311,
    alignItems: "center",
    display: "flex",
  },
  angleRight1Icon: {
    marginLeft: 16,
    overflow: "hidden",
  },
  knowingHeathAltertParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    marginTop: 24,
    alignItems: "center",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(26, 26, 26, 0.4)",
  },
  notificationYouReceiveParent: {
    marginLeft: -171.5,
    top: 100,
    left: "50%",
    position: "absolute",
  },
  notification: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Notification1;
