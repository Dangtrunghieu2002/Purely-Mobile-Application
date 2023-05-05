import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Request2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.request}>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.component42Parent}>
          <View style={styles.componentShadowBox}>
            <Image
              style={styles.component42Child}
              resizeMode="cover"
              source={require("../assets/rectangle-346243541.png")}
            />
            <View style={styles.frameGroup}>
              <View style={styles.frameContainer}>
                <View>
                  <Text style={[styles.mariBones, styles.mariFlexBox]}>
                    Mari Bones
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>11/03/2023</Text>
                </View>
                <View style={[styles.ongoingWrapper, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.ongoing, styles.doneTypo]}>Ongoing</Text>
                </View>
              </View>
              <View style={styles.frameView}>
                <View
                  style={[
                    styles.goMarketplaceWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text
                    style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                  >
                    Go marketplace
                  </Text>
                </View>
                <View style={styles.frameParent1}>
                  <View
                    style={[
                      styles.goMarketplaceWrapper,
                      styles.wrapperSpaceBlock,
                    ]}
                  >
                    <Text
                      style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                    >
                      Cooking
                    </Text>
                  </View>
                  <View
                    style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                  >
                    <Text
                      style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                    >
                      Exercising
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.componentShadowBox]}>
            <Image
              style={styles.component42Child}
              resizeMode="cover"
              source={require("../assets/rectangle-346243541.png")}
            />
            <View style={styles.frameGroup}>
              <View style={styles.frameContainer}>
                <View>
                  <Text style={[styles.mariBones, styles.mariFlexBox]}>
                    Mathieu James
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>05/03/2023</Text>
                </View>
                <View style={[styles.ongoingWrapper, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.ongoing, styles.doneTypo]}>Ongoing</Text>
                </View>
              </View>
              <View style={styles.frameView}>
                <View
                  style={[
                    styles.goMarketplaceWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text
                    style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                  >
                    Go marketplace
                  </Text>
                </View>
                <View style={styles.frameParent1}>
                  <View
                    style={[
                      styles.goMarketplaceWrapper,
                      styles.wrapperSpaceBlock,
                    ]}
                  >
                    <Text
                      style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                    >
                      Cooking
                    </Text>
                  </View>
                  <View
                    style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                  >
                    <Text
                      style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                    >
                      Exercising
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.component421, styles.componentShadowBox]}>
          <Image
            style={styles.component42Child}
            resizeMode="cover"
            source={require("../assets/rectangle-346243541.png")}
          />
          <View style={styles.frameGroup}>
            <View style={styles.frameContainer}>
              <View>
                <Text style={[styles.mariBones2, styles.mariFlexBox]}>
                  Mari Bones
                </Text>
                <Text style={[styles.text, styles.textTypo]}>11/03/2023</Text>
              </View>
              <View style={[styles.doneWrapper, styles.doneWrapperBg]}>
                <Text style={[styles.done, styles.doneTypo]}>Done</Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View
                style={[styles.goMarketplaceWrapper, styles.wrapperSpaceBlock]}
              >
                <Text
                  style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                >
                  Go marketplace
                </Text>
              </View>
              <View style={styles.frameParent1}>
                <View
                  style={[
                    styles.goMarketplaceWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text
                    style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                  >
                    Cooking
                  </Text>
                </View>
                <View
                  style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                >
                  <Text
                    style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                  >
                    Exercising
                  </Text>
                </View>
              </View>
              <Text
                style={[styles.daysLeftTo, styles.textTypo]}
              >{`5 days left to write a review `}</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.rectangleGroup, styles.componentShadowBox]}
          onPress={() => navigation.navigate("Request")}
        >
          <Image
            style={styles.component42Child}
            resizeMode="cover"
            source={require("../assets/rectangle-346243541.png")}
          />
          <View style={styles.frameGroup}>
            <View style={styles.frameContainer}>
              <View>
                <Text style={[styles.mariBones2, styles.mariFlexBox]}>
                  Mari Bones
                </Text>
                <Text style={[styles.text, styles.textTypo]}>11/03/2023</Text>
              </View>
              <View style={[styles.doneWrapper, styles.doneWrapperBg]}>
                <Text style={[styles.done, styles.doneTypo]}>Done</Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View
                style={[styles.goMarketplaceWrapper, styles.wrapperSpaceBlock]}
              >
                <Text
                  style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                >
                  Go marketplace
                </Text>
              </View>
              <View style={styles.frameParent1}>
                <View
                  style={[
                    styles.goMarketplaceWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text
                    style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                  >
                    Cooking
                  </Text>
                </View>
                <View
                  style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                >
                  <Text
                    style={[styles.goMarketplace, styles.goMarketplaceLayout]}
                  >
                    Exercising
                  </Text>
                </View>
              </View>
              <Text
                style={[styles.daysLeftTo, styles.textTypo]}
              >{`5 days left to write a review `}</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.component32}
          onPress={() => navigation.navigate("Request3")}
        >
          <View style={[styles.component32Child, styles.childPosition]} />
          <Text style={[styles.textField, styles.parentPosition]}>
            Add request
          </Text>
        </Pressable>
      </View>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <View style={styles.groupLayout}>
          <Pressable
            style={[styles.groupChild, styles.groupPosition]}
            onPress={() => navigation.navigate("Suggest")}
          />
          <Text style={[styles.indexInformation, styles.request1Position]}>
            Suggest
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </View>
        <View style={styles.groupLayout}>
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.request1, styles.request1Position]}>
            Request
          </Text>
          <Image
            style={styles.lineIcon}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </View>
      </View>
      <View style={[styles.component38, styles.groupPosition]}>
        <View style={[styles.component38Child, styles.childPosition]} />
        <View style={[styles.statusBarwhitebase, styles.batteryIconPosition]}>
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
            <Text style={[styles.text4, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text5, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleParent1, styles.childPosition]}>
          <View style={[styles.frameChild, styles.childPosition]} />
          <Pressable
            style={styles.chevronLeft}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={[styles.signUp, styles.mariTypo]}>Elderly Sitter</Text>
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
            source={require("../assets/chat-13.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.component27, styles.batteryIconPosition]}>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/home-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("OverviewHealthIndex2")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/pharmacy-2.png")}
          />
        </Pressable>
        <View style={styles.rectangleLayout}>
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.rectangleLayout]}
            locations={[0, 1]}
            colors={["rgba(84, 222, 253, 0.4)", "rgba(84, 222, 253, 0)"]}
            useAngle={true}
            angle={182.32}
          />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/handholdingheart-1-2.png")}
          />
        </View>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Connections1")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/users-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Notification1")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.home1Icon}
            resizeMode="cover"
            source={require("../assets/bell.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: "50%",
    position: "absolute",
  },
  mariFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textTypo: {
    color: Color.dimgray,
    fontSize: FontSize.text4_size,
    marginTop: 8,
    fontFamily: FontFamily.text1,
    textAlign: "left",
  },
  wrapperSpaceBlock: {
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  doneTypo: {
    textAlign: "right",
    fontSize: FontSize.text4_size,
  },
  goMarketplaceLayout: {
    lineHeight: 27,
    fontFamily: FontFamily.text1,
  },
  componentShadowBox: {
    opacity: 0.8,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(26, 26, 26, 0.12)",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
  },
  doneWrapperBg: {
    backgroundColor: Color.skyblue_200,
    borderRadius: Border.br_5xs,
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  request1Position: {
    top: 11,
    textAlign: "left",
    fontSize: FontSize.heading4_size,
    position: "absolute",
  },
  batteryIconPosition: {
    right: "0%",
    position: "absolute",
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
  textFlexBox: {
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    color: Color.sub2,
    position: "absolute",
  },
  mariTypo: {
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
  },
  rectangleLayout: {
    height: 56,
    width: 75,
  },
  component42Child: {
    borderRadius: Border.br_17xl,
    width: 72,
    height: 72,
  },
  mariBones: {
    width: 175,
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    fontSize: FontSize.heading4_size,
  },
  text: {
    marginTop: 8,
  },
  ongoing: {
    color: Color.skyblue_200,
    fontFamily: FontFamily.text1,
    textAlign: "right",
  },
  ongoingWrapper: {
    borderWidth: 1,
    borderColor: "#49c6e5",
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    padding: Padding.p_5xs,
  },
  frameContainer: {
    flexDirection: "row",
  },
  goMarketplace: {
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.heading4_size,
  },
  goMarketplaceWrapper: {
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_5xs,
    padding: Padding.p_5xs,
  },
  exercisingWrapper: {
    backgroundColor: Color.whitesmoke,
    marginLeft: 8,
    borderRadius: Border.br_5xs,
    padding: Padding.p_5xs,
  },
  frameParent1: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  frameView: {
    width: 247,
    justifyContent: "center",
    marginTop: 10,
  },
  frameGroup: {
    marginLeft: 8,
  },
  rectangleParent: {
    marginTop: 16,
  },
  component42Parent: {
    alignItems: "center",
  },
  mariBones2: {
    width: 195,
    textAlign: "left",
    color: Color.sub2,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    fontSize: FontSize.heading4_size,
  },
  done: {
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    color: Color.white,
  },
  doneWrapper: {
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  daysLeftTo: {
    width: 223,
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  },
  component421: {
    marginTop: 21,
  },
  rectangleGroup: {
    marginTop: 21,
  },
  component32Child: {
    left: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.skyblue_200,
    borderRadius: Border.br_5xs,
  },
  textField: {
    marginTop: -13,
    marginLeft: -65.5,
    top: "50%",
    fontSize: FontSize.heading3_size,
    fontWeight: "600",
    fontFamily: FontFamily.heading3,
    color: Color.white,
    textAlign: "center",
  },
  component32: {
    width: 343,
    height: 48,
    marginTop: 21,
  },
  frameParent: {
    top: 150,
    alignItems: "center",
    marginLeft: -171.5,
    left: "50%",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    height: 34,
    width: 172,
    backgroundColor: Color.whitesmoke,
  },
  indexInformation: {
    left: 50,
    lineHeight: 27,
    fontFamily: FontFamily.text1,
    color: Color.sub2,
    top: 11,
  },
  groupItem: {
    top: 34,
    left: 8,
    width: 163,
    height: 0,
    display: "none",
    position: "absolute",
  },
  groupLayout: {
    height: 34,
    width: 172,
  },
  groupInner: {
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    height: 34,
    width: 172,
    backgroundColor: Color.whitesmoke,
  },
  request1: {
    left: 53,
    color: Color.skyblue_200,
    top: 11,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
  },
  lineIcon: {
    top: 33,
    left: 1,
    width: 164,
    height: 1,
    position: "absolute",
  },
  groupParent: {
    top: 92,
    flexDirection: "row",
    marginLeft: -171.5,
    left: "50%",
  },
  component38Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    left: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    bottom: "0%",
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
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
  text4: {
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
  text5: {
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
    position: "absolute",
  },
  statusBarwhitebase: {
    height: "26.32%",
    bottom: "73.68%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  frameChild: {
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    left: "0%",
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
    left: 16,
    top: 20,
    width: 16,
    height: 16,
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
    left: "0%",
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
  rectangleView: {
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  home1Icon: {
    top: 16,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    borderTopWidth: 1.5,
    left: 0,
    top: 0,
    position: "absolute",
    borderColor: "#49c6e5",
    borderStyle: "solid",
  },
  component27: {
    bottom: 0,
    borderColor: "#666",
    borderTopWidth: 1,
    left: "0%",
    borderStyle: "solid",
    flexDirection: "row",
    width: "100%",
  },
  request: {
    flex: 1,
    height: 969,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Request2;
