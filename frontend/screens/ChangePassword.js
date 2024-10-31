import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.changePassword1}>
      <View style={styles.changePasswdBox} />
      <Text style={styles.resetPassword}>Reset Password</Text>
      <View style={styles.passswordbox} />
      <Text style={[styles.enterNewPassword, styles.newTypo]}>
        Enter new password
      </Text>
      <View style={[styles.changePassword1Child, styles.changeLayout]} />
      <Text style={[styles.retypeNewPassword, styles.newTypo]}>
        Retype new password
      </Text>
      <View style={[styles.changePassword1Item, styles.changeLayout]} />
      <TextInput style={styles.enterPassword} />
      <TextInput style={[styles.retypeNewPassword1, styles.submitLayout]} />
      <TouchableOpacity
        style={styles.submitbt}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Login")}
      />
      <Text style={[styles.submit, styles.submitLayout]}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  newTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_base,
    left: 48,
    color: Color.colorBlack,
    fontWeight: "600",
    position: "absolute",
  },
  changeLayout: {
    height: 1,
    width: 246,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 48,
    position: "absolute",
  },
  submitLayout: {
    height: 26,
    position: "absolute",
  },
  changePasswdBox: {
    top: 0,
    left: -14,
    backgroundColor: Color.colorLimegreen,
    width: 388,
    height: 62,
    position: "absolute",
  },
  resetPassword: {
    top: 300,
    left: 70,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    width: 223,
    height: 61,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    position: "absolute",
  },
  passswordbox: {
    top: 361,
    left: 34,
    borderRadius: 15,
    width: 293,
    height: 328,
    backgroundColor: Color.colorPalegreen_100,
    position: "absolute",
  },
  enterNewPassword: {
    top: 385,
    width: 190,
    height: 35,
  },
  changePassword1Child: {
    top: 454,
  },
  retypeNewPassword: {
    top: 497,
    width: 158,
    height: 21,
  },
  changePassword1Item: {
    top: 564,
  },
  enterPassword: {
    top: 420,
    width: 179,
    height: 23,
    left: 48,
    backgroundColor: Color.colorPalegreen_100,
    position: "absolute",
  },
  retypeNewPassword1: {
    top: 529,
    left: 47,
    width: 178,
    backgroundColor: Color.colorPalegreen_100,
  },
  submitbt: {
    top: 615,
    left: 111,
    borderRadius: 11,
    backgroundColor: Color.colorForestgreen_100,
    width: 120,
    height: 37,
    position: "absolute",
  },
  submit: {
    top: 623,
    left: 123,
    width: 92,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_base,
    height: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
  },
  changePassword1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ChangePassword;
