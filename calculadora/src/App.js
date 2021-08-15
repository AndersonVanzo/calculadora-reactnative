import React from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';
import Botao from './components/Botao';
import styles from './config/styles';

export default () => {
  return (
    <SafeAreaView style={styles.mainView}>
      {/* Visor */}
      <View style={styles.screen}></View>
      {/* Teclado */}
      <View style={styles.keyboard}>
        <Botao color={'#f00'} number={'C'} />
        <Botao color={'#05a300'} number={'( )'} />
        <Botao color={'#05a300'} number={'%'} />
        <Botao color={'#05a300'} number={'/'} />

        <Botao color={'#000'} number={7} />
        <Botao color={'#000'} number={8} />
        <Botao color={'#000'} number={9} />
        <Botao color={'#05a300'} number={'X'} />

        <Botao color={'#000'} number={4} />
        <Botao color={'#000'} number={5} />
        <Botao color={'#000'} number={6} />
        <Botao color={'#05a300'} number={'-'} />

        <Botao color={'#000'} number={1} />
        <Botao color={'#000'} number={2} />
        <Botao color={'#000'} number={3} />
        <Botao color={'#05a300'} number={'+'} />

        <Botao color={'#000'} number={'+/-'} />
        <Botao color={'#000'} number={0} />
        <Botao color={'#000'} number={','} />
        <Botao color={'#05a300'} number={'='} />
      </View>
    </SafeAreaView>
  );
}