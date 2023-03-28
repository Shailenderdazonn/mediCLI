import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const AllergistsImmunologistsList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.allergistsimmunologistsList}>
      <View style={[styles.adminAllergistsimmunologists, styles.adminLayout]}>
        <View
          style={[
            styles.adminAllergistsimmunologistsChild,
            styles.childShadowBox,
            styles.adminLayout,
          ]}
        />
        <Text style={styles.allergistsimmunologistsList1}>
          Allergists/Immunologists List
        </Text>
        <Pressable
          style={styles.arrowLeft1}
          onPress={() => navigation.navigate("Doctor")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrowleft-1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupLayout1,
            styles.groupChildLayout,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-31.png")}
        />
        <Text style={styles.drRaghav}>{`Dr. Raghav `}</Text>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Text style={[styles.specialization, styles.availableTypo]}>
          Specialization
        </Text>
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Text style={[styles.available, styles.availableTypo]}>Available</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  adminLayout: {
    height: 88,
    width: 357,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 113,
    width: 324,
  },
  groupLayout1: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 170,
    left: 131,
    position: "absolute",
  },
  availableTypo: {
    fontFamily: FontFamily.latoRegular,
    left: 130,
    color: Color.gray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  adminAllergistsimmunologistsChild: {
    borderTopLeftRadius: Border.br_23xl,
    borderTopRightRadius: Border.br_23xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
  },
  allergistsimmunologistsList1: {
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
    height: 88,
    width: 357,
  },
  groupChild: {
    backgroundColor: Color.whitesmoke_200,
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  groupItem: {
    top: 18,
    left: 21,
    width: 84,
    height: 80,
  },
  drRaghav: {
    top: 19,
    fontWeight: "500",
    fontFamily: FontFamily.latoMedium,
    width: 76,
    color: Color.gray_100,
    fontSize: FontSize.size_sm,
    left: 131,
    textAlign: "left",
    position: "absolute",
  },
  groupInner: {
    top: 65,
  },
  rectangleIcon: {
    top: 37,
  },
  specialization: {
    top: 47,
    width: 88,
  },
  groupChild1: {
    top: 94,
  },
  available: {
    top: 76,
    width: 59,
  },
  rectangleParent: {
    top: 126,
    left: 17,
    position: "absolute",
    width: 324,
  },
  allergistsimmunologistsList: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 792,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AllergistsImmunologistsList;
