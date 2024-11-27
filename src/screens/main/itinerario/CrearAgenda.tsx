import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import Timeline from "react-native-timeline-flatlist";
import DateTimePicker from "@react-native-community/datetimepicker";

type Itinerario = {
  time: string;
  title: string;
  description: string;
};

const CreateAgendaScreen = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [horaInicio, setHoraInicio] = useState<Date | null>(null);
  const [horaFin, setHoraFin] = useState<Date | null>(null);
  const [itinerarios, setItinerarios] = useState<Itinerario[]>([]);
  const [showPicker, setShowPicker] = useState<{
    type: "inicio" | "fin";
    visible: boolean;
  }>({ type: "inicio", visible: false });

  const agregarItinerario = () => {
    if (titulo && horaInicio && horaFin) {
      const nuevoItinerario: Itinerario = {
        time: `${formatTime(horaInicio)} - ${formatTime(horaFin)}`,
        title: titulo,
        description: descripcion || "Sin descripción",
      };
      setItinerarios([...itinerarios, nuevoItinerario]);
      limpiarFormulario();
    } else {
      alert("Por favor completa los campos obligatorios.");
    }
  };

  const limpiarFormulario = () => {
    setTitulo("");
    setDescripcion("");
    setHoraInicio(null);
    setHoraFin(null);
  };

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowPicker({ type: "inicio", visible: false });

    if (selectedDate) {
      if (showPicker.type === "inicio") {
        setHoraInicio(selectedDate);
      } else {
        setHoraFin(selectedDate);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Título del Evento (Obligatorio)"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={descripcion}
          onChangeText={setDescripcion}
        />

        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowPicker({ type: "inicio", visible: true })}
        >
          <Text style={styles.dateButtonText}>
            {horaInicio ? `Inicio: ${formatTime(horaInicio)}` : "Seleccionar Hora de Inicio"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowPicker({ type: "fin", visible: true })}
        >
          <Text style={styles.dateButtonText}>
            {horaFin ? `Fin: ${formatTime(horaFin)}` : "Seleccionar Hora de Fin"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={agregarItinerario}>
          <Text style={styles.addButtonText}>Agregar Evento</Text>
        </TouchableOpacity>
      </View>

      {/* Timeline */}
      <View style={styles.timelineContainer}>
        <Text style={styles.sectionTitle}>Vista de Itinerarios</Text>
        {itinerarios.length > 0 ? (
          <Timeline
            data={itinerarios}
            circleSize={20}
            circleColor="#3498db"
            lineColor="#3498db"
            timeContainerStyle={{ minWidth: 72 }}
            timeStyle={styles.timeStyle}
            descriptionStyle={styles.descriptionStyle}
          />
        ) : (
          <Text style={styles.noDataText}>No hay eventos en el itinerario.</Text>
        )}
      </View>

      {/* DateTimePicker */}
      {showPicker.visible && (
        <DateTimePicker
          value={horaInicio || new Date()}
          mode="time"
          is24Hour={true}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  form: {
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  dateButton: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 15,
  },
  dateButtonText: {
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#3498db",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  timelineContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timeStyle: {
    textAlign: "center",
    backgroundColor: "#3498db",
    color: "#fff",
    padding: 5,
    borderRadius: 8,
    overflow: "hidden",
  },
  descriptionStyle: {
    color: "#555",
  },
  noDataText: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },
});

export default CreateAgendaScreen;