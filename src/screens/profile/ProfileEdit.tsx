import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { TextInput, Button, Avatar, Title } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";

const ProfileEditScreen = () => {
  const [nombre, setNombre] = useState("Osmar Casillas Gallardo");
  const [correo, setCorreo] = useState("osmarcasillas055@gmail.com");
  const [fechaNacimiento, setFechaNacimiento] = useState("28/10/2003");
  const [telefono, setTelefono] = useState("");

  const handlePhoneChange = (text: string) => {
    setTelefono(text.slice(0, 10)); // Limitar a 10 caracteres
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.avatarContainer}>
        <Avatar.Image
          source={{ uri: "https://via.placeholder.com/150" }}
          size={100}
          style={styles.avatar}
        />
      </View>

      <View style={styles.formContainer}>
        <Title style={styles.formTitle}>Editar Perfil</Title>

        <TextInput
          label="Nombre"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Correo Electrónico"
          value={correo}
          onChangeText={setCorreo}
          style={styles.input}
          mode="outlined"
          keyboardType="email-address"
        />

        <View style={styles.phoneContainer}>
          <PhoneInput
            defaultCode="MX"
            layout="first"
            value={telefono}
            onChangeText={handlePhoneChange}
            containerStyle={styles.phoneInput}
            textInputStyle={styles.phoneTextInput}
          />
        </View>

        <TextInput
          label="Fecha de Nacimiento"
          value={fechaNacimiento}
          onChangeText={setFechaNacimiento}
          style={styles.input}
          mode="outlined"
        />

        <View style={styles.buttonContainer}>
          <Button mode="contained" style={styles.saveButton}>
            Guardar Cambios
          </Button>
          <Button mode="text" style={styles.discardButton}>
            Cancelar
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
    flexGrow: 1,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    width: "100%",
  },
  phoneContainer: {
    marginBottom: 15,
  },
  phoneInput: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  phoneTextInput: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  saveButton: {
    width: "55%",
    paddingVertical: 10,
    marginBottom: 10,
  },
  discardButton: {
    width: "55%",
    paddingVertical: 10,
    color: "#666",
  },
});

export default ProfileEditScreen;
