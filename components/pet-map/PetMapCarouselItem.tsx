import { PropsWithChildren } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

type PetMapCarouselItemProps = {
  name: string;
  description: string;
  imageUrl: string;
};

export default function PetMapCarouselItem({
  name,
  description,
  imageUrl,
}: PropsWithChildren<PetMapCarouselItemProps>) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
            <Text numberOfLines={1} style={[styles.buttonText, { color: '#673ab7' }]}>Show on map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.primaryButton]}>
            <Text numberOfLines={1} style={styles.buttonText}>Found him</Text>
          </TouchableOpacity>
        </View>
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
    width: 300,
    height: 140,
    marginRight: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.15,
  },
  image: {
    width: 100,
    height: "100%",
  },
  info: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: "#666",
    flexShrink: 1,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 6,
    marginHorizontal: 4,
    borderRadius: 25,
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#673ab7",
  },
  secondaryButton: {
    color: '#673ab7',
    borderColor: '#673ab7'
  },
  buttonText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },
});
