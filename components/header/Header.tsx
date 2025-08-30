import { fontFamily } from "@/constants/fonts";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: PropsWithChildren<HeaderProps>) {
  if (!title.length) {
    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Look through all pets</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontFamily: fontFamily.bold, fontSize: 24, paddingLeft: 24 },
  subtitle: { fontFamily: fontFamily.medium, fontSize: 14, paddingLeft: 24, color: '#666' },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    borderRadius: 25,
    margin: 15,
    paddingVertical: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    backgroundColor: "#fff",
  },
});
