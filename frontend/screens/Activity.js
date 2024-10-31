import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Activity = () => {
  const navigation = useNavigation();
  const handleAccountIconPress = () => {
    console.log("handleAccountIconPress");
    navigation.navigate("Profile");
  };

  const handleHomeIconPress = () => {
    console.log("handleHomeIconPress");
    navigation.navigate("Maps");
  };
  const handleActivityIconPress = () => {
    navigation.navigate("Activity");
  };
  return (
    <View style={styles.androidLarge1}>
      <View style={[styles.heading, styles.bodyLayout]} />
      <Text style={[styles.yourRecentActivity, styles.totalTypo1]}>
        {" "}
        Your Recent Activity
      </Text>
      <View style={[styles.body, styles.bodyLayout]} />
      <Text style={[styles.totalDistanceCovered, styles.totalTypo]}>
        Total distance covered:
      </Text>
      <Text style={[styles.recentSpotsCovered, styles.totalTypo]}>
        Recent spots covered:
      </Text>
      <Text style={[styles.totalGarbageSpots, styles.totalTypo]}>
        Total garbage spots covered:
      </Text>
      <View style={styles.navBar} />
      <TouchableOpacity onPress={handleActivityIconPress}>
        <ImageBackground
          style={[styles.garbageTruckIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/garbagetruck.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleHomeIconPress}>
        <ImageBackground
          style={[styles.homePageIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/homepage.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAccountIconPress}>
        <ImageBackground
          style={[styles.accountIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/account.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.activity, styles.homeTypo]}>Activity</Text>
      <Text style={[styles.home, styles.homeTypo]}>home</Text>
      <Text style={[styles.profile, styles.homeTypo]}>profile</Text>
      <Text style={[styles.text, styles.textTypo]}>12</Text>
      <View style={styles.androidLarge1Child} />
      <Text style={[styles.text1, styles.textTypo]}>15</Text>
      <View style={[styles.androidLarge1Item, styles.androidPosition]} />
      <Text style={[styles.bandra, styles.textTypo]}>Bandra</Text>
      <View style={[styles.androidLarge1Inner, styles.androidPosition]} />
      <Text style={[styles.andheri, styles.textTypo]}>Andheri</Text>
      <View style={[styles.lineView, styles.androidPosition]} />
      <Text style={[styles.kurla, styles.textTypo]}>Kurla</Text>
      <View style={[styles.androidLarge1Child1, styles.androidPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyLayout: {
    width: 360,
    backgroundColor: "#66ec66",
    borderRadius: Border.br_13xl,
    position: "absolute",
  },
  totalTypo1: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  totalTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  iconPosition: {
    height: 30,
    top: 693,
    position: "absolute",
  },
  homeTypo: {
    height: 15,
    width: 45,
    fontSize: FontSize.size_smi,
    top: 723,
    textAlign: "center",
    fontFamily: FontFamily.jostMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  androidPosition: {
    left: 104,
    height: 1,
    width: 155,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  heading: {
    marginLeft: -180,
    top: 3,
    height: 94,
    left: "50%",
    backgroundColor: Color.colorLimegreen_100,
    borderRadius: Border.br_13xl,
  },
  yourRecentActivity: {
    marginLeft: -120,
    top: 32,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 262,
    height: 43,
  },
  body: {
    top: 142,
    left: 0,
    height: 532,
  },
  totalDistanceCovered: {
    marginLeft: -118,
    top: 175,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  recentSpotsCovered: {
    marginLeft: -108,
    top: 424,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  totalGarbageSpots: {
    marginLeft: -140,
    top: 301,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  navBar: {
    top: 681,
    left: 30,
    borderRadius: 32,
    backgroundColor: "#66ec66",
    width: 301,
    height: 69,
    position: "absolute",
  },
  garbageTruckIcon: {
    left: 83,
    width: 30,
    height: 30,
    top: 693,
  },
  homePageIcon: {
    left: 165,
    width: 30,
    height: 30,
    top: 693,
  },
  accountIcon: {
    left: 246,
    width: 34,
    height: 30,
    top: 693,
  },
  activity: {
    left: 76,
  },
  home: {
    left: 158,
  },
  profile: {
    left: 240,
  },
  text: {
    top: 220,
    left: 82,
    width: 187,
    height: 45,
    fontFamily: FontFamily.jostMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  androidLarge1Child: {
    top: 254,
    left: 101,
    height: 1,
    width: 155,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  text1: {
    top: 345,
    left: 86,
    width: 177,
    height: 55,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  androidLarge1Item: {
    top: 380,
  },
  bandra: {
    top: 467,
    left: 91,
    width: 167,
    height: 33,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  androidLarge1Inner: {
    top: 500,
  },
  andheri: {
    top: 534,
    left: 109,
    width: 137,
    height: 29,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  lineView: {
    top: 570,
  },
  kurla: {
    top: 599,
    left: 122,
    width: 118,
    height: 34,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  androidLarge1Child1: {
    top: 633,
  },
  androidLarge1: {
    backgroundColor: "#e4d9d9",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Activity;
