import { StyleSheet, View, ScrollView } from "react-native";
import PetMapCarouselItem from "./PetMapCarouselItem";

export default function PetMapCarousel() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {[...Array(10).keys()].map((i) => (
          <PetMapCarouselItem
            key={i}
            name="Persian Cat"
            description="Calm and affectionate, with a luxurious coat."
            imageUrl="https://placekitten.com/400/300"
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 10,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowOpacity: 0.1,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
});
