import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.setting, styles.settingShadowBox]}>
      <View style={styles.adminPosition}>
        <View
          style={[
            styles.adminChild,
            styles.adminPosition,
            styles.settingShadowBox,
          ]}
        />
        <Text style={styles.setting1}>Setting</Text>
        <Pressable
          style={styles.arrowLeft1}
          onPress={() => navigation.navigate("CategoriesList")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrowleft-1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.mySubscriptionsParent, styles.groupLayout1]}>
          <Text style={[styles.mySubscriptions, styles.subscriptionsTypo]}>
            My Subscriptions
          </Text>
          <View style={[styles.groupChild, styles.groupLayout1]} />
        </View>
        <View
          style={[
            styles.mySubscriptionsGroup,
            styles.parentLayout,
            styles.parentLayout1,
          ]}
        >
          <Text style={[styles.mySubscriptions1, styles.subscriptionsTypo]}>
            My Subscriptions
          </Text>
          <Image
            style={[styles.keyboardArrowRight1Icon, styles.parentLayout]}
            resizeMode="cover"
            source={require("../assets/keyboardarrowright-1.png")}
          />
        </View>
        <View
          style={[
            styles.myAppointmentsParent,
            styles.parentLayout,
            styles.parentLayout1,
          ]}
        >
          <Text style={[styles.mySubscriptions1, styles.subscriptionsTypo]}>
            My Appointments
          </Text>
          <Image
            style={[styles.keyboardArrowRight1Icon, styles.parentLayout]}
            resizeMode="cover"
            source={require("../assets/keyboardarrowright-1.png")}
          />
        </View>
        <View
          style={[
            styles.subscriptionPlansParent,
            styles.parentLayout,
            styles.parentLayout1,
          ]}
        >
          <Text style={[styles.mySubscriptions1, styles.subscriptionsTypo]}>
            Subscription Plans
          </Text>
          <Image
            style={[styles.keyboardArrowRight1Icon, styles.parentLayout]}
            resizeMode="cover"
            source={require("../assets/keyboardarrowright-1.png")}
          />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={[styles.mySubscriptionsParent, styles.groupLayout1]}>
          <Text style={[styles.mySubscriptions, styles.subscriptionsTypo]}>
            More
          </Text>
          <View style={[styles.groupChild, styles.groupLayout1]} />
        </View>
        <View
          style={[
            styles.mySubscriptionsGroup,
            styles.parentLayout,
            styles.parentLayout1,
          ]}
        >
          <Text style={[styles.mySubscriptions1, styles.subscriptionsTypo]}>
            Departments
          </Text>
          <Image
            style={[styles.keyboardArrowRight1Icon, styles.parentLayout]}
            resizeMode="cover"
            source={require("../assets/keyboardarrowright-1.png")}
          />
        </View>
        <View
          style={[
            styles.myAppointmentsParent,
            styles.parentLayout,
            styles.parentLayout1,
          ]}
        >
          <Text style={[styles.mySubscriptions1, styles.subscriptionsTypo]}>
            Facilities
          </Text>
          <Image
            style={[styles.keyboardArrowRight1Icon, styles.parentLayout]}
            resizeMode="cover"
            source={require("../assets/keyboardarrowright-1.png")}
          />
        </View>
        <View
          style={[
            styles.subscriptionPlansParent,
            styles.parentLayout,
            styles.parentLayout1,
          ]}
        >
          <Text style={[styles.mySubscriptions1, styles.subscriptionsTypo]}>
            Gallery
          </Text>
          <Image
            style={[styles.keyboardArrowRight1Icon, styles.parentLayout]}
            resizeMode="cover"
            source={require("../assets/keyboardarrowright-1.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView, styles.groupLayout1]}>
        <View style={[styles.mySubscriptionsParent, styles.groupLayout1]}>
          <Text style={[styles.mySubscriptions, styles.subscriptionsTypo]}>
            Contact Detail
          </Text>
          <View style={[styles.groupChild, styles.groupLayout1]} />
        </View>
        <View
          style={[
            styles.mySubscriptionsGroup,
            styles.parentLayout,
            styles.parentLayout1,
          ]}
        >
          <Text
            style={[styles.mySubscriptions1, styles.subscriptionsTypo]}
          >{`Term & Condition`}</Text>
          <Image
            style={[styles.keyboardArrowRight1Icon, styles.parentLayout]}
            resizeMode="cover"
            source={require("../assets/keyboardarrowright-1.png")}
          />
        </View>
        <View
          style={[
            styles.myAppointmentsParent,
            styles.parentLayout,
            styles.parentLayout1,
          ]}
        >
          <Text style={[styles.mySubscriptions1, styles.subscriptionsTypo]}>
            About Us
          </Text>
          <Image
            style={[styles.keyboardArrowRight1Icon, styles.parentLayout]}
            resizeMode="cover"
            source={require("../assets/keyboardarrowright-1.png")}
          />
        </View>
      </View>
      <View style={[styles.profile, styles.profilePosition]}>
        <Image
          style={styles.circleIcon}
          resizeMode="cover"
          source={require("../assets/circle.png")}
        />
        <Image
          style={[styles.addPhoto5Icon, styles.profilePosition]}
          resizeMode="cover"
          source={require("../assets/addphoto-5.png")}
        />
        <Text style={[styles.signIn, styles.signInTypo, styles.signInPosition]}>
          Sign In
        </Text>
        <Pressable
          style={[styles.profile1, styles.signInPosition]}
          onPress={() => navigation.navigate("ProfileUpdate")}
        >
          <Text style={[styles.profile2, styles.signInTypo]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  adminPosition: {
    height: 88,
    width: 357,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 134,
    width: 307,
    left: 24,
    position: "absolute",
  },
  groupLayout1: {
    width: 307,
    position: "absolute",
  },
  subscriptionsTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 24,
    position: "absolute",
  },
  parentLayout1: {
    width: 305,
    height: 24,
    left: 0,
  },
  profilePosition: {
    left: 26,
    position: "absolute",
  },
  signInTypo: {
    fontFamily: FontFamily.latoRegular,
    textAlign: "left",
  },
  signInPosition: {
    left: 99,
    position: "absolute",
  },
  adminChild: {
    borderTopLeftRadius: Border.br_23xl,
    borderTopRightRadius: Border.br_23xl,
    backgroundColor: Color.white,
  },
  setting1: {
    left: 54,
    fontSize: FontSize.size_lg,
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    color: Color.lightLabelPrimary,
    width: 111,
    height: 20,
    textAlign: "left",
    top: 48,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeft1: {
    height: 23,
    width: 24,
    left: 24,
    top: 48,
    position: "absolute",
  },
  mySubscriptions: {
    color: Color.gray_300,
  },
  groupChild: {
    top: 30,
    left: 1,
    borderStyle: "solid",
    borderColor: "#8a8a8a",
    borderTopWidth: 1,
    height: 1,
  },
  mySubscriptionsParent: {
    height: 30,
    left: 0,
    width: 307,
    top: 0,
  },
  mySubscriptions1: {
    color: Color.darkgray_100,
  },
  keyboardArrowRight1Icon: {
    left: 281,
    overflow: "hidden",
    width: 24,
    top: 0,
  },
  mySubscriptionsGroup: {
    top: 50,
  },
  myAppointmentsParent: {
    top: 80,
  },
  subscriptionPlansParent: {
    top: 110,
  },
  groupParent: {
    top: 274,
  },
  groupContainer: {
    top: 456,
  },
  groupView: {
    top: 638,
    height: 104,
    left: 24,
  },
  circleIcon: {
    left: -4,
    width: 89,
    height: 89,
    top: 0,
    position: "absolute",
  },
  addPhoto5Icon: {
    top: 26,
    width: 29,
    height: 29,
    overflow: "hidden",
  },
  signIn: {
    top: 25,
    fontSize: FontSize.size_sm,
    color: "#003769",
  },
  profile2: {
    fontSize: FontSize.size_3xs,
    color: "#817b7b",
  },
  profile1: {
    top: 44,
  },
  profile: {
    top: 137,
    width: 141,
    height: 81,
  },
  setting: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.whitesmoke_300,
    flex: 1,
    height: 792,
    width: "100%",
  },
});

export default Setting;
