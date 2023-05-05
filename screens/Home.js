import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.edit1Parent}>
            <Image
              style={styles.iconLayout2}
              resizeMode="cover"
              source={require("../assets/edit-1.png")}
            />
            <Text style={[styles.shareSomethingHere, styles.shareLayout]}>
              Share something here!
            </Text>
            <Text style={[styles.shareSomthingHere, styles.textFlexBox1]}>
              Share somthing here
            </Text>
          </View>
          <Image
            style={[styles.imageGallery1Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/imagegallery-1.png")}
          />
        </View>
        <View style={[styles.frameContainer, styles.voteParentFlexBox]}>
          <View style={[styles.ellipseParent, styles.ellipseParentSpaceBlock]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1628.png")}
            />
            <View style={styles.katzeHundParent}>
              <Text style={[styles.katzeHund, styles.qunLMTypo]}>
                Katze Hund
              </Text>
              <Text style={[styles.text, styles.textFlexBox1]}>27/04/2023</Text>
            </View>
            <Image
              style={[styles.imageGallery1Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/menudots-2.png")}
            />
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-9997.png")}
            />
          </View>
          <View
            style={[
              styles.the2021GhsIndexMeasuresThWrapper,
              styles.ellipseParentSpaceBlock,
            ]}
          >
            <Text style={[styles.the2021GhsContainer, styles.textFlexBox1]}>
              <Text style={styles.the2021GhsContainer1}>
                <Text
                  style={[styles.the2021Ghs, styles.welcomeLayout]}
                >{`The 2021 GHS Index measures the capacities of 195 countries to prepare for epidemics and pandemics. All countries remain `}</Text>
                <Text style={styles.seeMore}>
                  <Text style={styles.seeMore1}>...see more</Text>
                  <Text style={styles.text1}>{` `}</Text>
                </Text>
              </Text>
            </Text>
          </View>
          <Image
            style={styles.instanceChild}
            resizeMode="cover"
            source={require("../assets/rectangle-34624378.png")}
          />
          <View style={[styles.frameView, styles.parentFlexBox]}>
            <View style={[styles.thumbsUp1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/thumbsup-1.png")}
              />
              <Text style={styles.text2}>27</Text>
              <Image
                style={[styles.socialNetworkIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/socialnetwork.png")}
              />
              <Text style={styles.text2}>27</Text>
            </View>
            <View style={[styles.commentsParent, styles.parentFlexBox]}>
              <Text style={styles.comments}>3 comments</Text>
              <Image
                style={styles.frameInner}
                resizeMode="cover"
                source={require("../assets/ellipse-1637.png")}
              />
              <Text style={styles.reposts}>3 reposts</Text>
            </View>
          </View>
          <View style={styles.frameParent1}>
            <View style={[styles.groupParent, styles.groupParentBorder]}>
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Image
                  style={[styles.socialNetworkIcon1, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/socialnetwork1.png")}
                />
              </View>
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Image
                  style={[styles.socialNetworkIcon1, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/socialnetwork2.png")}
                />
              </View>
              <Image
                style={styles.groupChildLayout}
                resizeMode="cover"
                source={require("../assets/group-10011.png")}
              />
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Image
                  style={[styles.socialNetworkIcon1, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/arrowsrepeat-2.png")}
                />
              </View>
            </View>
            <View style={[styles.voteParent, styles.voteParentFlexBox]}>
              <Text style={styles.vote}>Vote</Text>
              <Text style={styles.vote}>Upvote</Text>
              <Text style={styles.vote}>Comment</Text>
              <Text style={styles.vote}>Repost</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.voteParentFlexBox]}>
          <View style={[styles.ellipseParent, styles.ellipseParentSpaceBlock]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1628.png")}
            />
            <View style={styles.katzeHundParent}>
              <Text style={[styles.katzeHund, styles.qunLMTypo]}>
                Katze Hund
              </Text>
              <Text style={[styles.text, styles.textFlexBox1]}>27/04/2023</Text>
            </View>
            <Image
              style={[styles.imageGallery1Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/menudots-2.png")}
            />
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-9997.png")}
            />
          </View>
          <View
            style={[
              styles.the2021GhsIndexMeasuresThWrapper,
              styles.ellipseParentSpaceBlock,
            ]}
          >
            <Text style={[styles.the2021GhsContainer, styles.textFlexBox1]}>
              <Text style={styles.the2021GhsContainer1}>
                <Text
                  style={[styles.the2021Ghs, styles.welcomeLayout]}
                >{`The 2021 GHS Index measures the capacities of 195 countries to prepare for epidemics and pandemics. All countries remain `}</Text>
                <Text style={styles.seeMore}>
                  <Text style={styles.seeMore1}>...see more</Text>
                  <Text style={styles.text1}>{` `}</Text>
                </Text>
              </Text>
            </Text>
          </View>
          <Image
            style={styles.instanceChild}
            resizeMode="cover"
            source={require("../assets/rectangle-34624378.png")}
          />
          <View style={[styles.frameView, styles.parentFlexBox]}>
            <View style={[styles.thumbsUp1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/thumbsup-1.png")}
              />
              <Text style={styles.text2}>27</Text>
              <Image
                style={[styles.socialNetworkIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/socialnetwork.png")}
              />
              <Text style={styles.text2}>27</Text>
            </View>
            <View style={[styles.commentsParent, styles.parentFlexBox]}>
              <Text style={styles.comments}>3 comments</Text>
              <Image
                style={styles.frameInner}
                resizeMode="cover"
                source={require("../assets/ellipse-1637.png")}
              />
              <Text style={styles.reposts}>3 reposts</Text>
            </View>
          </View>
          <View style={styles.frameParent1}>
            <View style={[styles.groupParent, styles.groupParentBorder]}>
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Image
                  style={[styles.socialNetworkIcon1, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/socialnetwork1.png")}
                />
              </View>
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Image
                  style={[styles.socialNetworkIcon1, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/socialnetwork2.png")}
                />
              </View>
              <Image
                style={styles.groupChildLayout}
                resizeMode="cover"
                source={require("../assets/group-10011.png")}
              />
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Image
                  style={[styles.socialNetworkIcon1, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/arrowsrepeat-21.png")}
                />
              </View>
            </View>
            <View style={[styles.voteParent, styles.voteParentFlexBox]}>
              <Text style={styles.vote}>Vote</Text>
              <Text style={styles.vote}>Upvote</Text>
              <Text style={styles.vote}>Comment</Text>
              <Text style={styles.vote}>Repost</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.voteParentFlexBox]}>
          <View style={[styles.ellipseParent, styles.ellipseParentSpaceBlock]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1628.png")}
            />
            <View style={styles.katzeHundParent}>
              <Text style={[styles.katzeHund, styles.qunLMTypo]}>
                Katze Hund
              </Text>
              <Text style={[styles.text, styles.textFlexBox1]}>27/04/2023</Text>
            </View>
            <Image
              style={[styles.imageGallery1Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/menudots-2.png")}
            />
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-9997.png")}
            />
          </View>
          <View
            style={[
              styles.the2021GhsIndexMeasuresThWrapper,
              styles.ellipseParentSpaceBlock,
            ]}
          >
            <Text style={[styles.the2021GhsContainer, styles.textFlexBox1]}>
              <Text style={styles.the2021GhsContainer1}>
                <Text
                  style={[styles.the2021Ghs, styles.welcomeLayout]}
                >{`The 2021 GHS Index measures the capacities of 195 countries to prepare for epidemics and pandemics. All countries remain `}</Text>
                <Text style={styles.seeMore}>
                  <Text style={styles.seeMore1}>...see more</Text>
                  <Text style={styles.text1}>{` `}</Text>
                </Text>
              </Text>
            </Text>
          </View>
          <Image
            style={styles.instanceChild}
            resizeMode="cover"
            source={require("../assets/rectangle-34624378.png")}
          />
          <View style={[styles.frameView, styles.parentFlexBox]}>
            <View style={[styles.thumbsUp1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/thumbsup-1.png")}
              />
              <Text style={styles.text2}>27</Text>
              <Image
                style={[styles.socialNetworkIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/socialnetwork.png")}
              />
              <Text style={styles.text2}>27</Text>
            </View>
            <View style={[styles.commentsParent, styles.parentFlexBox]}>
              <Text style={styles.comments}>3 comments</Text>
              <Image
                style={styles.frameInner}
                resizeMode="cover"
                source={require("../assets/ellipse-1637.png")}
              />
              <Text style={styles.reposts}>3 reposts</Text>
            </View>
          </View>
          <View style={styles.frameParent1}>
            <View style={[styles.groupParent, styles.groupParentBorder]}>
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Image
                  style={[styles.socialNetworkIcon1, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/socialnetwork1.png")}
                />
              </View>
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Image
                  style={[styles.socialNetworkIcon8, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/socialnetwork2.png")}
                />
              </View>
              <Image
                style={styles.groupChildLayout}
                resizeMode="cover"
                source={require("../assets/group-10011.png")}
              />
              <View style={styles.groupChildLayout}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Image
                  style={[styles.socialNetworkIcon1, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/arrowsrepeat-21.png")}
                />
              </View>
            </View>
            <View style={[styles.voteParent, styles.voteParentFlexBox]}>
              <Text style={styles.vote}>Vote</Text>
              <Text style={styles.vote}>Upvote</Text>
              <Text style={styles.vote}>Comment</Text>
              <Text style={styles.vote}>Repost</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.component27, styles.groupParentBorder]}>
        <Image
          style={styles.childLayout}
          resizeMode="cover"
          source={require("../assets/group-10008.png")}
        />
        <Pressable
          style={styles.childLayout}
          onPress={() => navigation.navigate("OverviewHealthIndex2")}
        >
          <View style={[styles.groupChild6, styles.childLayout]} />
          <Image
            style={[styles.pharmacy2Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/pharmacy-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.childLayout}
          onPress={() => navigation.navigate("Suggest")}
        >
          <View style={[styles.groupChild6, styles.childLayout]} />
          <Image
            style={[styles.pharmacy2Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/handholdingheart-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.childLayout}
          onPress={() => navigation.navigate("Connections1")}
        >
          <View style={[styles.groupChild6, styles.childLayout]} />
          <Image
            style={[styles.pharmacy2Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/users-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.childLayout}
          onPress={() => navigation.navigate("Notification1")}
        >
          <View style={[styles.groupChild6, styles.childLayout]} />
          <Image
            style={[styles.pharmacy2Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/bell.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.component38, styles.groupChildPosition]}>
        <View style={[styles.rectangleParent9, styles.backgroundIconPosition]}>
          <View style={[styles.groupChild10, styles.childBg]} />
          <View style={[styles.statusBarwhitebase, styles.batteryIconPosition]}>
            <Image
              style={[styles.backgroundIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/background1.png")}
            />
            <View style={[styles.charge, styles.gsPosition]}>
              <Image
                style={[styles.batteryIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/battery-icon1.png")}
              />
              <Text style={[styles.text12, styles.textFlexBox]}>58 %</Text>
            </View>
            <Image
              style={styles.bluetoothIcon}
              resizeMode="cover"
              source={require("../assets/bluetooth-icon1.png")}
            />
            <Text style={[styles.text13, styles.textFlexBox]}>9:41 AM</Text>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi1.png")}
            />
            <Text style={[styles.gs, styles.textFlexBox]}>GS</Text>
            <Image
              style={[styles.signalIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/signal1.png")}
            />
          </View>
          <View
            style={[styles.rectangleParent10, styles.instanceChild1Position]}
          >
            <View
              style={[styles.instanceChild1, styles.instanceChild1Position]}
            />
            <Image
              style={[styles.chevronLeftIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/chevronleft1.png")}
            />
            <Text style={[styles.qunLM, styles.qunLMTypo]}>Sign up</Text>
          </View>
        </View>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Setting")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-15952.png")}
          />
        </Pressable>
        <Text style={[styles.communityHealthcare, styles.welcomePosition]}>
          Purely
        </Text>
        <Text style={[styles.welcome, styles.welcomePosition]}>Welcome</Text>
        <Pressable
          style={styles.chat5}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-5.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shareLayout: {
    width: 239,
    color: Color.dimgray,
    marginLeft: 8,
    fontFamily: FontFamily.text1,
    lineHeight: 27,
    fontSize: FontSize.heading4_size,
  },
  textFlexBox1: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  iconLayout2: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  voteParentFlexBox: {
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  ellipseParentSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 375,
  },
  qunLMTypo: {
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
  },
  welcomeLayout: {
    lineHeight: 27,
    fontSize: FontSize.heading4_size,
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout1: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  groupParentBorder: {
    borderTopWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
  },
  groupChildPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  childLayout: {
    height: 56,
    width: 75,
  },
  backgroundIconPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  childBg: {
    backgroundColor: Color.skyblue_100,
    top: "0%",
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
    color: Color.black,
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  instanceChild1Position: {
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  welcomePosition: {
    color: Color.white,
    left: "21.87%",
    textAlign: "left",
    position: "absolute",
  },
  shareSomethingHere: {
    marginLeft: 8,
    display: "none",
    textAlign: "left",
    alignItems: "center",
  },
  shareSomthingHere: {
    marginLeft: 8,
    width: 239,
    color: Color.dimgray,
    fontFamily: FontFamily.text1,
    lineHeight: 27,
    fontSize: FontSize.heading4_size,
  },
  edit1Parent: {
    borderRadius: 16,
    borderColor: "#666",
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  imageGallery1Icon: {
    marginLeft: 16,
  },
  frameGroup: {
    paddingTop: 24,
    paddingBottom: Padding.p_base,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 375,
    backgroundColor: Color.white,
  },
  frameChild: {
    width: 48,
    height: 48,
  },
  katzeHund: {
    width: 200,
    color: Color.sub2,
    fontSize: FontSize.heading3_size,
    fontWeight: "600",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  text: {
    width: 151,
    color: Color.darkgray_100,
    fontSize: FontSize.notice_size,
    marginTop: 8,
    fontFamily: FontFamily.text1,
  },
  katzeHundParent: {
    width: 211,
    marginLeft: 16,
  },
  frameItem: {
    width: 13,
    height: 13,
    marginLeft: 16,
  },
  ellipseParent: {
    alignItems: "center",
  },
  the2021Ghs: {
    color: Color.sub2,
  },
  seeMore1: {
    color: Color.darkgray_100,
  },
  text1: {
    color: Color.sub2,
  },
  seeMore: {
    fontSize: FontSize.notice_size,
  },
  the2021GhsContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  the2021GhsContainer: {
    width: 343,
    fontFamily: FontFamily.text1,
  },
  the2021GhsIndexMeasuresThWrapper: {
    marginTop: 16,
  },
  instanceChild: {
    height: 250,
    marginTop: 16,
    width: 375,
  },
  text2: {
    marginLeft: 4,
    fontSize: FontSize.notice_size,
    color: Color.sub2,
    textAlign: "left",
    fontFamily: FontFamily.text1,
  },
  socialNetworkIcon: {
    marginLeft: 4,
  },
  thumbsUp1Parent: {
    alignItems: "center",
  },
  comments: {
    fontSize: FontSize.notice_size,
    color: Color.sub2,
    textAlign: "left",
    fontFamily: FontFamily.text1,
  },
  frameInner: {
    width: 2,
    height: 2,
    marginLeft: 8,
  },
  reposts: {
    fontSize: FontSize.notice_size,
    color: Color.sub2,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.text1,
  },
  commentsParent: {
    marginLeft: 77,
    alignItems: "center",
  },
  frameView: {
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xs,
    marginTop: 16,
    alignItems: "center",
    width: 375,
  },
  groupChild: {
    height: 32,
    width: 94,
    backgroundColor: Color.white,
  },
  socialNetworkIcon1: {
    top: 4,
    left: 35,
    position: "absolute",
  },
  groupChildLayout: {
    height: 32,
    width: 94,
  },
  groupParent: {
    borderColor: "rgba(73, 198, 229, 0.4)",
    paddingTop: Padding.p_5xs,
    backgroundColor: Color.white,
  },
  vote: {
    fontSize: FontSize.text4_size,
    height: 9,
    textAlign: "center",
    color: Color.black,
    width: 94,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.text1,
    alignItems: "center",
  },
  voteParent: {
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent1: {
    marginTop: 16,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  frameContainer: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    marginTop: 8,
  },
  socialNetworkIcon8: {
    top: 28,
    left: 59,
    position: "absolute",
  },
  frameParent: {
    top: 94,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  groupChild6: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  pharmacy2Icon: {
    top: 16,
    left: 25,
    position: "absolute",
  },
  component27: {
    marginLeft: -188,
    bottom: 0,
    left: "50%",
    borderColor: "#a3a3a3",
    position: "absolute",
  },
  groupChild10: {
    height: "76%",
    bottom: "24%",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
  text12: {
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
    opacity: 0.45,
    height: 13,
  },
  text13: {
    width: "12.8%",
    left: "43.73%",
    fontWeight: "500",
    fontFamily: FontFamily.sFUITextMedium,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
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
    height: "20%",
    bottom: "80%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  instanceChild1: {
    backgroundColor: Color.skyblue_100,
    top: "0%",
    height: "100%",
  },
  chevronLeftIcon: {
    top: 20,
    left: 16,
    position: "absolute",
  },
  qunLM: {
    top: 11,
    left: 154,
    lineHeight: 34,
    color: Color.oldlace,
    textAlign: "center",
    display: "none",
    fontWeight: "600",
    fontSize: FontSize.heading4_size,
    position: "absolute",
  },
  rectangleParent10: {
    top: "20%",
    height: "80%",
  },
  rectangleParent9: {
    left: "0%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "2.4%",
    top: "23%",
    right: "76.27%",
    bottom: "-3%",
    width: "21.33%",
    height: "80%",
    position: "absolute",
  },
  communityHealthcare: {
    top: "55%",
    fontFamily: FontFamily.heading3,
    fontWeight: "600",
    fontSize: FontSize.heading3_size,
  },
  welcome: {
    top: "39%",
    fontFamily: FontFamily.text1,
    lineHeight: 27,
    fontSize: FontSize.heading4_size,
  },
  chat5: {
    left: "89.33%",
    top: "47%",
    right: "4.27%",
    bottom: "29%",
    width: "6.4%",
    height: "24%",
    position: "absolute",
  },
  component38: {
    height: 100,
    width: 375,
  },
  home: {
    backgroundColor: Color.gainsboro,
    flex: 1,
    height: 1576,
    width: "100%",
  },
});

export default Home;
