import { View, Text, Button } from 'react-native';
import styles from '../styles';
import Card from '../components/Card';

export default function GamesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, color: '#fff'}}>Game screen</Text>
      <Card style={styles.card}>
        <Text style={{ color: '#fff' }}>Piano tiles</Text>
        <Button style={styles.button} title="Play" onPress={()=>navigation.navigate("Piano Tiles")} />
      </Card>
    </View>
  )
}