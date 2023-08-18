// Annahme: Sie haben eine separate Datei namens 'AppointmentScreen.js' für die AppointmentScreen-Komponente.

// AppointmentScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AppointmentScreen = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [employee, setEmployee] = useState('');

  const handleCreateAppointment = () => {
    // Fügen Sie hier die Logik hinzu, um den Termin zu erstellen
    // Hier können Sie die eingegebenen Daten verwenden: date, time, description, employee
    // Zum Beispiel: API-Aufruf oder lokale Speicherung der Daten
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Termin erstellen</Text>
      <TextInput
        placeholder="Datum"
        value={date}
        onChangeText={setDate}
        style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Uhrzeit"
        value={time}
        onChangeText={setTime}
        style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Beschreibung"
        value={description}
        onChangeText={setDescription}
        style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Mitarbeiter"
        value={employee}
        onChangeText={setEmployee}
        style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
      />
      <Button title="Termin erstellen" onPress={handleCreateAppointment} />
    </View>
  );
};

export default AppointmentScreen;

// Rest des Codes bleibt unverändert.
