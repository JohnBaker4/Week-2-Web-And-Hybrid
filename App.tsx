import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { useState } from "react";


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.linkText}>Show modal message</Text>
      </Pressable>

      <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              This is a modal you opened up.
            </Text>

            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  linkText: {
    fontSize: 18,
    color: "blue"
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalView: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8
  },
  modalText: {
    fontSize: 16,
    marginBottom: 12
  },
  closeText: {
    color: "blue",
    fontSize: 16
  }
});

