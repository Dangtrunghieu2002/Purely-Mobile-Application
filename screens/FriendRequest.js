import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const FriendRequest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.friendRequest}>
      <View style={[styles.component28, styles.iconLayout1]}>
        <View style={styles.rectangleLayout}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.home1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/home-11.png")}
          />
        </View>
        <View style={styles.rectangleLayout}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.home1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/pharmacy-2.png")}
          />
        </View>
        <View style={styles.rectangleLayout}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.home1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/handholdingheart-2.png")}
          />
        </View>
        <View style={styles.rectangleLayout}>
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.groupChildPosition]}
            locations={[0, 1]}
            colors={["rgba(84, 222, 253, 0.4)", "rgba(84, 222, 253, 0)"]}
            useAngle={true}
            angle={182.07}
          />
          <Image
            style={[styles.home1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/users-1-2.png")}
          />
        </View>
        <View style={styles.rectangleLayout}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.home1Icon, styles.chat1Layout]}
            resizeMode="cover"
            source={require("../assets/bell.png")}
          />
        </View>
      </View>
      <View style={styles.component42Parent}>
        <View style={[styles.component42, styles.component42FlexBox]}>
          <Image
            style={styles.component42Child}
            resizeMode="cover"
            source={require("../assets/rectangle-34624354.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={styles.mariBones}>Mari Bones</Text>
            <View style={styles.frameParent}>
              <View style={[styles.accecptWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.accecpt, styles.deleteTypo]}>Accecpt</Text>
              </View>
              <View style={[styles.deleteWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.delete, styles.deleteTypo]}>Delete</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameViewShadowBox}>
          <Image
            style={styles.component42Child}
            resizeMode="cover"
            source={require("../assets/rectangle-34624354.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={styles.mariBones}>Coco Champbell</Text>
            <View style={styles.frameParent}>
              <View style={[styles.accecptWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.accecpt, styles.deleteTypo]}>Accecpt</Text>
              </View>
              <View style={[styles.deleteWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.delete, styles.deleteTypo]}>Delete</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameViewShadowBox}>
          <Image
            style={styles.component42Child}
            resizeMode="cover"
            source={require("../assets/rectangle-34624354.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={styles.mariBones}>Keany Harp</Text>
            <View style={styles.frameParent}>
              <View style={[styles.accecptWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.accecpt, styles.deleteTypo]}>Accecpt</Text>
              </View>
              <View style={[styles.deleteWrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.delete, styles.deleteTypo]}>Delete</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.component38, styles.groupChildPosition]}>
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
          <Text style={[styles.text1, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleParent3, styles.childPosition]}>
          <View style={[styles.frameChild, styles.childPosition]} />
          <Pressable
            style={[styles.chevronLeft, styles.chevronLeftLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <View style={[styles.angleRight2Parent, styles.component42FlexBox]}>
            <Pressable
              style={styles.chevronLeftLayout}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/angleright-2.png")}
              />
            </Pressable>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("Setting")}
            >
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/ellipse-1595.png")}
              />
            </Pressable>
            <Text style={styles.signUp}>Friend request</Text>
            <Pressable
              style={[styles.chat1, styles.chat1Layout]}
              onPress={() => navigation.navigate("ChatHome")}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/chat-12.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    display: "none",
    width: "100%",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  chat1Layout: {
    height: 24,
    width: 24,
  },
  component42FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 104,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  deleteTypo: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.notice_size,
    textAlign: "left",
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
    color: Color.sub2,
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  groupChild: {
    height: 56,
    width: 75,
    backgroundColor: Color.white,
  },
  home1Icon: {
    top: 16,
    left: 25,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 56,
    width: 75,
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    borderColor: "#49c6e5",
    borderTopWidth: 1.5,
    height: 56,
    width: 75,
    borderStyle: "solid",
  },
  component28: {
    bottom: 0,
    borderColor: "#666",
    borderTopWidth: 1,
    flexDirection: "row",
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  component42Child: {
    borderRadius: Border.br_17xl,
    width: 72,
    height: 72,
  },
  mariBones: {
    fontSize: FontSize.heading4_size,
    width: 239,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    color: Color.sub3,
    alignItems: "center",
  },
  accecpt: {
    color: Color.white,
  },
  accecptWrapper: {
    backgroundColor: Color.skyblue_100,
  },
  delete: {
    color: Color.sub3,
    fontWeight: "600",
    fontSize: FontSize.notice_size,
  },
  deleteWrapper: {
    backgroundColor: Color.whitesmoke,
    marginLeft: 8,
  },
  frameParent: {
    marginTop: 12,
    flexDirection: "row",
  },
  mariBonesParent: {
    marginLeft: 16,
    justifyContent: "center",
  },
  component42: {
    padding: Padding.p_5xs,
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(26, 26, 26, 0.12)",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  frameViewShadowBox: {
    marginTop: 24,
    alignItems: "center",
    padding: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 9,
    shadowRadius: 9,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(26, 26, 26, 0.12)",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  component42Parent: {
    marginLeft: -171.5,
    top: 100,
    left: "50%",
    justifyContent: "center",
    position: "absolute",
  },
  component38Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    bottom: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    bottom: "0%",
    left: "0%",
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
    top: "0%",
    height: "100%",
    left: "0%",
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
    top: "15%",
    height: "70%",
    fontWeight: "500",
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
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  frameChild: {
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    top: "0%",
    height: "100%",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
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
  icon2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 70,
    height: 70,
    marginLeft: 8,
  },
  signUp: {
    fontSize: FontSize.heading1_size,
    textTransform: "capitalize",
    width: 223,
    color: Color.sub2,
    marginLeft: 8,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    alignItems: "center",
  },
  chat1: {
    marginLeft: 8,
  },
  angleRight2Parent: {
    top: 8,
    left: 24,
    position: "absolute",
  },
  rectangleParent3: {
    height: "73.68%",
    top: "26.32%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  component38: {
    width: 375,
    height: 76,
  },
  friendRequest: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default FriendRequest;
