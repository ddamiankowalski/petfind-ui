import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import PetMapCarousel from "./PetMapCarousel";

export default function PetMap() {
  const [region, setRegion] = useState<any>(null);
  const mapRef = useRef<MapView | null>(null);

  const coordinates = [
    {
      latitude: 52.398593,
      longitude: 16.930616,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
      name: "Some name",
    },
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        showsUserLocation={true}
      >
        {coordinates.map((coordinate, i) => (
          <Marker key={i} coordinate={coordinate} />
        ))}
      </MapView>

      <PetMapCarousel mapRef={mapRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    overflow: "visible",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
