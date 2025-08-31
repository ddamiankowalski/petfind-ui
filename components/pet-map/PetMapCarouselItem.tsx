import { fontFamily } from "@/constants/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

type PetMapCarouselItemProps = {
  name: string;
  description: string;
  imageUrl: string;
  longitute: number;
  latitude: number;
  onMapShow: (longitude: number, latitude: number) => void;
};

export default function PetMapCarouselItem({
  name,
  description,
  imageUrl,
  longitute,
  latitude,
  onMapShow,
}: PropsWithChildren<PetMapCarouselItemProps>) {
  const onShowClick = () => {
    onMapShow(longitute, latitude);
  };

  return (
    <View style={styles.card}>
      <View style={styles.topInfo}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>

          <View
            style={{ display: "flex", flexDirection: "column", marginTop: 4 }}
          >
            <Text style={styles.description} numberOfLines={1}>
              <Text style={{ fontFamily: fontFamily.bold }}>Lost:</Text>{" "}
              04/05/2025
            </Text>

            <Text style={styles.description} numberOfLines={1}>
              <Text style={{ fontFamily: fontFamily.bold }}>Last seen:</Text>{" "}
              Poznan, Wilda
            </Text>
            <Text style={styles.description} numberOfLines={1}>
              <Text style={{ fontFamily: fontFamily.bold }}>Phone:</Text> +48
              512 241 024
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={onShowClick}
          style={[styles.button, styles.secondaryButton]}
        >
          <MaterialCommunityIcons name="map" color={"#666"} />
          <Text
            numberOfLines={1}
            style={[styles.buttonText, styles.secondaryButtonText]}
          >
            Show on map
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.primaryButton]}>
          <Text numberOfLines={1} style={styles.buttonText}>
            Found him
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    width: 280,
    marginRight: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.15,
  },
  topInfo: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    padding: 10,
  },
  info: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 4,
    justifyContent: "flex-start",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },
  description: {
    fontSize: 11,
    color: "#666",
    flexShrink: 1,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    gap: 8,
    marginBottom: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#673ab7",
  },
  secondaryButton: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "#666",
    borderWidth: 1,
  },
  secondaryButtonText: {
    color: "#666",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
