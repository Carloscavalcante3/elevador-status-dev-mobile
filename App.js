import React, { useState } from 'react';
import { View, Text, ScrollView, Switch } from 'react-native';
import { styles } from './styles';

const DATA = [
  "Manutenção em andamento",
  "Sistema sendo atualizado",
  "Capacidade reduzida",
  "Inspeção programada",
  "Painel atualizado",
  "Operação normal em breve"
];

export default function App() {
  const [dark, setDark] = useState(false);

  const theme = {
    bg: dark ? '#0F0F10' : '#FAFAFA',
    card: dark ? '#1A1A1C' : '#FFFFFF',
    text: dark ? '#F2F2F2' : '#111111',
    sub: dark ? '#A1A1AA' : '#6B7280'
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>

      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>
          Atualização
        </Text>

        <Switch
          value={dark}
          onValueChange={setDark}
          trackColor={{ false: '#D1D5DB', true: '#4B5563' }}
          thumbColor="#FFFFFF"
        />
        
      </View>

      <Text style={[styles.subtitle, { color: theme.sub }]}>
        Sistema em andamento
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {DATA.map((item, i) => (
          <View key={i} style={[styles.card, { backgroundColor: theme.card }]}>
            <Text style={[styles.cardText, { color: theme.text }]}>
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>

    </View>
  );
}
