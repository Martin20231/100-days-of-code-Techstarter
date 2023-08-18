import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppointmentScreen from './AppointmentScreen'; // Pfad zur Datei entsprechend anpassen
import OrderScreen from './OrderScreen'; // Import der OrderScreen-Komponente hinzufügen



// Rest of your code...


// Anmeldeseite
const LoginScreen = ({ navigation }) => {
  const [accessCode, setAccessCode] = useState('');

  const handleLogin = () => {
    const validCodes = ['123', '1234', '12345', '123456']; // Hier die erlaubten Codes eintragen
    if (validCodes.includes(accessCode)) {
      navigation.navigate('Startseite');
    } else {
      // Zeige eine Fehlermeldung oder führe andere Aktionen aus
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Anmeldeseite</Text>
      <TextInput
        placeholder="Zugangscode"
        value={accessCode}
        onChangeText={setAccessCode}
        style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
      />
      <Button title="Anmelden" onPress={handleLogin} />
    </View>
  );
};


// ... (Weitere Komponenten bleiben unverändert)


// ... (Importe und Anmeldeseite bleiben unverändert)

class HomeScreen extends React.Component {
  handleLogout = () => {
    this.props.navigation.navigate('Login'); // Navigate to the Login screen
  };

  handleAppointments = () => {
    this.props.navigation.navigate('Termin'); // Navigate to the Appointment screen
  };

  handleOrders = () => {
    // Fügen Sie hier die Navigation zur Bestellungsseite hinzu
    this.props.navigation.navigate('Bestellung');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        {/* ... (Rest des Codes) */}
        
        {/* Place the buttons in a row with centered alignment */}
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Button
            title="Termine"
            onPress={this.handleAppointments} // Navigate to the Appointment screen
          />
          <Button
            title="Bestellungen"
            onPress={this.handleOrders} // Navigate to the Orders screen
          />
          <Button
            title="Logout"
            onPress={this.handleLogout} // Navigate to the Login screen
          />
        </View>
      </View>
    );
  }
}

// ... (Rest of your code remains unchanged)

// Stack-Navigation
const AppNavigator = createStackNavigator({
  // ...
  Startseite: HomeScreen,
  Login: LoginScreen,
  Termin: AppointmentScreen,
  // Hier die Bestellungsseite-Komponente einfügen
  Bestellung: OrderScreen,
  // ...
});

export default createAppContainer(AppNavigator);

