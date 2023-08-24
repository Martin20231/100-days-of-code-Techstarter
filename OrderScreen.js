import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderScreen = () => {
  const [selectedArticle, setSelectedArticle] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [description, setDescription] = useState('');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersFromStorage();
  }, []);

  const getOrdersFromStorage = async () => {
    try {
      const storedOrders = await AsyncStorage.getItem('orders');
      if (storedOrders !== null) {
        setOrders(JSON.parse(storedOrders));
      }
    } catch (error) {
      console.log('Error fetching orders:', error);
    }
  };

  const saveOrdersToStorage = async (ordersToSave) => {
    try {
      await AsyncStorage.setItem('orders', JSON.stringify(ordersToSave));
    } catch (error) {
      console.log('Error saving orders:', error);
    }
  };

  const handleOrder = () => {
    const newOrder = {
      selectedArticle,
      selectedSize,
      description,
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    saveOrdersToStorage(updatedOrders);

    setSelectedArticle('');
    setSelectedSize('');
    setDescription('');
  };

  const handleRemoveOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
    saveOrdersToStorage(updatedOrders);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Artikel:</Text>
      <TextInput
        placeholder="T-Shirt, Caps, Hose, Mütze"
        value={selectedArticle}
        onChangeText={setSelectedArticle}
        style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
      />

      <Text>Größe:</Text>
      <TextInput
        placeholder="XS, S, M, L, XL"
        value={selectedSize}
        onChangeText={setSelectedSize}
        style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
      />

      <Text>Beschreibung:</Text>
      <TextInput
        placeholder="Beschreibung eingeben..."
        value={description}
        onChangeText={setDescription}
        style={{ marginVertical: 10, width: 200, padding: 5, borderWidth: 1 }}
        multiline
      />

      <Button title="Bestellung aufgeben" onPress={handleOrder} />

      <Text>Gespeicherte Bestellungen:</Text>
      <FlatList
        data={orders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <Text>Artikel: {item.selectedArticle}</Text>
            <Text>Größe: {item.selectedSize}</Text>
            <Text>Beschreibung: {item.description}</Text>
            <Button title="Bestellung löschen" onPress={() => handleRemoveOrder(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default OrderScreen;
