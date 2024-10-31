import * as React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import axios from "axios";
const Login = () => {
  const navigation = useNavigation();
  const [employeeId, setEmployeeId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = () => {
    axios
      .post("http://192.168.0.104:3000/Login", {
        Employee_id: employeeId,
        password: password,
      })
      .then((response) => {
        console.log(response.data.info);
        if (response.data.status === 200) {
          navigation.navigate("Profile",{responseData:response.data.info});
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmployeeIdChange = (text) => {
    console.log("Employee ID changed:", text);
    setEmployeeId(text);
  };
  const handlePasswordChange = (text) => {
    console.log("Password changed:", text);
    setPassword(text);
  };
  return (
    <View style={styles.login1}>
      <View style={styles.loginTopBox} />
      <ImageBackground
        style={styles.loginRegisterVectorUserIcoIcon}
        resizeMode="cover"
        source={require("../assets/5095096621loginregistervectorusericonpngtransparentpngremovebgpreview1.png")}
      />
      <Text style={styles.login}>Login</Text>
      <View style={styles.loginbox} />
      <Text style={[styles.employeeId, styles.passwordTypo]}>employee_id</Text>
      <View style={[styles.login1Item, styles.login1Layout]} />
      <TextInput
        style={[styles.employeeIdInput, styles.enterPasswdPosition]}
        placeholder="employee_id"
        onChangeText={(text) => handleEmployeeIdChange(text)}
        value={employeeId}
      />
      <Text style={[styles.password, styles.passwordTypo]}>password</Text>
      <View style={[styles.login1Inner, styles.login1Layout]} />
      <TextInput
        style={[styles.enterPasswd, styles.enterPasswdPosition]}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(text) => handlePasswordChange(text)}
        value={password}
      />
      <TouchableOpacity
        style={styles.loginbt}
        activeOpacity={0.2}
        onPress={() => handleLogin()}
      />
      <Text style={styles.login2}>Login</Text>
      <Pressable
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("ChangePassword")}
      >
        <Text style={[styles.forgotPassword1, styles.loginTypo]}>
          forgot password?
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  passwordTypo: {
    height: 25,
    width: 149,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    left: 43,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontWeight: "600",
    position: "absolute",
  },
  login1Layout: {
    width: 232,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 43,
    height: 1,
    position: "absolute",
  },
  enterPasswdPosition: {
    width: 188,
    backgroundColor: Color.colorPalegreen_100,
    left: 43,
    position: "absolute",
  },
  loginTopBox: {
    top: -21,
    left: -8,
    backgroundColor: Color.colorLimegreen,
    width: 368,
    height: 82,
    position: "absolute",
  },
  loginRegisterVectorUserIcoIcon: {
    top: 205,
    left: 144,
    width: 63,
    height: 63,
    position: "absolute",
  },
  login: {
    top: 271,
    left: 106,
    fontSize: 32,
    width: 139,
    height: 50,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  login1Child: {
    top: 328,
    left: 129,
    width: 94,
    height: 1,
    position: "absolute",
  },
  loginbox: {
    top: 357,
    left: 28,
    borderRadius: 18,
    backgroundColor: "#9afd9a",
    width: 299,
    height: 315,
    position: "absolute",
  },
  employeeId: {
    top: 387,
  },
  login1Item: {
    top: 436,
  },
  employeeIdInput: {
    top: 412,
    height: 21,
  },
  password: {
    top: 496,
  },
  login1Inner: {
    top: 549,
  },
  enterPasswd: {
    top: 524,
    height: 20,
  },
  loginbt: {
    top: 605,
    left: 114,
    borderRadius: 16,
    backgroundColor: Color.colorForestgreen_100,
    width: 119,
    height: 40,
    position: "absolute",
  },
  login2: {
    top: 613,
    left: 127,
    width: 99,
    height: 24,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  forgotPassword1: {
    fontSize: 11,
    color: "#39a039",
    width: 123,
    height: 15,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  forgotPassword: {
    left: 30,
    top: 563,
    position: "absolute",
  },
  login1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Login;
