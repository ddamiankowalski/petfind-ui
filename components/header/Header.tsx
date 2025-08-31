import { fontFamily } from "@/constants/fonts";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import Hamburger from "./Hamburger";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: PropsWithChildren<HeaderProps>) {
  const insets = useSafeAreaInsets();

  if (!title.length) {
    return;
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top, zIndex: 1 }]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Look through all pets</Text>
      </View>

      <Hamburger />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontFamily: fontFamily.bold, fontSize: 24 },
  subtitle: { fontFamily: fontFamily.medium, fontSize: 14, color: "#666" },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    backgroundColor: "#fff",
    overflow: "visible",
  },
});
