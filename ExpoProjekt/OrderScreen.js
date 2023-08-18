import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class OrderScreen extends React.Component {
  state = {
    selectedArticle: '',
    selectedSize: '',
    description: '',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Artikel:</Text>
        <TextInput
          placeholder="T-Shirt, Caps, Hose, Mütze"
          value={this.state.selectedArticle}
          onChangeText={(text) => {
            this.setState({ selectedArticle: text });
          }}
          style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
        />

        <Text>Größe:</Text>
        <TextInput
          placeholder="XS, S, M, L, XL"
          value={this.state.selectedSize}
          onChangeText={(text) => {
            this.setState({ selectedSize: text });
          }}
          style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
        />

        <Text>Beschreibung:</Text>
        <TextInput
          placeholder="Beschreibung eingeben..."
          value={this.state.description}
          onChangeText={(text) => {
            this.setState({ description: text });
          }}
          style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
          multiline
        />

        <Button title="Bestellung aufgeben" onPress={this.handleOrder} />
      </View>
    );
  }

  handleOrder = () => {
    const { selectedArticle, selectedSize, description } = this.state;

    // Hier könnten Sie eine POST-Anfrage an Ihren Server senden
    // Beispiel mit fetch:
    fetch('https://example.com/submit-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        article: selectedArticle,
        size: selectedSize,
        description: description,
      }),
    })
    .then(response => response.json())
    .then(data => {
      // Hier können Sie die Antwort vom Server verarbeiten, z.B. Erfolgsmeldung anzeigen
    })
    .catch(error => {
      // Hier können Sie Fehler verarbeiten, z.B. Fehlermeldung anzeigen
    });
  };
}

export default OrderScreen;
