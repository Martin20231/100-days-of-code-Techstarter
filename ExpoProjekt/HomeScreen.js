// HomeScreen.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
  handleAppointments = () => {
    this.props.navigation.navigate('Termin'); // Navigieren zur AppointmentScreen-Seite
  };

  handleLogout = () => {
    this.props.navigation.navigate('Login'); // Navigieren zur Login-Seite
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Startseite</Text>
        
        {/* Place the buttons in a row with "Termine" button centered */}
        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
          <Button
            title="Termine"
            onPress={this.handleAppointments} // Navigate to the Appointment screen
          />
          <View style={{ marginLeft: 10 }}>
            <Button
              title="Logout"
              onPress={this.handleLogout} // Navigate to the Login screen
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
