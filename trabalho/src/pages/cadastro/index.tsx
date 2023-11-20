import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import metaLogo from "../../assets/images/Meta-logo.png";
import iglogo from "../../assets/images/iglogo.png";
import { Ionicons } from "@expo/vector-icons";

const Cadastro = () => {
  const navigation = useNavigation();

  const [input, setInput] = useState<string>("");
  const [inputSalvo, setInputSalvo] = useState<string[]>([]);

  const navigateLogin = () => {
    navigation.navigate("login" as never);
  };

  const handleInput = () => {
    setInputSalvo((oldState) => [...oldState, input]);
  };
  
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={navigateLogin}
        name="arrow-back-outline"
        size={24}
        color="black"
      />
      <View>
        <Text style={styles.text}>Português (Brasil)</Text>
      </View>
      <View>
      <TextInput
        style={styles.textinput}
        onChangeText={setInput}
        placeholder="Digite aqui"
        placeholderTextColor="#8895A3"
      />
      <Button
        onPress={() => {
          handleInput();
        }}
        title="Clique para salvar"
      />
        <Image style={styles.iglogo} source={iglogo} />
      </View>
      <View style={{ flexDirection: "column", gap: 10, alignItems: "center" }}>
        <Text>Essa é a tela de cadastro!</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={navigateLogin} style={styles.buttonEntrar}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Voltar para a tela de login!
          </Text>
        </TouchableOpacity>
        <Text style={{marginTop:10, alignSelf: "center" }}>Lista de inputs salvos:</Text>
        <FlatList
          data={inputSalvo}
          renderItem={({ item }) => {
            return <Text>{item}</Text>;
          }}
        />
      </View>
      <View>
        <View>
          <Image style={styles.metalogo} source={metaLogo} />
        </View>
      </View>
    </View>
  );
};

export default Cadastro;
