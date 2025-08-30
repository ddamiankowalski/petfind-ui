import { StyleSheet, View } from "react-native";
import { GoogleMaps } from 'expo-maps';

export default function TabPage() {
  return (
    <View style={styles.container}>
      <GoogleMaps.View></GoogleMaps.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 24,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    marginBottom: 20,
    overflow: 'visible'
  }
})