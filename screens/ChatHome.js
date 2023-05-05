import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ChatHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatHome}>
      <View style={[styles.search1Parent, styles.parentFlexBox]}>
        <Image
          style={[styles.search1Icon, styles.chat1Layout]}
          resizeMode="cover"
          source={require("../assets/search-1.png")}
        />
        <Text style={styles.search}>Search</Text>
      </View>
      <Pressable
        style={[styles.component10Parent, styles.parentPosition]}
        onPress={() => navigation.navigate("Chat")}
      >
        <View style={styles.componentLayout}>
          <View style={[styles.ellipseParent, styles.ellipseParentBorder]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-16191.png")}
            />
            <View style={styles.kaydenBlakeParent}>
              <Text style={[styles.kaydenBlake, styles.signUpTypo]}>
                Kayden Blake
              </Text>
              <Text style={[styles.youOkDeal, styles.textTypo]}>
                You: OK, deal!
              </Text>
              <Text style={[styles.text, styles.textTypo]}>23/02/2023</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component11, styles.componentLayout]}>
          <View style={[styles.ellipseParent, styles.ellipseParentBorder]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-16192.png")}
            />
            <View style={styles.kaydenBlakeParent}>
              <Text style={[styles.kaydenBlake, styles.signUpTypo]}>
                Marie Bones
              </Text>
              <Text style={[styles.youOkDeal, styles.textTypo]}>
                I will do it best to take care your...
              </Text>
              <Text style={[styles.text, styles.textTypo]}>23/02/2023</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component11, styles.componentLayout]}>
          <View style={[styles.ellipseParent, styles.ellipseParentBorder]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-16191.png")}
            />
            <View style={styles.kaydenBlakeParent}>
              <Text style={[styles.kaydenBlake, styles.signUpTypo]}>
                Christina Han
              </Text>
              <Text style={[styles.youOkDeal, styles.textTypo]}>
                You: But I need 3 hours, can yo...
              </Text>
              <Text style={[styles.text, styles.textTypo]}>23/02/2023</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component11, styles.componentLayout]}>
          <View style={[styles.ellipseParent, styles.ellipseParentBorder]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-16192.png")}
            />
            <View style={styles.kaydenBlakeParent}>
              <Text style={[styles.kaydenBlake, styles.signUpTypo]}>
                Anna James
              </Text>
              <Text style={[styles.youOkDeal, styles.textTypo]}>
                This requirement is kind of hard...
              </Text>
              <Text style={[styles.text, styles.textTypo]}>04/02/2023</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component11, styles.componentLayout]}>
          <View style={[styles.ellipseParent, styles.ellipseParentBorder]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-16191.png")}
            />
            <View style={styles.kaydenBlakeParent}>
              <Text style={[styles.kaydenBlake, styles.signUpTypo]}>
                River Molly
              </Text>
              <Text style={[styles.youOkDeal, styles.textTypo]}>
                Not at all
              </Text>
              <Text style={[styles.text, styles.textTypo]}>01/02/2023</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component11, styles.componentLayout]}>
          <View style={[styles.ellipseParent, styles.ellipseParentBorder]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-16192.png")}
            />
            <View style={styles.kaydenBlakeParent}>
              <Text style={[styles.kaydenBlake, styles.signUpTypo]}>
                Kayden Blake
              </Text>
              <Text style={[styles.youOkDeal, styles.textTypo]}>
                It is not the same
              </Text>
              <Text style={[styles.text, styles.textTypo]}>23/01/203</Text>
            </View>
          </View>
        </View>
        <View style={[styles.component11, styles.componentLayout]}>
          <View style={[styles.ellipseParent, styles.ellipseParentBorder]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-16191.png")}
            />
            <View style={styles.kaydenBlakeParent}>
              <Text style={[styles.kaydenBlake, styles.signUpTypo]}>
                Kayden Blake
              </Text>
              <Text style={[styles.youOkDeal, styles.textTypo]}>
                You: OK, deal!
              </Text>
              <Text style={[styles.text, styles.textTypo]}>23/12/2022</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <View style={styles.component38}>
        <View style={[styles.component38Child, styles.rectanglePosition]} />
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
            <Text style={[styles.text7, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text8, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.rectangleView, styles.rectanglePosition]} />
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
          <View style={[styles.angleRight2Parent, styles.parentFlexBox]}>
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
            <Text style={[styles.signUp, styles.signUpTypo]}>Message</Text>
            <Pressable
              style={[styles.chat1, styles.chat1Layout]}
              onPress={() => navigation.navigate("ChatHome")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/chat-13.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  chat1Layout: {
    height: 24,
    width: 24,
  },
  parentPosition: {
    left: "50%",
    marginLeft: -171.5,
  },
  ellipseParentBorder: {
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderStyle: "solid",
    position: "absolute",
  },
  signUpTypo: {
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    alignItems: "center",
  },
  textTypo: {
    marginTop: 12,
    display: "flex",
    textAlign: "left",
    color: Color.dimgray,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.notice_size,
    alignItems: "center",
  },
  componentLayout: {
    height: 85,
    width: 343,
  },
  rectanglePosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
    position: "absolute",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  search1Icon: {
    overflow: "hidden",
  },
  search: {
    textAlign: "center",
    marginLeft: 8,
    color: Color.dimgray,
    fontFamily: FontFamily.text1,
    fontSize: FontSize.notice_size,
  },
  search1Parent: {
    top: 100,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke,
    padding: Padding.p_5xs,
    alignItems: "center",
    width: 343,
    flexDirection: "row",
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  frameChild: {
    width: 56,
    height: 56,
  },
  kaydenBlake: {
    fontSize: FontSize.heading4_size,
    width: 180,
    height: 20,
  },
  youOkDeal: {
    width: 271,
    height: 12,
  },
  text: {
    width: 92,
  },
  kaydenBlakeParent: {
    marginLeft: 16,
    justifyContent: "center",
  },
  ellipseParent: {
    marginTop: -42,
    top: "50%",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    marginLeft: -171.5,
  },
  component11: {
    marginTop: 8,
  },
  component10Parent: {
    top: 156,
    alignItems: "center",
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
  text7: {
    width: "50.45%",
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
  text8: {
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
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangleView: {
    left: "0%",
    top: "0%",
    height: "100%",
    borderBottomWidth: 1,
    borderColor: "rgba(26, 26, 26, 0.4)",
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
    marginLeft: 8,
  },
  chat1: {
    marginLeft: 8,
  },
  angleRight2Parent: {
    top: 8,
    left: 24,
    alignItems: "center",
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
    top: 0,
    left: 0,
    width: 375,
    height: 76,
    position: "absolute",
  },
  chatHome: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ChatHome;
