import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { useState, useEffect } from 'react';

export default function App() {
  const [Visivel, setVisivel] = useState(false);
  const [Etanol, setEtanol] = useState(0);
  const [Gasolina, setGasolina] = useState(0);
  const [Resultado, setResultado] = useState(0);
  const [Mensagem, setMensagem] = useState('');

  const Calcular = () => {

    if(!Etanol || !Gasolina || Etanol===0 || Gasolina===0){
      alert("Informe o valor da gasolina ou do etanol")
      return
    }
    setResultado((Etanol / Gasolina) * 100);
    setVisivel(true);
  };

  const Limpar = () =>{
    setVisivel(false);
    setEtanol('');
    setGasolina('');
    setResultado(0);
    setMensagem("");
  }

  useEffect(() => {
    if (Resultado > 70) {
      setMensagem("Gasolina");
    } else {
      setMensagem("Etanol");
    }
  }, [Resultado]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            backgroundColor: 'blue',
            width: '100%',
            padding: 15,
            textAlign: 'center',
            color: 'white',
          }}>
          Calcular combustivel
        </Text>

        <TextInput
          style={{
            textAlign: 'center',
            borderWidth: 2,
            borderColor: 'green',
            borderRadius: 5,
            width: '80%',
            height: 40,
            marginTop: 20,
          }}
          placeholder="Etanol"
          onChangeText={(a) => setEtanol(parseFloat(a))}
          value={Etanol ? Etanol.toString(): ""}
        />

        <TextInput
          style={{
            textAlign: 'center',
            borderWidth: 2,
            borderRadius: 5,
            borderColor: 'red',
            width: '80%',
            height: 40,
            marginTop: 10,
          }}
          placeholder="Gasolina"
          onChangeText={(a) => setGasolina(parseFloat(a))}
          value={Gasolina ? Gasolina.toString(): ""}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 3,
              width: '45%',
              backgroundColor: 'black',
              borderRadius: 5,
              height: 40,
              justifyContent: 'center',
            }}
            onPress={Calcular}
            >
            <Text style={{ textAlign: 'center', color: 'white' }}>
              calcular
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 3,
              width: '45%',
              backgroundColor: 'black',
              borderRadius: 5,
              height: 40,
              justifyContent: 'center',
            }}
            onPress={Limpar}
            >
            <Text style={{ textAlign: 'center', color: 'white' }}>limpar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        {Visivel ? (
          <ImageBackground
            source={require('./assets/images.jpg')}
            style={{
            margin:20,
            padding:30,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:8,
            overflow:'hidden',
            shadowColor:"#000",
            shadowOffset:{width:2,height:4},
            shadowOpacity:0.4,
            shadowRadius:8,
            elevation:8,
            height:100
            }}>
            <Text style={{ color: 'white' }}>{Resultado.toFixed(2)}%</Text>
            <Text style={{ color: 'white' }}> abasteça com {Mensagem}</Text>
            <Text style={{ color: 'white' }}></Text>
          </ImageBackground>
        ) : null}
      </View>
    </View>
  );
}
