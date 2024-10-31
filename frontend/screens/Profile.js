import * as React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
const Profile = () => {
  const route = useRoute();
  const { responseData } = route.params;
  console.log(responseData);
  const navigation = useNavigation();
  const handleAccountIconPress = () => {
    console.log("handleAccountIconPress");
    navigation.navigate("Profile");
  };

  const handleHomeIconPress = () => {
    +console.log("handleHomeIconPress");
    navigation.navigate("Maps");
  };
  const handleActivityIconPress = () => {
    navigation.navigate("Activity");
  };
  return (
    <View style={styles.profile}>
      <View style={[styles.maps, styles.mapsPosition]} />
      <View style={[styles.navBar, styles.navBarBg]} />
      <Text style={[styles.activity, styles.homeTypo]}>Activity</Text>
      <Text style={[styles.home, styles.homeTypo]}>home</Text>
      <Text style={[styles.profile1, styles.homeTypo]}>profile</Text>
      <View style={[styles.headBack, styles.navBarBg]} />
      <View style={[styles.pDetails, styles.pDetailsBorder]} />
      <ImageBackground
        style={styles.driverIcon}
        resizeMode="cover"
        source={require("../assets/driver.png")}
      />
      <Text style={styles.driver}>{responseData.Name}</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.mumbai, styles.mumbaiTypo]}>{responseData.Location}</Text>
      <Text style={[styles.age, styles.ageTypo]}>Age :</Text>
      <Text style={[styles.text, styles.ageTypo]}>18</Text>
      <Text style={[styles.empId, styles.empIdTypo]}>{`emp_id `}</Text>
      <Text style={[styles.text1, styles.empIdTypo]}>{responseData.Employee_id}</Text>
      <Text style={[styles.vehicleNum, styles.mumbaiTypo]}>vehicle_Num</Text>
      <Image
        style={[styles.profileChild, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <Text style={[styles.mh20144567, styles.ageTypo]}>{responseData.Vehicle_Num}</Text>
      <View style={[styles.profileItem, styles.profilePosition]} />
      <Text style={[styles.dob, styles.dobTypo]}>DOB</Text>
      <Text style={[styles.text2, styles.dobTypo]}>{responseData.DOB}</Text>
      <Image
        style={[styles.profileInner, styles.mapsPosition]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <TouchableOpacity onPress={handleActivityIconPress}>
        <ImageBackground
          style={[styles.garbageTruckIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/garbagetruck.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleHomeIconPress}>
        <ImageBackground
          style={[styles.homePageIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/homepage.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAccountIconPress}>
      <Image
        style={styles.accountIcon}
        contentFit="cover"
        source={require("../assets/account1.png")}
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mapsPosition: {
    left: 13,
    width: 337,
    position: "absolute",
  },
  navBarBg: {
    backgroundColor: Color.colorLimegreen,
    position: "absolute",
  },
  homeTypo: {
    height: 15,
    width: 45,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jostMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  pDetailsBorder: {
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  mumbaiTypo: {
    height: 26,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.jostBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  ageTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.jostBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  empIdTypo: {
    height: 29,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.jostBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  profilePosition: {
    height: 1,
    left: 13,
    position: "absolute",
  },
  dobTypo: {
    top: 515,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.jostBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    width: 30,
    top: 700,
    height: 30,
    position: "absolute",
  },
  maps: {
    top: 285,
    backgroundColor: Color.colorPalegreen_100,
    height: 418,
    width: 337,
    borderRadius: Border.br_13xl,
  },
  navBar: {
    top: 697,
    width: 301,
    height: 69,
    left: 27,
    borderRadius: Border.br_13xl,
  },
  activity: {
    top: 734,
    left: 84,
  },
  home: {
    top: 736,
    left: 173,
  },
  profile1: {
    top: 735,
    left: 253,
  },
  headBack: {
    top: 36,
    left: 0,
    width: 360,
    height: 261,
  },
  pDetails: {
    top: 139,
    left: 18,
    borderRadius: 21,
    borderBottomWidth: 1,
    width: 325,
    height: 223,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  driverIcon: {
    top: 75,
    left: 119,
    width: 117,
    height: 128,
    position: "absolute",
  },
  driver: {
    top: 215,
    left: 97,
    fontSize: FontSize.size_5xl,
    width: 162,
    height: 36,
    fontFamily: FontFamily.jostBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.5%",
    width: "6.11%",
    top: "38.13%",
    right: "56.39%",
    bottom: "58.38%",
    left: "37.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mumbai: {
    top: 290,
    left: 140,
    width: 138,
  },
  age: {
    top: 250,
    left: 129,
    width: 70,
    height: 30,
  },
  text: {
    top: 252,
    left: 178,
    width: 60,
    height: 23,
  },
  empId: {
    top: 390,
    left: 7,
    width: 116,
  },
  text1: {
    top: 392,
    left: 152,
    width: 172,
  },
  vehicleNum: {
    top: 450,
    left: 20,
    width: 133,
  },
  profileChild: {
    top: 428,
    width: 337,
  },
  mh20144567: {
    top: 446,
    left: 176,
    width: 140,
    height: 25,
  },
  profileItem: {
    top: 499,
    borderTopWidth: 1,
    width: 338,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  dob: {
    width: 88,
    height: 28,
    left: 27,
  },
  text2: {
    left: 172,
    width: 136,
    height: 30,
  },
  profileInner: {
    top: 562,
    height: 2,
    width: 337,
  },
  garbageTruckIcon: {
    left: 93,
  },
  homePageIcon: {
    left: 179,
  },
  accountIcon: {
    left: 258,
    width: 36,
    top: 700,
    height: 30,
    position: "absolute",
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;
