import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Connections1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.connections}>
      <View style={[styles.component27, styles.component27Position]}>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.home1Icon, styles.addUser1Layout]}
            resizeMode="cover"
            source={require("../assets/home-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("OverviewHealthIndex2")}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.home1Icon, styles.addUser1Layout]}
            resizeMode="cover"
            source={require("../assets/pharmacy-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Suggest")}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.home1Icon, styles.addUser1Layout]}
            resizeMode="cover"
            source={require("../assets/handholdingheart-2.png")}
          />
        </Pressable>
        <View style={styles.rectangleLayout}>
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.groupChildPosition]}
            locations={[0, 1]}
            colors={["rgba(84, 222, 253, 0.4)", "rgba(84, 222, 253, 0)"]}
            useAngle={true}
            angle={182.07}
          />
          <Image
            style={[styles.home1Icon, styles.addUser1Layout]}
            resizeMode="cover"
            source={require("../assets/users-1-2.png")}
          />
        </View>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Notification1")}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.home1Icon, styles.addUser1Layout]}
            resizeMode="cover"
            source={require("../assets/bell.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.friendRequest}
        onPress={() => navigation.navigate("FriendRequest")}
      >
        <Text style={styles.friendRequest1}>Friend request</Text>
      </Pressable>
      <View style={[styles.component38, styles.groupChildPosition]}>
        <View style={styles.component38Child} />
        <View style={[styles.statusBarwhitebase, styles.component27Position]}>
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
        <View style={[styles.rectangleParent1, styles.frameChildPosition]}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
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
          <Text style={[styles.signUp, styles.signUpTypo]}>Connections</Text>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("Setting")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-15951.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={styles.chat1}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-12.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.component42Parent}
        onPress={() => navigation.navigate("Chat")}
      >
        <View style={styles.component42}>
          <Image
            style={styles.component42Child}
            resizeMode="cover"
            source={require("../assets/rectangle-346243542.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={[styles.mariBones, styles.signUpTypo]}>
              Mari Bones
            </Text>
            <View style={styles.childrenParent}>
              <Text style={[styles.children, styles.text2Typo]}>Children</Text>
              <Text style={[styles.text2, styles.text2Typo]}>0927 264 913</Text>
            </View>
          </View>
          <Image
            style={[styles.angleRight2Icon, styles.chevronLeftLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-22.png")}
          />
        </View>
        <View style={styles.frameViewShadowBox}>
          <Image
            style={styles.component42Child}
            resizeMode="cover"
            source={require("../assets/rectangle-346243542.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={[styles.mariBones, styles.signUpTypo]}>
              Nova Amanda
            </Text>
            <View style={styles.childrenParent}>
              <Text style={[styles.children, styles.text2Typo]}>Sister</Text>
              <Text style={[styles.text2, styles.text2Typo]}>0927 264 913</Text>
            </View>
          </View>
          <Image
            style={[styles.angleRight2Icon, styles.chevronLeftLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-22.png")}
          />
        </View>
        <View style={styles.frameViewShadowBox}>
          <Image
            style={styles.component42Child}
            resizeMode="cover"
            source={require("../assets/rectangle-346243542.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={[styles.mariBones, styles.signUpTypo]}>
              Amelia Harper
            </Text>
            <View style={styles.childrenParent}>
              <Text style={[styles.children, styles.text2Typo]}>Siblings</Text>
              <Text style={[styles.text2, styles.text2Typo]}>0192 371 810</Text>
            </View>
          </View>
          <Image
            style={[styles.angleRight2Icon, styles.chevronLeftLayout]}
            resizeMode="cover"
            source={require("../assets/angleright-22.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.addUser1, styles.addUser1Position]}
        onPress={() => navigation.navigate("FriendRequest")}
      >
        <Image
          style={styles.icon3}
          resizeMode="cover"
          source={require("../assets/adduser-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  component27Position: {
    right: "0%",
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  addUser1Layout: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  gsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sFUITextRegular,
    fontSize: FontSize.size_xs,
    alignItems: "flex-end",
    display: "flex",
    color: Color.sub2,
    position: "absolute",
  },
  frameChildPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  signUpTypo: {
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    textAlign: "left",
    color: Color.sub2,
  },
  text2Typo: {
    fontFamily: FontFamily.text1,
    textAlign: "left",
  },
  addUser1Position: {
    left: 16,
    position: "absolute",
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
  component27: {
    bottom: 0,
    borderColor: "#666",
    borderTopWidth: 1,
    flexDirection: "row",
    borderStyle: "solid",
    left: "0%",
    width: "100%",
  },
  friendRequest1: {
    fontStyle: "italic",
    fontFamily: FontFamily.interRegularItalic,
    textAlign: "right",
    color: Color.sub2,
    fontSize: FontSize.notice_size,
  },
  friendRequest: {
    left: 48,
    top: 106,
    position: "absolute",
  },
  component38Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
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
    position: "absolute",
  },
  text: {
    width: "50.45%",
    alignItems: "flex-end",
    display: "flex",
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
    fontWeight: "500",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: "15%",
    height: "70%",
    color: Color.sub2,
    position: "absolute",
  },
  wifiIcon: {
    width: 12,
    height: 9,
  },
  gs: {
    width: "4.53%",
    left: "11.73%",
    alignItems: "flex-end",
    display: "flex",
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
    position: "absolute",
  },
  statusBarwhitebase: {
    height: "26.32%",
    bottom: "73.68%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  frameChild: {
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    top: "0%",
    height: "100%",
    borderStyle: "solid",
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
  signUp: {
    top: 18,
    left: 72,
    fontSize: FontSize.heading1_size,
    textTransform: "capitalize",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "2.4%",
    top: "-5.36%",
    right: "78.93%",
    bottom: "-19.64%",
    width: "18.67%",
    height: "125%",
    position: "absolute",
  },
  rectangleParent1: {
    height: "73.68%",
    top: "26.32%",
    backgroundColor: Color.white,
  },
  chat1: {
    left: "87.2%",
    top: "47.37%",
    right: "6.4%",
    bottom: "21.05%",
    width: "6.4%",
    height: "31.58%",
    position: "absolute",
  },
  component38: {
    width: 375,
    height: 76,
  },
  component42Child: {
    borderRadius: Border.br_17xl,
    width: 72,
    height: 72,
  },
  mariBones: {
    fontSize: FontSize.heading4_size,
    width: 207,
    alignItems: "center",
    display: "flex",
  },
  children: {
    color: Color.sub3,
    width: 80,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.notice_size,
    fontFamily: FontFamily.text1,
  },
  text2: {
    fontSize: FontSize.text4_size,
    color: Color.darkgray_100,
    marginLeft: 12,
  },
  childrenParent: {
    marginTop: 12,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  mariBonesParent: {
    justifyContent: "center",
    marginLeft: 16,
  },
  angleRight2Icon: {
    marginLeft: 16,
    overflow: "hidden",
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
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  frameViewShadowBox: {
    marginTop: 16,
    padding: Padding.p_5xs,
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(26, 26, 26, 0.12)",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  component42Parent: {
    marginLeft: -171.5,
    top: 140,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  icon3: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  addUser1: {
    top: 100,
    height: 24,
    width: 24,
  },
  connections: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Connections1;
