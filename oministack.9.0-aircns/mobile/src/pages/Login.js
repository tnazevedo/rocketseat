import React,{useState} from 'react';
//aqui são tipo tags de html que o react importa
//View é => div todos os elementos do import abaixo são conhecidos como componentes
// Text => Texto
//Stylesheet => folha de estilo 
//Estilos são feitos na própria pagina 
import {View, KeyboardAvoidingView, Platform,Text, Image, StyleSheet,TextInput, TouchableOpacity} from 'react-native';



//importando logotipos
import Logo from '../assets/logo.png';


export default function Login(){
    const [email, setEmail] = useState("");
    const [techs, setTechs] = useState("");

    async function handleSubmit(){
        //emails techs;
        const response = api.post('/sessions',{
            email,
           
        })

        const {_id}  = response.data;

        console.log(_id);
     
    }
    return (
      //enabled={Platform.OS==='ios'} habilita a função de padding apenas para IOS
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image source={Logo} />
        <View style={styles.form}>
          <Text style={styles.label}>Seu E-mail *</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu melhor e-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.label}>Tecnologias *</Text>
          <TextInput
            style={styles.input}
            placeholder="Quais tecnologias você domina"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={techs}
            onChangeText={text => setTechs(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}> Encontrar Spots</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom:8,


    },
    form:{
        alignSelf:'stretch',
        paddingHorizontal:30,
        marginTop:30,
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        paddingHorizontal:20,
        fontSize:16,
        color: '#444',
        height:44,
        marginBottom:20,
        borderRadius:2,
    },
    button:{
        height:42,
        backgroundColor:'#f05a5b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,

    },
    buttonText:{
        color: '#fff',
        fontWeight:'bold',
        fontSize:16

    },
});