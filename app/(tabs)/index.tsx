import { StyleSheet, Text, View } from "react-native";

export default function TabPage() {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})