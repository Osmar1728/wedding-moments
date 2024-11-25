import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const QRCodeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          source={require("../../../../../assets/wedding.png")}
          style={styles.imageBackground}
        >
          <LinearGradient
            colors={[
              "rgba(255,255,255, 0.8)",
              "transparent",
              "rgba(255,255,255, 0.8)",
            ]}
            style={styles.gradient}
          />
          <View style={styles.overlayTextContainer}>
            <Text style={styles.coupleText}>Asep & Putri</Text>
            <Text style={styles.dateText}>02 / 02 / 2022</Text>
          </View>
        </ImageBackground>

        <View style={styles.messageContainer}>
          <Text style={styles.greetingText}>Assalamualaikum</Text>
          <Text style={styles.subGreetingText}>
            Warrohmatullah Wabarrakatuhu
          </Text>
          <Text style={styles.descriptionText}>
            Pidiendo la gracia y la bendición de Dios. Tenemos la intención de
            celebrar una boda para nuestros hijos e hijas, que Dios, mediante,
            se llevará a cabo en:
          </Text>
        </View>

        <View style={styles.qrContainer}>
          <Image
            source={require("../../../../../assets/QR.png")}
            style={styles.qrImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayTextContainer: {
    position: "absolute",
    alignItems: "center",
    top: "30%",
  },
  coupleText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  dateText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  messageContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7D6E83",
    marginBottom: 5,
  },
  subGreetingText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#7D6E83",
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "center",
    color: "#7D6E83",
  },
  qrContainer: {
    marginTop: 45,
    alignItems: "center",
  },
  qrImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});

export default QRCodeScreen;
