import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import metaLogo from "../../assets/images/Meta-logo.png";
import iglogo from "../../assets/images/iglogo.png";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation();

  const [inputLogin, setInputLogin] = useState<string>("");
  const [inputSenha, setInputSenha] = useState<string>("");

  const navigateLogin = () => {
    navigation.navigate("login" as never);
  };

  const navigateCadastro = () => {
    navigation.navigate("cadastrar" as never);
  };

  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back-outline" size={24} color="black" />
      <View>
        <Text style={styles.text}>Português (Brasil)</Text>
      </View>
      <View>
        <Image style={styles.iglogo} source={iglogo} />
      </View>
      <View style={{ flexDirection: "column", gap: 10 }}>
        <TextInput
          style={styles.textinput}
          onChangeText={setInputLogin}
          placeholder="Nome de usuário, email ou número de celular"
          placeholderTextColor="#8895A3"
        />
        <TextInput
          style={styles.textinput}
          onChangeText={setInputSenha}
          placeholder="Senha"
          placeholderTextColor="#8895A3"
        />
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={navigateLogin} style={styles.buttonEntrar}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={navigateCadastro} style={styles.buttonCriar}>
          <Text style={{ color: "#0064E0", fontWeight: "bold" }}>
            Criar nova conta
          </Text>
        </TouchableOpacity>
        <View>
          <Image style={styles.metalogo} source={metaLogo} />
        </View>
      </View>
    </View>
  );
};

export default Login;
