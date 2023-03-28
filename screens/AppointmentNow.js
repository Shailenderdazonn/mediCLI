import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AppointmentNow = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.appointmentNow, styles.appointmentNowShadowBox]}>
      <View style={[styles.adminAllergistsimmunologists, styles.adminLayout]}>
        <View
          style={[
            styles.adminAllergistsimmunologistsChild,
            styles.childPosition,
            styles.adminLayout,
            styles.appointmentNowShadowBox,
          ]}
        />
        <Text style={styles.appointmentBook}>Appointment Book</Text>
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
      <View style={[styles.selectDepartment, styles.selectLayout]}>
        <View style={[styles.selectDepartmentChild, styles.childLayout]} />
        <Text style={[styles.selectDepartment1, styles.time1Typo]}>
          Select Department
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.selectDoctors, styles.selectLayout]}>
        <View style={[styles.selectDepartmentChild, styles.childLayout]} />
        <Text style={[styles.selectDepartment1, styles.time1Typo]}>
          Select Doctors
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.selectServices, styles.selectLayout]}>
        <View style={[styles.selectDepartmentChild, styles.childLayout]} />
        <Text style={[styles.selectDepartment1, styles.time1Typo]}>
          Select Services
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.name, styles.namePosition]}>
        <View style={[styles.selectDepartmentChild, styles.childLayout]} />
        <Text style={[styles.selectDepartment1, styles.time1Typo]}>Name</Text>
      </View>
      <View style={[styles.phoneNumber, styles.namePosition]}>
        <View style={[styles.selectDepartmentChild, styles.childLayout]} />
        <Text style={[styles.selectDepartment1, styles.time1Typo]}>
          Phone Number
        </Text>
      </View>
      <View style={[styles.date, styles.namePosition]}>
        <View style={[styles.selectDepartmentChild, styles.childLayout]} />
        <Image
          style={[styles.date1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/date-1.png")}
        />
        <Text style={[styles.selectDepartment1, styles.time1Typo]}>Date</Text>
      </View>
      <View style={[styles.time, styles.namePosition]}>
        <View style={[styles.timeChild, styles.childLayout]} />
        <Image
          style={[styles.date1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/time-1.png")}
        />
        <Text style={[styles.time1, styles.time1Typo]}>Time</Text>
      </View>
      <View style={[styles.message, styles.namePosition]}>
        <View style={[styles.selectDepartmentChild, styles.childLayout]} />
        <Text style={[styles.selectDepartment1, styles.time1Typo]}>
          Message
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.childPosition,
          ]}
        />
        <Text style={styles.bookAppointment}>Book Appointment</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appointmentNowShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  adminLayout: {
    height: 86,
    width: 357,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  selectLayout: {
    width: 311,
    left: 23,
    height: 26,
    position: "absolute",
  },
  childLayout: {
    height: 2,
    backgroundColor: Color.gray_100,
    width: 311,
    left: 0,
    position: "absolute",
  },
  time1Typo: {
    color: Color.gray_100,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_sm,
    left: 11,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  namePosition: {
    left: 24,
    width: 311,
    position: "absolute",
  },
  groupChildLayout: {
    height: 52,
    width: 237,
    position: "absolute",
  },
  adminAllergistsimmunologistsChild: {
    borderTopLeftRadius: Border.br_23xl,
    borderTopRightRadius: Border.br_23xl,
    backgroundColor: Color.white,
  },
  appointmentBook: {
    left: 55,
    fontSize: FontSize.size_lg,
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    color: Color.lightLabelPrimary,
    width: 248,
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
    left: 25,
    width: 24,
    height: 23,
    top: 48,
    position: "absolute",
  },
  adminAllergistsimmunologists: {
    left: -1,
    top: 0,
  },
  selectDepartmentChild: {
    top: 24,
  },
  selectDepartment1: {
    top: 0,
  },
  vectorIcon: {
    height: "30.56%",
    width: "3.31%",
    top: "30.77%",
    right: "4.73%",
    bottom: "38.67%",
    left: "91.96%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  selectDepartment: {
    top: 151,
    height: 26,
  },
  selectDoctors: {
    top: 221,
    height: 26,
  },
  selectServices: {
    top: 291,
    height: 26,
  },
  name: {
    top: 351,
    height: 26,
  },
  phoneNumber: {
    top: 421,
    height: 26,
  },
  date1Icon: {
    left: 281,
    width: 20,
    height: 20,
    top: 0,
  },
  date: {
    top: 491,
    height: 26,
  },
  timeChild: {
    top: 26,
  },
  time1: {
    top: 2,
  },
  time: {
    top: 559,
    height: 28,
  },
  message: {
    top: 631,
    height: 26,
  },
  groupChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.tomato_100,
  },
  bookAppointment: {
    top: 12,
    left: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.latoRegular,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 194,
    height: 29,
    position: "absolute",
  },
  rectangleParent: {
    top: 716,
    left: 60,
  },
  appointmentNow: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.whitesmoke_300,
    flex: 1,
    height: 792,
    width: "100%",
  },
});

export default AppointmentNow;
