import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const MobileDesign = () => {
  return (
    <View style={styles.mobileDesign}>
      <Image
        style={styles.image6Icon}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image6Icon: {
    position: "absolute",
    top: 557,
    left: 3639,
    width: 2248,
    height: 2218,
    display: "none",
  },
  mobileDesign: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.whitesmoke_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 792,
  },
});

export default MobileDesign;
