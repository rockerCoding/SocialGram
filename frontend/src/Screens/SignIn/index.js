import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import { styles } from './styles'
import { AuthContext } from '../../Contexts/AuthContext';
import { RoutesContext } from '../../Contexts/RoutesContext';
import AlertModal from '../../Components/AlertModal'

const SignIn = () => {

  const { login, user, isLoading } = useContext(AuthContext)

  const [iduser, setIdUser] = useState("")
  const [pass, setPass] = useState("")

  const [isVisible, setIsVisible] = useState(false)
  const [error, setError] = useState(false)

  const handleLogin = () => {
    const user = {
      login: iduser,
      pass: pass
    }

    login(user)
  }

  useEffect(() => {
    setIsVisible(isLoading)
    if (user?.message) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000);
    }
  }, [isLoading, user])


  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <Image
          source={require('../../../assets/imgs/social.gif')}
          style={{ width: Dimensions.get("screen").width, height: 320 }}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.erroContainer}>
          <Text style={styles.erroText}>{error ? user?.message : " "}</Text>
        </View>

        <TextInput
          value={iduser}
          onChangeText={(text) => setIdUser(text)}
          mode="outlined"
          label="Insira o login (cpf / email / tel)"

        />
        <TextInput
          value={pass}
          onChangeText={(text) => setPass(text)}
          mode="outlined"
          label="Insira sua senha"
          secureTextEntry
        />

        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonLogin}
          onPress={() => handleLogin()}
        >
          <AntDesignIcon name='check' color="white" size={30} />
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton}>
          <AntDesignIcon name='adduser' color="white" size={30} />
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
        </View>
        

      </View>

      <AlertModal modalVisible={isVisible} />

    </View>
  )
}

export default SignIn