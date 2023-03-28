import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ProfileUpdate = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profileUpdate, styles.adminChildShadowBox]}>
      <View style={[styles.register, styles.registerLayout]}>
        <View
          style={[
            styles.registerChild,
            styles.registerChildPosition,
            styles.registerLayout,
          ]}
        />
        <Text style={[styles.register1, styles.register1Typo]}>Register</Text>
      </View>
      <View style={[styles.confirmPassword, styles.passwordLayout]}>
        <Text
          style={[
            styles.confirmPassword1,
            styles.register1Typo,
            styles.registerChildPosition,
          ]}
        >
          Confirm Password
        </Text>
        <View style={styles.confirmPasswordChild} />
      </View>
      <View style={[styles.password, styles.passwordLayout]}>
        <Text
          style={[
            styles.confirmPassword1,
            styles.register1Typo,
            styles.registerChildPosition,
          ]}
        >
          Password
        </Text>
        <View style={styles.confirmPasswordChild} />
      </View>
      <View style={[styles.phoneNumber, styles.passwordLayout]}>
        <Text
          style={[
            styles.confirmPassword1,
            styles.register1Typo,
            styles.registerChildPosition,
          ]}
        >
          Phone Number
        </Text>
        <View style={styles.confirmPasswordChild} />
      </View>
      <View style={[styles.emailAddress, styles.passwordLayout]}>
        <Text
          style={[
            styles.confirmPassword1,
            styles.register1Typo,
            styles.registerChildPosition,
          ]}
        >
          Email Address
        </Text>
        <View style={styles.confirmPasswordChild} />
      </View>
      <View style={[styles.name, styles.passwordLayout]}>
        <Text
          style={[
            styles.confirmPassword1,
            styles.register1Typo,
            styles.registerChildPosition,
          ]}
        >
          Name
        </Text>
        <View style={styles.confirmPasswordChild} />
      </View>
      <Image
        style={styles.profileUserIcon}
        resizeMode="cover"
        source={require("../assets/profile-user.png")}
      />
      <View style={styles.adminPosition}>
        <View
          style={[
            styles.adminChild,
            styles.adminPosition,
            styles.adminChildShadowBox,
          ]}
        />
        <Text style={[styles.profileUpdate1, styles.arrowLeft1Position]}>
          Profile Update
        </Text>
        <Pressable
          style={[styles.arrowLeft1, styles.arrowLeft1Position]}
          onPress={() => navigation.navigate("CategoriesList")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrowleft-1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  adminChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  registerLayout: {
    height: 33,
    width: 199,
    position: "absolute",
  },
  registerChildPosition: {
    left: 0,
    top: 0,
  },
  register1Typo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  passwordLayout: {
    height: 30,
    left: 25,
    width: 307,
    position: "absolute",
  },
  adminPosition: {
    height: 88,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  arrowLeft1Position: {
    top: 48,
    position: "absolute",
  },
  registerChild: {
    borderRadius: 50,
    backgroundColor: Color.tomato_100,
  },
  register1: {
    top: 7,
    left: 69,
    color: Color.white,
    textAlign: "left",
  },
  register: {
    top: 711,
    left: 80,
  },
  confirmPassword1: {
    color: Color.gray_300,
    textAlign: "left",
  },
  confirmPasswordChild: {
    top: 30,
    left: 1,
    borderStyle: "solid",
    borderColor: "#8a8a8a",
    borderTopWidth: 1,
    height: 1,
    width: 307,
    position: "absolute",
  },
  confirmPassword: {
    top: 594,
  },
  password: {
    top: 524,
  },
  phoneNumber: {
    top: 454,
  },
  emailAddress: {
    top: 384,
  },
  name: {
    top: 314,
  },
  profileUserIcon: {
    marginLeft: -63.5,
    top: 144,
    left: "50%",
    width: 129,
    height: 129,
    position: "absolute",
  },
  adminChild: {
    borderTopLeftRadius: Border.br_23xl,
    borderTopRightRadius: Border.br_23xl,
    backgroundColor: Color.white,
  },
  profileUpdate1: {
    left: 54,
    fontSize: FontSize.size_lg,
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    color: Color.lightLabelPrimary,
    width: 141,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeft1: {
    left: 24,
    width: 24,
    height: 23,
  },
  profileUpdate: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.whitesmoke_300,
    flex: 1,
    height: 792,
    width: "100%",
  },
});

export default ProfileUpdate;
