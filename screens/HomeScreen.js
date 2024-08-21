import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';

const properties = [
  { id: '1', title: 'Casa A', image: 'https://ryazbek.com.br/wp-content/uploads/2019/11/original-ccba23ab2eb493b23837674485286bcf.jpg', description: 'Casa com 3 quartos' },
  { id: '2', title: 'Casa B', image: 'https://via.placeholder.com/150', description: 'Casa com 2 quartos' },
  { id: '3', title: 'Casa B', image: 'https://via.placeholder.com/150', description: 'Casa com 2 quartos' },
  // Adicione mais propriedades conforme necessário
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={properties}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Button
              title="Ver Detalhes"
              onPress={() => navigation.navigate('PropertyDetails', { property: item })}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
    padding: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default HomeScreen;
