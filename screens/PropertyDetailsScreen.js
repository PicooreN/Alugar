import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'; // Biblioteca para modais estilizados

// Função para formatar o CPF
const formatCPF = (value) => {
  value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  if (value.length <= 3) return value;
  if (value.length <= 6) return `${value.slice(0, 3)}.${value.slice(3)}`;
  if (value.length <= 9) return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
  return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`;
};

// Função para formatar o telefone
const formatPhone = (value) => {
  value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  if (value.length <= 2) return `(${value}`;
  if (value.length <= 6) return `(${value.slice(0, 2)}) ${value.slice(2)}`;
  return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
};

const PropertyDetailsScreen = ({ route, navigation }) => {
  const { property } = route.params;
  
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleRent = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: property.image }} style={styles.image} />
      <Text style={styles.title}>{property.title}</Text>
      <Text>{property.description}</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
        />
        <Text style={styles.label}>CPF:</Text>
        <TextInput
          style={styles.input}
          value={formatCPF(cpf)}
          onChangeText={text => setCpf(text)}
          placeholder="Digite seu CPF"
          keyboardType="numeric"
          maxLength={14}
        />
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          value={formatPhone(phone)}
          onChangeText={text => setPhone(text)}
          placeholder="Digite seu telefone"
          keyboardType="phone-pad"
          maxLength={15}
        />
        <Button title="Alugar" onPress={handleRent} />
      </View>

      <Button title="Voltar" onPress={() => navigation.goBack()} />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={handleModalClose}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Sucesso!</Text>
          <Text style={styles.modalText}>Alugado com sucesso</Text>
          <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  formContainer: {
    marginVertical: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PropertyDetailsScreen;
