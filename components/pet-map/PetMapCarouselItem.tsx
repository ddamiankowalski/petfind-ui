import { PropsWithChildren } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

type PetMapCarouselItemProps = {
  name: string;
  description: string;
  imageUrl: string;
}

export default function PetMapCarouselItem({ name, description, imageUrl }: PropsWithChildren<PetMapCarouselItemProps>) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    width: 250,
    height: 120,
    marginRight: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0,
  },
  image: {
    width: 120,
    height: "100%",
  },
  info: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
