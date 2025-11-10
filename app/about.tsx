import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>About Me</Text>
        <View style={styles.underline} />

        {/* Profile Image */}
        <Image
          source={require("../assets/images/enock.jpg")}
          style={styles.profileImage}
        />

        <View style={styles.card}>
          <Text style={styles.text}>
            Hi! I’m <Text style={styles.bold}>Enock Langat</Text>, a passionate
            full-stack developer focused on creating engaging digital
            experiences. I love working with modern web & mobile technologies,
            especially <Text style={styles.bold}>React Native</Text>,{" "}
            <Text style={styles.bold}>Next.js</Text>, and{" "}
            <Text style={styles.bold}>Django</Text>.
          </Text>
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
    width: 60,
    height: 4,
    backgroundColor: "#007AFF",
    marginVertical: 10,
    borderRadius: 3,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginVertical: 20,
    backgroundColor: "#ddd",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  text: {
    fontSize: 17,
    color: "#555",
    lineHeight: 26,
    textAlign: "center",
  },
  bold: { fontWeight: "700", color: "#222" },
});

