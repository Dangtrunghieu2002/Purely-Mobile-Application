import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Suggest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.suggest}>
      <Pressable
        style={styles.filterParent}
        onPress={() => navigation.navigate("Filter")}
      >
        <Text style={[styles.filter, styles.filterTypo]}>Filter</Text>
        <Image
          style={[styles.filter1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/filter-1.png")}
        />
      </Pressable>
      <View
        style={[styles.component42Parent, styles.component38ChildShadowBox]}
      >
        <View style={styles.component42Layout}>
          <View style={styles.frameParentShadowBox}>
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/rectangle-34624354.png")}
              />
              <Text style={styles.hr}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text, styles.textTypo]}>$90</Text>
                  <Text style={[styles.hr1, styles.hr1Typo]}>/hr</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.frameGroup}>
              <View>
                <Text style={[styles.fullName, styles.fullNameLayout]}>
                  Karien Mia
                </Text>
                <Text style={[styles.carer, styles.hr1Typo]}>Carer</Text>
              </View>
              <View style={styles.materialSymbolsstarParent}>
                <Image
                  style={[
                    styles.materialSymbolsstarIcon,
                    styles.chevronLeftLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/materialsymbolsstar.png")}
                />
                <Text style={styles.jobsSpaceBlock}>
                  <Text style={[styles.text2, styles.text2Typo]}>4.9</Text>
                  <Text style={[styles.text3, styles.hr1Typo]}>/5</Text>
                </Text>
                <Text style={[styles.jobs, styles.jobsSpaceBlock]}>
                  (13 jobs)
                </Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.goMarketplace, styles.requestClr]}>
                    Go marketplace
                  </Text>
                </View>
                <View style={styles.frameView}>
                  <View style={styles.wrapperSpaceBlock}>
                    <Text style={[styles.goMarketplace, styles.requestClr]}>
                      Cooking
                    </Text>
                  </View>
                  <View
                    style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                  >
                    <Text style={[styles.goMarketplace, styles.requestClr]}>
                      Exercising
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.healthCheckingWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text style={[styles.goMarketplace, styles.requestClr]}>
                    Health checking
                  </Text>
                </View>
                <Text style={[styles.viewMore, styles.fullNameLayout]}>
                  View more
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameWrapper, styles.component42Layout]}>
          <View style={styles.frameParentShadowBox}>
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/rectangle-34624354.png")}
              />
              <Text style={styles.hr}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text, styles.textTypo]}>$25</Text>
                  <Text style={[styles.hr1, styles.hr1Typo]}>/hr</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.frameGroup}>
              <View>
                <Text style={[styles.fullName, styles.fullNameLayout]}>
                  Anna Helmo
                </Text>
                <Text style={[styles.carer, styles.hr1Typo]}>Apprentice</Text>
              </View>
              <View style={styles.materialSymbolsstarParent}>
                <Image
                  style={[
                    styles.materialSymbolsstarIcon,
                    styles.chevronLeftLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/materialsymbolsstar.png")}
                />
                <Text style={styles.jobsSpaceBlock}>
                  <Text style={[styles.text2, styles.text2Typo]}>5.0</Text>
                  <Text style={[styles.text3, styles.hr1Typo]}>/5</Text>
                </Text>
                <Text style={[styles.jobs, styles.jobsSpaceBlock]}>3 jobs</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.goMarketplace, styles.requestClr]}>
                    Go marketplace
                  </Text>
                </View>
                <View style={styles.frameView}>
                  <View style={styles.wrapperSpaceBlock}>
                    <Text style={[styles.goMarketplace, styles.requestClr]}>
                      Cooking
                    </Text>
                  </View>
                  <View
                    style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                  >
                    <Text style={[styles.goMarketplace, styles.requestClr]}>
                      Exercising
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.healthCheckingWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text style={[styles.goMarketplace, styles.requestClr]}>
                    Health checking
                  </Text>
                </View>
                <Text style={[styles.viewMore, styles.fullNameLayout]}>
                  View more
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameWrapper, styles.component42Layout]}>
          <View style={styles.frameParentShadowBox}>
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/rectangle-34624354.png")}
              />
              <Text style={styles.hr}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text, styles.textTypo]}>$15</Text>
                  <Text style={[styles.hr1, styles.hr1Typo]}>/hr</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.frameGroup}>
              <View>
                <Text style={[styles.fullName, styles.fullNameLayout]}>
                  Catherina Beth
                </Text>
                <Text style={[styles.carer, styles.hr1Typo]}>Carer</Text>
              </View>
              <View style={styles.materialSymbolsstarParent}>
                <Image
                  style={[
                    styles.materialSymbolsstarIcon,
                    styles.chevronLeftLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/materialsymbolsstar.png")}
                />
                <Text style={styles.jobsSpaceBlock}>
                  <Text style={[styles.text2, styles.text2Typo]}>4.7</Text>
                  <Text style={[styles.text3, styles.hr1Typo]}>/5</Text>
                </Text>
                <Text style={[styles.jobs, styles.jobsSpaceBlock]}>
                  25 jobs
                </Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.goMarketplace, styles.requestClr]}>
                    Go marketplace
                  </Text>
                </View>
                <View style={styles.frameView}>
                  <View style={styles.wrapperSpaceBlock}>
                    <Text style={[styles.goMarketplace, styles.requestClr]}>
                      Cooking
                    </Text>
                  </View>
                  <View
                    style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                  >
                    <Text style={[styles.goMarketplace, styles.requestClr]}>
                      Exercising
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.healthCheckingWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text style={[styles.goMarketplace, styles.requestClr]}>
                    Health checking
                  </Text>
                </View>
                <Text style={[styles.viewMore, styles.fullNameLayout]}>
                  View more
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameWrapper, styles.component42Layout]}>
          <View style={styles.frameParentShadowBox}>
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/rectangle-34624354.png")}
              />
              <Text style={styles.hr}>
                <Text style={styles.hrTxt}>
                  <Text style={[styles.text, styles.textTypo]}>$65</Text>
                  <Text style={[styles.hr1, styles.hr1Typo]}>/hr</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.frameGroup}>
              <View>
                <Text style={[styles.fullName, styles.fullNameLayout]}>
                  Mathieu James
                </Text>
                <Text style={[styles.carer, styles.hr1Typo]}>Carer</Text>
              </View>
              <View style={styles.materialSymbolsstarParent}>
                <Image
                  style={[
                    styles.materialSymbolsstarIcon,
                    styles.chevronLeftLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/materialsymbolsstar.png")}
                />
                <Text style={styles.jobsSpaceBlock}>
                  <Text style={[styles.text2, styles.text2Typo]}>5.0</Text>
                  <Text style={[styles.text3, styles.hr1Typo]}>/5</Text>
                </Text>
                <Text style={[styles.jobs, styles.jobsSpaceBlock]}>
                  56 jobs
                </Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.goMarketplace, styles.requestClr]}>
                    Go marketplace
                  </Text>
                </View>
                <View style={styles.frameView}>
                  <View style={styles.wrapperSpaceBlock}>
                    <Text style={[styles.goMarketplace, styles.requestClr]}>
                      Cooking
                    </Text>
                  </View>
                  <View
                    style={[styles.exercisingWrapper, styles.wrapperSpaceBlock]}
                  >
                    <Text style={[styles.goMarketplace, styles.requestClr]}>
                      Exercising
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.healthCheckingWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Text style={[styles.goMarketplace, styles.requestClr]}>
                    Health checking
                  </Text>
                </View>
                <Text style={[styles.viewMore, styles.fullNameLayout]}>
                  View more
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.groupLayout}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.indexInformation, styles.requestPosition]}>
            Suggest
          </Text>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </View>
        <Pressable
          style={styles.groupLayout}
          onPress={() => navigation.navigate("Request3")}
        >
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.request, styles.requestPosition]}>Request</Text>
          <Image
            style={styles.lineIcon}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.component27, styles.component27Position]}>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.home1Icon, styles.iconLayout1]}
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
            style={[styles.home1Icon, styles.iconLayout1]}
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
            style={[styles.home1Icon, styles.iconLayout1]}
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
            style={[styles.home1Icon, styles.iconLayout1]}
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
            style={[styles.home1Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/bell.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.component38, styles.rectanglePosition]}>
        <View style={[styles.component38Child, styles.childPosition]} />
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
            <Text style={[styles.text16, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text17, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleParent8, styles.childPosition]}>
          <View style={[styles.frameChild1, styles.childPosition]} />
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
          <Text style={styles.signUp}>Elderly Sitter</Text>
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
            source={require("../assets/chat-1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterTypo: {
    color: Color.dimgray,
    fontFamily: FontFamily.interRegularItalic,
    fontStyle: "italic",
  },
  iconLayout1: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  component38ChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  textTypo: {
    color: Color.skyblue_200,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
  },
  hr1Typo: {
    fontFamily: FontFamily.text1,
    color: Color.dimgray,
  },
  fullNameLayout: {
    width: 247,
    display: "flex",
    alignItems: "center",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  text2Typo: {
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    fontSize: FontSize.heading4_size,
  },
  jobsSpaceBlock: {
    marginLeft: 6,
    textAlign: "left",
  },
  requestClr: {
    color: Color.black,
    lineHeight: 27,
    fontFamily: FontFamily.text1,
  },
  wrapperSpaceBlock: {
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
  component42Layout: {
    height: 223,
    width: 343,
    borderRadius: Border.br_5xs,
  },
  groupLayout: {
    height: 34,
    width: 172,
  },
  requestPosition: {
    top: 11,
    fontSize: FontSize.heading4_size,
    textAlign: "left",
    position: "absolute",
  },
  component27Position: {
    right: "0%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 56,
    width: 75,
  },
  rectanglePosition: {
    left: 0,
    top: 0,
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
    color: Color.sub2,
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  filter: {
    top: 4,
    left: 32,
    textAlign: "left",
    fontSize: FontSize.notice_size,
    position: "absolute",
  },
  filter1Icon: {
    left: 0,
    top: 0,
  },
  filterParent: {
    top: 142,
    left: 22,
    width: 71,
    height: 24,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_17xl,
    height: 72,
    width: 72,
  },
  text: {
    fontSize: FontSize.heading4_size,
  },
  hr1: {
    fontSize: FontSize.text4_size,
  },
  hrTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  hr: {
    marginTop: 12,
    display: "flex",
    textAlign: "center",
    width: 72,
    alignItems: "center",
  },
  rectangleParent: {
    alignItems: "center",
  },
  fullName: {
    color: Color.sub3,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    fontSize: FontSize.heading4_size,
    textAlign: "left",
  },
  carer: {
    marginTop: 8,
    fontSize: FontSize.text4_size,
    textAlign: "left",
  },
  materialSymbolsstarIcon: {
    overflow: "hidden",
  },
  text2: {
    color: Color.goldenrod,
  },
  text3: {
    fontSize: FontSize.notice_size,
  },
  jobs: {
    fontFamily: FontFamily.text1,
    color: Color.dimgray,
    fontSize: FontSize.notice_size,
  },
  materialSymbolsstarParent: {
    height: 15,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  goMarketplace: {
    fontSize: FontSize.heading4_size,
    textAlign: "center",
    lineHeight: 27,
  },
  exercisingWrapper: {
    marginLeft: 8,
  },
  frameView: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  healthCheckingWrapper: {
    marginTop: 8,
  },
  viewMore: {
    textAlign: "right",
    marginTop: 8,
    fontSize: FontSize.text4_size,
    color: Color.dimgray,
    fontFamily: FontFamily.interRegularItalic,
    fontStyle: "italic",
  },
  frameContainer: {
    marginTop: 12,
  },
  frameGroup: {
    marginLeft: 8,
  },
  frameParentShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 9,
    shadowRadius: 9,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(26, 26, 26, 0.12)",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameWrapper: {
    marginTop: 16,
  },
  component42Parent: {
    top: 182,
    alignItems: "center",
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(26, 26, 26, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke,
    width: 172,
    left: 0,
    top: 0,
    position: "absolute",
  },
  indexInformation: {
    left: 50,
    color: Color.skyblue_200,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
  },
  groupItem: {
    top: 33,
    left: 7,
    width: 164,
    height: 1,
    position: "absolute",
  },
  groupInner: {
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke,
    width: 172,
    left: 0,
    top: 0,
    position: "absolute",
  },
  request: {
    left: 53,
    color: Color.black,
    lineHeight: 27,
    fontFamily: FontFamily.text1,
  },
  lineIcon: {
    top: 34,
    left: 173,
    width: 163,
    height: 0,
    display: "none",
    position: "absolute",
  },
  groupParent: {
    top: 92,
    flexDirection: "row",
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
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
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    borderColor: "#49c6e5",
    borderTopWidth: 1.5,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
  },
  component27: {
    bottom: 0,
    borderColor: "#666",
    borderTopWidth: 1,
    borderStyle: "solid",
    left: "0%",
    flexDirection: "row",
    width: "100%",
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
  text16: {
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
  text17: {
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
    top: "0%",
    left: "0%",
    width: "100%",
  },
  frameChild1: {
    borderColor: "rgba(26, 26, 26, 0.4)",
    borderBottomWidth: 1,
    top: "0%",
    height: "100%",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    display: "none",
    overflow: "hidden",
    width: "100%",
  },
  chevronLeft: {
    left: 16,
    top: 20,
    position: "absolute",
  },
  signUp: {
    top: 18,
    left: 72,
    fontSize: FontSize.heading1_size,
    textTransform: "capitalize",
    color: Color.sub2,
    fontFamily: FontFamily.heading4,
    fontWeight: "500",
    textAlign: "left",
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
  rectangleParent8: {
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
    position: "absolute",
  },
  suggest: {
    flex: 1,
    height: 1202,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Suggest;
