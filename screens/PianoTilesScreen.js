import { View, Text } from 'react-native';
import styles from '../styles';
import Card from '../components/Card';

export default function PianoTilesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, color: '#fff'}}>Piano tiles screen</Text>
      <Card style={styles.card}>
        <Text style={{ color: '#fff' }}>Piano tiles</Text>
      </Card>
    </View>
  )
}