import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Nurses = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nurses}>
      <View style={styles.searchMedical}>
        <View style={styles.searchMedicalChild} />
        <Text style={styles.searchNurses}>Search Nurses</Text>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.homeNurses, styles.homeTypo]}>Home Nurses</Text>
        <Image
          style={[styles.home11Icon, styles.home11IconPosition]}
          resizeMode="cover"
          source={require("../assets/home1-1.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.oldAgeHomeNurses, styles.homeTypo]}>{`Old-Age Home
Nurses`}</Text>
        <Image
          style={[styles.oldAgeHome11Icon, styles.home11IconPosition]}
          resizeMode="cover"
          source={require("../assets/oldagehome1-1.png")}
        />
      </View>
      <View style={styles.adminPosition}>
        <View style={[styles.adminChild, styles.adminPosition]} />
        <Text style={[styles.nurses1, styles.nurses1Position]}>{`Nurses
`}</Text>
        <Pressable
          style={[styles.arrowLeft1, styles.nurses1Position]}
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
  rectangleLayout: {
    height: 120,
    width: 144,
    top: 259,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_mini,
    height: 120,
    width: 144,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.latoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 77,
    color: Color.lightLabelPrimary,
    position: "absolute",
  },
  home11IconPosition: {
    height: 57,
    top: 12,
    position: "absolute",
  },
  adminPosition: {
    height: 88,
    width: 357,
    left: 0,
    top: 0,
    position: "absolute",
  },
  nurses1Position: {
    top: 48,
    position: "absolute",
  },
  searchMedicalChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.whitesmoke_200,
    borderStyle: "solid",
    borderColor: "#0f6d65",
    borderWidth: 1,
    left: 0,
    top: 0,
    height: 61,
    width: 304,
    position: "absolute",
  },
  searchNurses: {
    top: 22,
    left: 45,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.latoRegular,
    color: Color.darkgray,
    width: 107,
    height: 17,
    textAlign: "left",
    position: "absolute",
  },
  searchIcon: {
    top: 19,
    left: 22,
    width: 20,
    height: 22,
    position: "absolute",
  },
  searchMedical: {
    top: 146,
    left: 27,
    height: 61,
    width: 304,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.forestgreen,
  },
  homeNurses: {
    left: 30,
  },
  home11Icon: {
    left: 47,
    width: 51,
  },
  rectangleParent: {
    left: 184,
  },
  groupItem: {
    backgroundColor: Color.darksalmon,
  },
  oldAgeHomeNurses: {
    left: 26,
  },
  oldAgeHome11Icon: {
    left: 42,
    width: 61,
  },
  rectangleGroup: {
    left: 30,
  },
  adminChild: {
    borderTopLeftRadius: Border.br_23xl,
    borderTopRightRadius: Border.br_23xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.white,
  },
  nurses1: {
    left: 54,
    fontSize: FontSize.size_lg,
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    width: 111,
    height: 20,
    color: Color.lightLabelPrimary,
    top: 48,
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
  nurses: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 792,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Nurses;
