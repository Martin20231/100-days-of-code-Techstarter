import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppointmentScreen = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [employee, setEmployee] = useState('');
  const [appointments, setAppointments] = useState([]);

  // Beim ersten Laden der Komponente Daten aus AsyncStorage abrufen
  useEffect(() => {
    getAppointmentsFromStorage();
  }, []);

  // Funktion zum Abrufen der gespeicherten Termine aus AsyncStorage
  const getAppointmentsFromStorage = async () => {
    try {
      const storedAppointments = await AsyncStorage.getItem('appointments');
      if (storedAppointments !== null) {
        setAppointments(JSON.parse(storedAppointments));
      }
    } catch (error) {
      console.log('Error fetching appointments:', error);
    }
  };

  // Funktion zum Speichern der Termine in AsyncStorage
  const saveAppointmentsToStorage = async (appointmentsToSave) => {
    try {
      await AsyncStorage.setItem('appointments', JSON.stringify(appointmentsToSave));
    } catch (error) {
      console.log('Error saving appointments:', error);
    }
  };

  const handleCreateAppointment = () => {
    const newAppointment = {
      date,
      time,
      description,
      employee,
    };

    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    saveAppointmentsToStorage(updatedAppointments);

    setDate('');
    setTime('');
    setDescription('');
    setEmployee('');
  };

  const handleRemoveAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    saveAppointmentsToStorage(updatedAppointments);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        placeholder="Mitarbeiter"
        value={employee}
        onChangeText={setEmployee}
        style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Beschreibung"
        value={description}
        onChangeText={setDescription}
        style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
      />

      <Button title="Termin erstellen" onPress={handleCreateAppointment} />

      <Text>Gespeicherte Termine:</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <Text>Datum: {item.date}</Text>
            <Text>Uhrzeit: {item.time}</Text>
            <Text>Mitarbeiter: {item.employee}</Text>
            <Text>Beschreibung: {item.description}</Text>
            <Button title="Termin löschen" onPress={() => handleRemoveAppointment(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default AppointmentScreen;
