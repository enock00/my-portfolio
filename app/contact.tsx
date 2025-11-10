import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contact() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Get in Touch</Text>
        <View style={styles.underline} />

        <Image
          source={require("../assets/images/enock.jpg")}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>enockzy54@gmail.com</Text>

          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>+254 726 995585</Text>

          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>Nairobi, Kenya</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fafafa" },
  container: { alignItems: "center", padding: 24 },
  heading: { fontSize: 34, fontWeight: "800", color: "#222" },
  underline: {
    width: 65,
    height: 4,
    backgroundColor: "#007AFF",
    marginVertical: 10,
    borderRadius: 3,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginVertical: 20,
    backgroundColor: "#eee",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  label: { fontSize: 16, fontWeight: "600", marginTop: 12, color: "#4a4a4a" },
  value: { fontSize: 17, color: "#222" },
});
