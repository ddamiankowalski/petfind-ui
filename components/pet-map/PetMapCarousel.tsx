import { StyleSheet, View, ScrollView } from "react-native";
import PetMapCarouselItem from "./PetMapCarouselItem";
import { PropsWithChildren } from "react";
import MapView from "react-native-maps";

type PetMapCarouselProps = {
  mapRef: React.RefObject<MapView | null>;
};

export default function PetMapCarousel({
  mapRef,
}: PropsWithChildren<PetMapCarouselProps>) {
  const goToLocation = (lat: number, lng: number) => {
    if (mapRef.current) {
      mapRef.current.animateCamera(
        {
          center: { latitude: lat, longitude: lng },
          zoom: 16,
        },
        { duration: 250 }
      );
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {[...Array(10).keys()].map((i) => (
          <PetMapCarouselItem
            key={i}
            longitute={52.398593}
            latitude={16.930616}
            onMapShow={goToLocation}
            name="Sausage Dog"
            description="Calm and affectionate, with a luxurious coat."
            imageUrl="https://animalcarecentersmyrna.com/wp-content/uploads/2021/08/Untitled-design-2021-08-19T162152.857.png"
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    paddingVertical: 10,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
});
